import {LoginFailurePayloadAction, LoginRequestPayloadAction, LoginSuccessPayloadAction} from "../ts";
import {createAction, SerializedError} from "@reduxjs/toolkit";
import {authSliceActions} from './authSlice'

export const loginRequest = createAction<LoginRequestPayloadAction>(authSliceActions.loginRequest.type);
export const loginSuccess = createAction<LoginSuccessPayloadAction>(authSliceActions.loginSuccess.type);
export const loginFailure = createAction<LoginFailurePayloadAction>(authSliceActions.loginFailure.type);

export const loginWithTokenRequest = createAction(authSliceActions.loginWithTokenRequest.type);
export const loginWithTokenSuccess = createAction(authSliceActions.loginWithTokenSuccess.type);
export const loginWithTokenFailure = createAction<SerializedError>(authSliceActions.loginWithTokenFailure.type);

export const logoutRequest = createAction(authSliceActions.logoutRequest.type);
export const logoutSuccess = createAction(authSliceActions.logoutSuccess.type);
export const logoutFailure = createAction<SerializedError>(authSliceActions.logoutFailure.type);

export const authActions = {
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    loginWithTokenRequest,
    loginWithTokenSuccess,
    loginWithTokenFailure,
};