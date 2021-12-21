import {combineReducers} from "@reduxjs/toolkit";
import auth from "../features/auth/redux/authSlice";

export type RootState = ReturnType<typeof reducers>

const reducers = combineReducers({
    auth
});

export default reducers;