import axios from 'axios';
import store from "../store";
import {loginSuccess} from "../features/auth/redux/authSlice";
import {AuthLoginResponse, IUser} from "../features/auth/redux/types";

export const api = axios.create();

const authToken = localStorage.getItem('_token');
const user = localStorage.getItem('user');

if (authToken) api.defaults.headers.common.Authorization = `Bearer ${authToken}`;

if (authToken && user) {
    store.dispatch(loginSuccess({
        user: JSON.parse(user) as IUser,
        _token: authToken
    } as AuthLoginResponse));
}

export const getAuthData = () => {
    return {
        user: JSON.parse(localStorage.getItem('user') || '{}'),
        _token: localStorage.getItem('_token')
    }
}