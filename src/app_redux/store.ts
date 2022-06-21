//import { createStore, applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';

//const preloadedState = window.__PRELOADED_STATE__;

export default configureStore({
    reducer: rootReducer,
    //preloadedState,
})
