import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from "../components/Footer";
import {NAV_LINKS} from '../../constants';
import '../root.css';

const StyleWrapper = styled.div<{isTop: boolean;}>`
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

        ${props => !props.isTop ? 
            `position: sticky;
            width: 100%;
            top: 0;
            z-index: 100;` : ''}
    }

    .header {
        height: ${props => props.isTop ? "150px" : "0"};
        line-height: 150px;
        background-color: var(--bg-color-header); 
        color: var(--header-color);
        transition: 0.3s;    
    }

    .main {
        //margin-top: calc(150px + 2rem);
        margin-top:  ${props => props.isTop ? "0" : "2rem"};
        height: 100vh; 
        background: var(--bg-color-main);
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

    // TODO: move to Nav to avoid randering full page
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        window.onscroll = () => handleOnScroll();
        return () => window.removeEventListener('scroll', handleOnScroll);
    }, [])

    function handleOnScroll() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setIsTop(false);
        } else {
            setIsTop(true);
        }
    }
        
    return (
        <StyleWrapper isTop={isTop}>
            <div className="header">
                <Header />
            </div>
            <div className="nav">
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