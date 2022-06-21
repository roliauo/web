import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import rootReducers from "./ducks/rootReducers";
import setCart from './ducks/Cart';

const rootReducers = combineReducers({
    setCart,
})

export default configureStore({
    reducer: rootReducers,
})