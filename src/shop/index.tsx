import React from "react";
import ReactDOM  from "react-dom";
import { Provider } from 'react-redux';
import store from './state/store';
import View from './views';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <View/>
    </Provider>
)
