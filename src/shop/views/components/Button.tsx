import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
    name: string;
    url?: string;
    hover?: string;
    icon?: string;
    iconClassName?: string;
    handleClick?: (e) => void;
}

const StyleWrapper = styled.div`
    .link {
        display: flex;
        position: relative;
        background: inherit;
        color: inherit;
        text-decoration: none;
        width: 100px;
        transition: .4s;
        cursor: pointer;

        :last-child::after {
            opacity: 0;
        }

        >span {
            display: inline-block;
            width: inherit;
        }

        >span:before, >span:after {
            content: attr(data-hover);
            position: absolute;
            text-align: center;
            top: 0;
            right: 0;
            margin-top: -1rem;
            opacity: 0;
            width: calc(100% - 1.5rem);
            transition: .3s;
            //background: inherit;
        }

        >span:before {
            content: attr(data-base);
            opacity: 1;
            margin-top: 0;
        }

        :hover {
            >span:after {
                opacity: 1;
                margin-top: 1px;
                font-size: 0.92rem;
                // color: #e0d5ef;
            }

            >span:before {
                opacity: 0;
            }
        }

        i {
            line-height: inherit;
            font-size: 1rem;
            margin-left: 8px;
        }
    }

`

export default function Button(props: Props) {
    const  {name, url, hover, icon, iconClassName, handleClick} = props;
    if (!url || url.length == 0) {
        return (
            <StyleWrapper>
                <div className="link" onClick={handleClick}>
                    <i className={iconClassName}>{icon}</i>
                    <span data-hover={hover} data-base={name}/>
                </div>
            </StyleWrapper>
        )
    } else {
        return (
            <StyleWrapper>
                <Link className="link" to={url}>
                    <i className={iconClassName}>{icon}</i>
                    <span data-hover={hover} data-base={name}/>
                </Link>
            </StyleWrapper>
        )
    }

}