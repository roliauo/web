import React, {Fragment, useRef} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {I_NavLinks} from '../../constants';
import SidebarContainer from "./Sidebar";
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import { URL } from "@shop/constants";

import { connect } from "react-redux";
import {actionOperations} from '@shop/state/ducks/Product';
import {actionOperations as MemberActions} from '@shop/state/ducks/Member';

interface I_Props {
    searchProduct: (search: string) => void;
    logout: (id: number) => void;
    links: I_NavLinks[];
    userID: number;
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

    .mobile-menu-bg {
        display: none
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; /* Enable scroll */
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
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
            box-shadow: 0 0 2rem 0 rgb(0 0 0 / 50%);
        }

        &.active + .modal {
            display: block;
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
    const {userID, links = [], searchProduct, logout} = props;
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
            searchProduct(searchRef.current.value);
            navigate(URL.products);
        }
        e.currentTarget.classList.toggle("active");
    }

    function handleLogout(e) {
        e.preventDefault();
        console.log('Logout');

        localStorage.clear();
        sessionStorage.clear();

        logout(userID);
        navigate(URL.home);
    }

    return (
        <StyleWrapper>
            <div className="btn-mobile-menu" onClick={() => showMobileMenu(true)}> &#9776; </div>
            <div className="mobile-menu" ref={mobileMenuRef}>
                <div className="btn-close" onClick={() => showMobileMenu(false)}>&times;</div>
                <SidebarContainer />
            </div>
            <div className="modal" />

            {
                userID !== undefined &&
                <Button name="Log out" hover="登出" handleClick={handleLogout} />

            }
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


const mapStateToProps = (state) => ({
    userID: state.setMember.user.id,
})

const mapDispatchToProps = (dispatch) => ({
    searchProduct: (search: string) => {
        dispatch(actionOperations.searchProduct(search));
    },
    logout: (id: number) => {
        dispatch(MemberActions.logout(id));
    }
})

const NavConatiner = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavConatiner;