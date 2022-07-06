import React from "react";
import styled from "styled-components";
import Nav from './Nav';
import Header from './Header';
import Footer from "./Footer";
import {LINKS} from '../../constants';

const StyleWrapper = styled.div`
    .nav {

    }

    .header {
        height: 200px;
        line-height: 200px;
        background-color: var(--theme-color-header);        
    }

    .main {
        height: calc(100vh - 200px);
        background: var(--theme-color-main);
    }

    .footer {
        
    }
`


const Layout = (props) => {
        
    return (
        <StyleWrapper>
            <div className="nav">
                <Nav links={LINKS} />
            </div>
            <div className="header">
               <Header />
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