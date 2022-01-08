import {createSlice, SerializedError} from "@reduxjs/toolkit";
import {loginThunk} from './thunks';
import {clearStorageValue, setStorageValue} from "src/api/localStorage";

export const INITIAL_STATE = {
    isAuthReady: false,
    isLoading: false,
    isLoggedIn: false,
    errors: null as null | SerializedError
};

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        loginWithToken: (state, {payload}: {payload: {_token: string}}) => {
            setStorageValue('_token', payload._token);
            state.isLoggedIn = true;
            state.errors = null;
            state.isAuthReady = true;
        },
        logOut: () => {
            clearStorageValue('_token');
            return {
                isAuthReady: false,
                user: null,
                isLoading: false,
                isLoggedIn: false,
                errors: null
            };
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginThunk.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
        }).addCase(loginThunk.fulfilled, (state) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.errors = null;
            state.isAuthReady = true;
        }).addCase(loginThunk.rejected, (state, {error}) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.errors = error;
            state.isAuthReady = true;
        })
    }
});

export const {
    loginWithToken,
    logOut
} = authSlice.actions;

export default authSlice.reducer;
