import * as types from './types';
import {SerializedError} from "@reduxjs/toolkit";

export const loginRequest = () => ({
    type: types.LOGIN_REQUEST
});

export const loginSuccess = () => ({
    type: types.LOGIN_SUCCESS
})

export const loginFailure = (payload: SerializedError) => ({
    type: types.LOGIN_FAILURE,
    payload,
});

export const loginWithTokenRequest = (payload: { _token: string }) => ({
    type: types.LOGIN_WITH_TOKEN_REQUEST,
    payload
});

export const loginWithTokenSuccess = (payload: string) => ({
    type: types.LOGIN_WITH_TOKEN_SUCCESS,
    payload,
})

export const loginWithTokenFailure = (payload: SerializedError) => ({
    type: types.LOGIN_WITH_TOKEN_FAILURE,
    payload,
});

export const logoutRequest = () => ({
    type: types.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
})

export const logoutFailure = (payload: SerializedError) => ({
    type: types.LOGOUT_FAILURE,
    payload,
});

export type AuthActions = ReturnType<typeof loginRequest |
    typeof loginSuccess |
    typeof loginFailure |
    typeof loginWithTokenRequest |
    typeof loginWithTokenSuccess |
    typeof loginWithTokenFailure |
    typeof logoutRequest |
    typeof logoutSuccess |
    typeof logoutFailure>;