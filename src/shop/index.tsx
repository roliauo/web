import React from "react";
import ReactDOM  from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from './state/store';
import View from './views';


const Shop = () => {
    return (
        <Provider store={store}>
            <View/>
        </Provider>
    )
}

const ShopRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={} exact/> */}
                <Route path='/shop' element={<Shop/>} />

            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ShopRoutes/>
)
