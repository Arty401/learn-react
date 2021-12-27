import {createSlice, SerializedError} from "@reduxjs/toolkit";
//import { IUser} from "./types";
import {loginThunk} from './thunks';
import {clearStorageValue, setStorageValue} from "src/api/localStorage";

export const INITIAL_STATE = {
    isLoading: false,
    isLoggedIn: false,
   // user: null as IUser | null,
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
        },
        logOut: () => {
            //localStorage.removeItem('user');
            clearStorageValue('_token');
            return {
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
            //state.user = null;
            state.isLoading = true;
            state.errors = null;
        }).addCase(loginThunk.fulfilled, (state) => {
            //state.user = payload.user
            state.isLoading = false;
            state.isLoggedIn = true;
            state.errors = null;
        }).addCase(loginThunk.rejected, (state, {error}) => {
            //state.user = null
            state.isLoading = false;
            state.isLoggedIn = false;
            state.errors = error;
        })
    }
});

export const {
    loginWithToken,
    logOut
} = authSlice.actions;

export default authSlice.reducer;
