import React from "react";
import ReactDOM  from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from './state/store';
import Home from './views/Home';
import PageProducts from './views/PageProducts';

//window.location.pathname || ''
//basename={process.env.PUBLIC_URL || window.location.pathname || ''}

const ShopRouter = () => {
    console.log('process.env.PUBLIC_URL: '+process.env.PUBLIC_URL)
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Routes>
                {/* <Route path='/' element={} exact/> */}
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<PageProducts/>} />
            </Routes>
        </BrowserRouter>
    )
}

const TEST = () => (
    <div>
        SHOP
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <ShopRouter/>
    </Provider>  
)
