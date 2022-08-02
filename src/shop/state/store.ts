import { configureStore, combineReducers } from "@reduxjs/toolkit";
import setCart from './ducks/Cart';
import setSidebar from "./ducks/Sidebar";
import setProduct from "./ducks/Product";
import setMember from "./ducks/Member";

const rootReducers = combineReducers({
    setCart,
    setSidebar,
    setProduct,
    setMember
})

export default configureStore({
    reducer: rootReducers,
})