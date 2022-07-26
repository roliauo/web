import React from "react";
import styled from "styled-components";

interface Props {
    //displayName: string;
    button: any;
    children?: any;
}

const StyleWrapper = styled.div`
    position: relative;
    display: inline-block;

    .btn-dropdown {

    }

    .content {
        position: absolute;
        left: 0;
        background: #cecece;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        min-width: 120px;
        z-index: 1;
        max-height: 0;
        overflow: hidden;
        transition: .4s;
    }

    .btn-dropdown.active + .content {
        max-height: 600px;
    }

    .btn-dropdown.edge-right + .content {
        right: 0;
        left: unset;
    }
`

export default function Dropdown(props: Props) {

    function handleClick(event: React.MouseEvent<HTMLElement>) {
        event.currentTarget.classList.toggle("active");
        const elementPosition = event.currentTarget.getBoundingClientRect();
        const padding = 8;

        if (elementPosition.right + padding >= window.visualViewport.width) {
            event.currentTarget.classList.add("edge-right");
        }
    }

    return (
        <StyleWrapper>
            <div className="btn-dropdown" onClick={handleClick}>
                {props.button}
            </div>
            <div className="content">
                {props.children}
            </div>
        </StyleWrapper>
    )
}
