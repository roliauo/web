import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./container/Login";
import PageHome from './container/PageHome';
import PageMemberContainer from "./container/PageMember";
import PageProductsContainer from './container/PageProductsContainer';


function App() {

    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Layout>
                <Routes>
                    <Route path='/' element={<PageHome/>} />
                    <Route path='/products' element={<PageProductsContainer/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/member' element={<PageMemberContainer/>} />
                    {/* <Route path='/wishlist' element={<PageWishList/>} />
                    <Route path='/cart' element={<PageCart/>} /> */}
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;