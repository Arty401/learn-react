import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {setStorageValue} from "src/api/localStorage";
import {LoginFailurePayloadAction, LoginSuccessPayloadAction} from "../ts";

export const initialState = {
    isAuthReady: false,
    isLoading: false,
    isLoggedIn: false,
    errors: null as null | SerializedError
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
            state.errors = null;
            state.isLoggedIn = false;
            state.isAuthReady = true;
        },
        loginSuccess: (state, action: PayloadAction<LoginSuccessPayloadAction>) => {
            setStorageValue('_token', action.payload);
            state.isLoading = false;
            state.errors = null;
            state.isLoggedIn = true;
            state.isAuthReady = true;
        },
        loginFailure: (state, action: PayloadAction<LoginFailurePayloadAction>) => {
            state.isLoading = false;
            state.errors = action.payload;
            state.isLoggedIn = true;
            state.isAuthReady = true;
        },
        loginWithTokenRequest: (state) => {
            state.isAuthReady = true;
            state.isLoading = true;
            state.isLoggedIn = false;
        },
        loginWithTokenSuccess: (state) => {
            state.isLoggedIn = true;
            state.isLoading = false;
            state.errors = null;
            state.isAuthReady = true;
        },
        loginWithTokenFailure: (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.isAuthReady = false;
        },
        logoutRequest: (state) => {
            state.isAuthReady = false;
            state.isLoading = true;
            state.isLoggedIn = true;
            state.errors = null;
        },
        logoutSuccess: (state) => {
            state.isAuthReady = true;
            state.isLoading = false;
            state.isLoggedIn = false;
            state.errors = null;
        },
        logoutFailure: (state, action: PayloadAction<SerializedError>) => {
            state.isAuthReady = false;
            state.isLoading = false;
            state.isLoggedIn = true;
            state.errors = action.payload;
        },
    },
});

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;
