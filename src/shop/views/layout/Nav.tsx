import React, {Fragment, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {I_NavLinks} from '../../constants';
import SidebarContainer from "./SidebarContainer";

interface I_Props {
    searchProduct: (search: string) => void;
    links: I_NavLinks[];
}

const StyleWrapper = styled.nav`
    display: flex;
    justify-content: flex-end;
    height: inherit;
    padding: 0 0.5rem;

    .link, .btn-search {
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

    .divider {
        display: inline;
        // &:last-child {
        //     display: none;
        // }
    }

    .btn-mobile-menu {
        position: absolute;
        left: -100px;
        padding: 0 1rem;
        font-size: 1.2rem;
        transition: left .3s;
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

    .dropdown {
        position: relative;
    }

    .search-content {
        position: absolute;
        right: 0;
        height: 0px;
        background: bisque;
        display: flex;
        z-index: 1;
        transition: .4s;
        overflow: hidden;
    }

    .btn-search.active + .search-content {
        height: 40px;
    }

    @media (max-width: 767px) {
        // [class*="mobile-"] {
        //     display: block !important;
        // }

        .btn-mobile-menu {
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
    const mobileMenuRef = useRef<HTMLDivElement>();
    const searchRef = useRef<HTMLInputElement>();
    const {links = []} = props;
    const navigate = useNavigate();

    function showMobileMenu(show: boolean) {
        if (show){
            mobileMenuRef.current.classList.add("active");
        }
        else {
            mobileMenuRef.current.classList.remove("active");
        }
    }

    function toggleSearch(e: React.MouseEvent<HTMLElement>) {
        if (e.currentTarget.classList.contains("active") && searchRef.current.value.length > 0){
            props.searchProduct(searchRef.current.value);
            navigate('/products');
        }
        e.currentTarget.classList.toggle("active");


    }

    return (
        <StyleWrapper>
            <div className="btn-mobile-menu" onClick={() => showMobileMenu(true)}> &#9776; </div>
            <div className="mobile-menu" ref={mobileMenuRef}>
                <div className="btn-close" onClick={() => showMobileMenu(false)}>&times;</div>
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
            <div className="dropdown">
                <div className="btn-search" onClick={toggleSearch}>
                    <i className="material-icons">search</i>
                    <span data-hover="搜尋" data-base="Search"/>
                </div>
                <div className="search-content">
                    <input ref={searchRef} type="text" name="search" placeholder="Search" />
                </div>
            </div>


        </StyleWrapper>
    )
}

export default Nav;