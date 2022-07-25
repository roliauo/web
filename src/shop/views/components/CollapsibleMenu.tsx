import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.section<{
    color?: string;
    background?: string;
    activeColor?: string;
    activeBackground?: string;
    contentColor?: string;
    contentBackground?: string;
    }>`
    .collapsible, .uncollapsible {
        background-color: ${props => props.background || "transparent" };
        color: ${props => props.color || "#996e24" };
        cursor: pointer;
        padding: 1rem;
        border: none;
        outline: none;
        font-weight: bold;

        &.active, :hover {
           // background-color: ${props => props.activeBackground || "#e9cfcf" };
            color:  ${props => props.activeColor || "cornflowerblue" };
        }
    }

    .content {
        max-height: 0px;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
        background-color: ${props => props.contentColor || "transparent" };

        ul {
            margin: 0;
        }

        li {
            cursor: pointer;
        }
    }

    .collapsible.active + .content {
        max-height: 800px;
        transition: max-height 0.5s ease-in-out;
    }

    .collapsible:after {
        content: " \\002B";
        font-weight: bold;
        float: right;
    }

    .collapsible.active:after {
        content: " \\002D";
    }

`

export interface I_MenuItem {
    id: number;
    name: string;
    icon: string;
    children: I_MenuItem[];
}

interface Props {
    menuItems: I_MenuItem;
    handleClickItem: (item: I_MenuItem) => void;
}

export default function CollapsibleMenu(props: Props) {
    const {menuItems, handleClickItem} = props;

    function toggleActive(event: React.MouseEvent<HTMLElement>) {
        if (menuItems.children.length == 0) return;
        event.currentTarget.classList.toggle("active");
    }

    return (
        <StyledWrapper>
            {
                menuItems.children.length > 0 ?
                <>
                    <div className="collapsible" onClick={toggleActive}>
                        {menuItems.name}
                    </div>
                    <div className="content">
                        <ul>
                            {menuItems.children.map((m) =>
                                <li key={m.id} onClick={() => handleClickItem(m)}>
                                    {m.name}
                                </li>
                            )}
                        </ul>
                    </div>
                </>
                :
                <div className="uncollapsible" onClick={() => handleClickItem(menuItems)}>
                    {menuItems.name}
                </div>
            }
        </StyledWrapper>
    )
}
