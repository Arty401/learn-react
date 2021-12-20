import {createSlice} from "@reduxjs/toolkit";
import {AuthInitialState, IUser} from "./types";

export const INITIAL_STATE: AuthInitialState = {
    isLoading: false,
    user: null,
    errors: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        loginRequest: () => ({
            user: null,
            isLoading: true,
            errors: null
        } as AuthInitialState),
        loginSuccess: (state, action) => {
            const user = action.payload as IUser;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('_token', user._token);

            return {
                user,
                isLoading: false,
                errors: null
            } as AuthInitialState
        },
        loginFailed: (state, action) => ({
            user: null,
            isLoading: false,
            errors: action.payload
        } as AuthInitialState)
    }
});

export const {
    loginRequest,
    loginSuccess,
    loginFailed
} = authSlice.actions;

export default authSlice.reducer;