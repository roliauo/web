import React from "react";
import ReactDOM  from "react-dom/client";
import { Provider } from 'react-redux';
import store from './state/store';
import App from "./views/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>  
)
