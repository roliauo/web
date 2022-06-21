import React from "react";
import ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import store from './store';
//import App from ''
import Calculator from './components/Calculator';
import Input from './components/common/InputBox';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <Calculator />
    </Provider>
)