import {combineReducers} from "@reduxjs/toolkit";
import auth from "../features/auth/redux/authSlice";
import phones from "../features/phones/redux/phonesSlice";

const reducers = combineReducers({
    auth,
    phones
});

export default reducers;