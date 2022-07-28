import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./layout/Login";
import PageHome from './layout/PageHome';
import PageMember from "./layout/PageMember";
import PageProductsContainer from './layout/PageProductsContainer';


function App() {

    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Layout>
                <Routes>
                    <Route path='/' element={<PageHome/>} />
                    <Route path='/products' element={<PageProductsContainer/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/member' element={<PageMember/>} />
                    {/* <Route path='/wishlist' element={<PageWishList/>} />
                    <Route path='/cart' element={<PageCart/>} /> */}
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;