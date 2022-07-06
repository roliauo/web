import React from "react";
import styled from "styled-components";
import Nav from './Nav';
import Header from './Header';
import Footer from "./Footer";

const StyleWrapper = styled.div`
    .nav {

    }

    .header {
        height: 100px;
        background-color: aliceblue;        
    }

    .main {
        height: calc(100vh - 100px);
    }

    .footer {
        
    }
`

const links = [
    {name: 'Home', url:'/shop', hover: '首頁'},
    {name: 'Login', url:'/shop/login', hover: '登入'},
    //{name: 'Log out', url:'/shop/logout', hover: '登出'},
    {name: 'Member', url:'/shop/member', hover: '會員'},
    {name: 'Products', url:'/shop/products', hover: '商品'},
    {name: 'Cart', url:'/shop/cart', hover: '購物車'},
]

const Layout = (props) => {
        
    return (
        <StyleWrapper>
            <div className="nav">
                <Nav links={links} />
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