import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {I_NAV_LINKS} from '../../constants';
import SidebarContainer from "../layout/SidebarContainer";
interface I_Props {
    links: I_NAV_LINKS[];
}

const StyleWrapper = styled.nav`
    display: flex;
    justify-content: flex-end;
    height: inherit;
    padding: 0 0.5rem;
    
    .link {
        display: flex;
        position: relative;
        background: inherit;
        color: inherit;
        text-decoration: none;
        width: 100px;
        transition: .4s;

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
 
    .divider {
        display: inline;
        &:last-child {
            display: none;
        }
    }

    .mobile-menu-button {
        position: absolute;
        left: -100px;
        padding: 0 1rem;
        font-size: 1.2rem;
        cursor: pointer;
        transition: left .3s;
        //display: none;
    }

    .mobile-menu {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        background-color: #f7d3d3;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;

        &.active {
            width: 250px;
        }

        .btn-close {
            position: absolute;
            top: 0;
            right: 0.5rem;
            font-size: 2rem;
        }
    }

    @media (max-width: 767px) {
        // [class*="mobile-"] {
        //     display: block !important;
        // }

        .mobile-menu-button {
            left: 0;
        }

        i {
            font-size: 1.2rem;
        }

        .link > span, .divider {
            //display: none;
            opacity: 0;
            width: 0;
        }

        .link {
            width: 48px;
        }

    }

`

function Nav(props: I_Props) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const {links = []} = props;
        
    return (
        <StyleWrapper>
            <div className="mobile-menu-button" onClick={() => setShowMobileMenu(!showMobileMenu)}> &#9776; </div>
            <div className={ showMobileMenu ? 'mobile-menu active' : 'mobile-menu'}>
                <div className="btn-close" onClick={() => setShowMobileMenu(false)}>&times;</div>
                <SidebarContainer />
            </div>
            {
                links.length > 0 &&
                links.map((m, i) => 
                    <Fragment key={i}>
                        <Link className="link" to={m.url}> 
                            <i className={m.iconClassName}>{m.icon}</i>
                            <span data-hover={m.hover} data-base={m.name}/>
                        </Link>
                        <span className="divider"> / </span>
                    </Fragment>
              
                )
            }
        </StyleWrapper>
    )
}

export default Nav;