import React from "react";
import ReactDOM  from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from './state/store';
import Home from './views/Home';
import PageProducts from './views/PageProducts';

const ShopRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={} exact/> */}
                <Route path='/shop' element={<Home/>} />
                <Route path='/shop/products' element={<PageProducts/>} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <ShopRouter/>
    </Provider>  
)
