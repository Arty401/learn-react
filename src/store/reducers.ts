import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../features/auth/redux/authSlice";
import phonesSlice from "../features/phones/redux/phonesSlice";

const reducers = combineReducers({
    auth: authReducer,
    phones: phonesSlice
});

export default reducers;