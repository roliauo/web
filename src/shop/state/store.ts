import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import rootReducers from "./ducks/rootReducers";
import setCart from './ducks/Cart';
import setSidebar from "./ducks/Sidebar";

const rootReducers = combineReducers({
    setCart,
    setSidebar,
})

export default configureStore({
    reducer: rootReducers,
})