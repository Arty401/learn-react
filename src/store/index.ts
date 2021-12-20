import {createStore} from "@reduxjs/toolkit";
import reducers from "./reducers";
import {loginSuccess} from "../features/auth/authSlice";
import {IUser} from "../features/auth/types";

const store = createStore(reducers);

const authToken = localStorage.getItem('_token');
const user = localStorage.getItem('user');

if (user && authToken) {
    store.dispatch(loginSuccess({
        user: JSON.parse(user) as IUser
    }));
}

export default store;