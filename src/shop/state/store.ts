import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import rootReducers from "./ducks/rootReducers";
import setCart from './ducks/Cart';
import setSidebar from "./ducks/Sidebar";
import setProduct from "./ducks/Product";

const rootReducers = combineReducers({
    setCart,
    setSidebar,
    setProduct,
})

export default configureStore({
    reducer: rootReducers,
})