import {SerializedError} from "@reduxjs/toolkit";
import {Reducer} from 'redux'
import * as types from './types'
import {AuthActions} from "./actions";

export const initialState = {
    isAuthReady: false,
    isLoading: false,
    isLoggedIn: false,
    errors: null as null | SerializedError
};

const authReducer: Reducer<typeof initialState, AuthActions> = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false,
                isAuthReady: true,
                errors: null
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                isAuthReady: true,
                errors: null,
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                isAuthReady: true,
                errors: action.payload
            }
        case types.LOGIN_WITH_TOKEN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false,
                isAuthReady: true,
                errors: null
            };
        case types.LOGIN_WITH_TOKEN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                isAuthReady: true,
                errors: null,
            };
        case types.LOGIN_WITH_TOKEN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                isAuthReady: true,
                errors: action.payload
            };
        case types.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false,
                isAuthReady: true,
                errors: null
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                isAuthReady: true,
                errors: null,
            };
        case types.LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                isAuthReady: true,
                errors: action.payload
            }
        default:
            return {
                ...state
            };
    }
};

export default authReducer;