import {combineReducers} from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";

export type RootState = ReturnType<typeof reducers>

const reducers = combineReducers({
    auth
});

export default reducers;