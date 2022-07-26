import React, {Fragment, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {I_NavLinks} from '../../constants';
import SidebarContainer from "./SidebarContainer";
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

interface I_Props {
    searchProduct: (search: string) => void;
    links: I_NavLinks[];
}

const StyleWrapper = styled.nav`
    display: flex;
    justify-content: flex-end;
    height: inherit;
    padding: 0 0.5rem;

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
                        <Button name={m.name} url={m.url} hover={m.hover} iconClassName={m.iconClassName} icon={m.icon} />
                        {/* <Link className="link" to={m.url}>
                            <i className={m.iconClassName}>{m.icon}</i>
                            <span data-hover={m.hover} data-base={m.name}/>
                        </Link> */}
                        <span className="divider"> / </span>
                    </Fragment>

                )
            }

            <Dropdown button={
               <Button name="Search" hover="搜尋" iconClassName="material-icons" icon="search" handleClick={toggleSearch}/>
            }>
                <input ref={searchRef} type="text" name="search" placeholder="Search" />
            </Dropdown>


        </StyleWrapper>
    )
}

export default Nav;