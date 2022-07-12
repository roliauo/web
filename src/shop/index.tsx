import React from "react";
import ReactDOM  from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from './state/store';
import Home from './views/Home';
import PageProducts from './views/PageProducts';

//basename={process.env.PUBLIC_URL || window.location.pathname || ''}

const ShopRouter = () => {
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<PageProducts/>} />
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
