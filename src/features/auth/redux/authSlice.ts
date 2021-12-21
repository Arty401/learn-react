import {createSlice} from "@reduxjs/toolkit";
import {AuthInitialState, AuthLoginResponse, IUser} from "./types";

export const INITIAL_STATE: AuthInitialState = {
    isLoading: false,
    user: null,
    errors: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        loginRequest: () => {
            return {
                user: null,
                isLoading: true,
                errors: null
            } as AuthInitialState
        },
        loginSuccess: (state, action) => {
            const data = action.payload as AuthLoginResponse;

            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('_token', data._token);

            return {
                user: data.user as IUser,
                isLoading: false,
                errors: null
            } as AuthInitialState
        },
        loginFailed: (state, action) => ({
            user: null,
            isLoading: false,
            errors: action.payload
        } as AuthInitialState),
        logOut: () => {
            localStorage.removeItem('user');
            localStorage.removeItem('_token');

            return {
                user: null,
                isLoading: false,
                errors: null
            } as AuthInitialState;
        },
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailed,
    logOut
} = authSlice.actions;

export default authSlice.reducer;