import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Header from './Header';
import Footer from "./Footer";
import {NAV_LINKS} from '../../constants';
import '../root.css';
import Nav from "../container/Nav";

const StyleWrapper = styled.div`
    width: 100%;
    min-width: 300px;

    .fixed {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 100;
    }

    .nav {
        height: 2rem;
        line-height: 2rem;
        background: var(--nav-bg);
        color: var(--nav-color);

        &.sticky {
            position: sticky;
            width: 100%;
            top: 0;
            z-index: 100;
        }
    }

    .header {
        height: 150px;
        line-height: 150px;
        background-color: var(--bg-color-header);
        color: var(--header-color);
        transition: 0.3s;
    }

    .main {
        background: var(--bg-color-main);
        padding: 1rem;
        min-height: calc(100vh - 150px - 32px - 17px); // header: 150px, nav: 32px, footer: 17px
    }

    .fixed + .main, .sticky + .main {
        padding-top: 40px;
    }

    .footer {

    }

    /* Phone */
    @media screen (max-width: 767px) {
        //flex-direction: column;
    }

    /* Tablet*/
    @media screen (min-width: 768px) {

    }

    /* Desktop */
    @media screen (min-width: 1024px) {

    }
`

function Layout(props) {
    const navRef = useRef<HTMLDivElement>();

    useEffect(() => {
        window.onscroll = () => handleOnScroll();
        // dataService.getConfig()
        //         .then((resData) => {
        //             props.updateSidebarMenu(resData.category);
        //         });
        return () => window.removeEventListener('scroll', handleOnScroll);
    }, [])

    function handleOnScroll() {
        if (window.scrollY > 150) {
            navRef.current.classList.add("sticky");
        } else {
            navRef.current.classList.remove("sticky");
        }
    }

    return (
        <StyleWrapper>
            <div className="header">
                <Header />
            </div>
            <div className="nav" ref={navRef}>
                <Nav links={NAV_LINKS} />
            </div>
            <div className="main">
                {props.children}
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </StyleWrapper>
    )
}


export default Layout;