import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface I_Link{
    name: string;
    url: string;
    hover: string;
}

interface I_Props {
    links: I_Link[];
}

const StyleWrapper = styled.nav`
    display: flex;
    justify-content: flex-end;
    background: #a3a380;  //#6c7f9f
    color: #fff;
    height: 2rem;
    line-height: 2rem;
    
    .link {
        position: relative;
        color: #fff;
        text-decoration: none;

        // :after {
        //     content: '/';
        //     color: #fff;
        //     margin-left: 6px;
        // }

        :last-child::after {
            opacity: 0;
        }

        >span {
            display: inline-block;
            width: 100px;
        }

        >span:before, >span:after {
            content: attr(data-hover);
            position: absolute;
            text-align: center;
            top: 0;
            left: 0;
            margin-top: -1rem;
            opacity: 0;
            width: 100%; 
            transition: 0.3s;
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

            // span:after {  // highlight
            //     content: '';
            //     background-color: rgba(0, 0, 0, .5);
            //     width: 100%;
            //     height: 1px;
            //     position: absolute;
            //     left: 0;
            //     bottom: -3px;
            //     transition: .12s;
            // }
        }


    }

`

const Nav = (props: I_Props) => {
    const {links = []} = props;
    
    if (links.length > 0)
    return (
        <StyleWrapper>
            {links.map((m, i) => 
                <>
                    <Link key={i} className="link" to={m.url}> 
                        <span data-hover={m.hover} data-base={m.name}/>
                    </Link>
                    { (i+1 < links.length)  && <span> / </span> }
                </>
              
                )
            }
        </StyleWrapper>
    )
}

export default Nav;