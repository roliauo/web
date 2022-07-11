import React from "react";
import styled from "styled-components";
import Nav from './Nav';
import Header from './Header';
import Footer from "./Footer";
import {LINKS} from '../../constants';

const StyleWrapper = styled.div`
    width: 100vw;
    
    .fixed {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 900;
    }

    .nav {
        height: 2rem;
        line-height: 2rem;
    }

    .header {
        height: 150px;
        line-height: 150px;
        background-color: var(--theme-color-header);        
    }

    .main {
        margin-top: calc(150px + 2rem);
        height: 100vh; 
        background: var(--theme-color-main);
    }

    .footer {
        
    }
`


function Layout(props) {
        
    return (
        <StyleWrapper>
            <div className="fixed">
                <div className="nav">
                    <Nav links={LINKS} />
                </div>
                <div className="header">
                    <Header />
                </div>
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