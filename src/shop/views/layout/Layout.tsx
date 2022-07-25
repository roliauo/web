import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Nav from './NavContainer';
import Header from '../components/Header';
import Footer from "../components/Footer";
import {NAV_LINKS} from '../../constants';
// import {I_MenuItem} from '../components/CollapsibleMenu';
// import dataService from '../../service/dataService';
import '../root.css';

// interface Props {
//     updateSidebarMenu: (menu: I_MenuItem) => void;
//     update
//     menu: I_MenuItem[];
// }

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