import { configureStore, combineReducers } from "@reduxjs/toolkit";
import setApp from './ducks/App';

const rootReducer = combineReducers({
    setApp,
});

export default configureStore({
    reducer: rootReducer
})