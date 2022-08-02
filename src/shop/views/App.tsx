import React from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./container/Login";
import PageHome from './container/PageHome';
import PageMember from "./container/PageMember";
import PageProducts from './container/PageProducts';
import TextPage from "./components/TextPage";
import {URL} from '../constants';


function App() {
    // basename={window.location.pathname || ''}
    return (
        <HashRouter >
            <Layout>
                <Routes>
                    <Route path={URL.home} element={<PageHome/>} />
                    <Route path={URL.products} element={<PageProducts/>} />
                    <Route path={URL.login} element={<Login/>} />
                    <Route path={URL.member} element={<PageMember/>} />
                    <Route path={URL.privacy} element={<TextPage type="privacy"/>} />
                    {/* <Route path='/wishlist' element={<PageWishList/>} />
                    <Route path='/cart' element={<PageCart/>} /> */}
                </Routes>
            </Layout>
        </HashRouter >
    )
}

export default App;