import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./container/Login";
import PageHome from './container/PageHome';
import PageMember from "./container/PageMember";
import PageProducts from './container/PageProducts';


function App() {
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Layout>
                <Routes>
                    <Route path='/' element={<PageHome/>} />
                    <Route path='/products' element={<PageProducts/>} />
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