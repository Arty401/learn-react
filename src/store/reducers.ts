import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../features/auth/redux/reducer";
import phonesReducer from "../features/phones/redux/reducer";

const reducers = combineReducers({
    auth: authReducer,
    phones: phonesReducer
});

export default reducers;