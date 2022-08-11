import { configureStore, combineReducers } from "@reduxjs/toolkit";
import setNews from "./ducks/News";

const rootReducers = combineReducers({
    setNews,
})

export default configureStore({
    reducer: rootReducers,
})