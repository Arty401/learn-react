import * as types from "./types";
import {IPhoneNumberFormValues, PhoneNumberRecord} from "../ts";
import {SerializedError} from "@reduxjs/toolkit";
import {NavigateFunction} from "react-router-dom";

export const getPhonesRequest = () => ({
    type: types.GET_PHONES_REQUEST
});
export const getPhonesSuccess = (payload: PhoneNumberRecord[]) => ({
    type: types.GET_PHONES_SUCCESS,
    payload
});
export const getPhonesFailure = (payload: SerializedError) => ({
    type: types.GET_PHONES_FAILURE,
    payload
});

export const getPhoneRequest = (payload: string) => ({
    type: types.GET_PHONE_REQUEST,
    payload
});
export const getPhoneSuccess = (payload: PhoneNumberRecord) => ({
    type: types.GET_PHONE_SUCCESS,
    payload
});
export const getPhoneFailure = (payload: SerializedError) => ({
    type: types.GET_PHONE_FAILURE,
    payload
});

export const createPhoneRequest = (payload: IPhoneNumberFormValues, navigateFunction: NavigateFunction | null = null) => ({
    type: types.CREATE_PHONE_REQUEST,
    payload,
    navigateFunction
});
export const createPhoneSuccess = (payload: PhoneNumberRecord) => ({
    type: types.CREATE_PHONE_SUCCESS,
    payload
});
export const createPhoneFailure = (payload: SerializedError) => ({
    type: types.CREATE_PHONE_FAILURE,
    payload
});

export const deletePhoneRequest = (payload: PhoneNumberRecord["id"], navigateFunction: NavigateFunction | null = null) => ({
    type: types.DELETE_PHONE_REQUEST,
    payload,
    navigateFunction
});
export const deletePhoneSuccess = (payload: PhoneNumberRecord["id"]) => ({
    type: types.DELETE_PHONE_SUCCESS,
    payload
});
export const deletePhoneFailure = (payload: SerializedError) => ({
    type: types.DELETE_PHONE_FAILURE,
    payload
});

export const updatePhoneRequest = (payload: IPhoneNumberFormValues, navigateFunction: NavigateFunction | null = null) => ({
    type: types.UPDATE_PHONE_REQUEST,
    payload,
    navigateFunction
});
export const updatePhoneSuccess = (payload: PhoneNumberRecord) => ({
    type: types.UPDATE_PHONE_SUCCESS,
    payload
});
export const updatePhoneFailure = (payload: SerializedError) => ({
    type: types.UPDATE_PHONE_FAILURE,
    payload
});

export type PhonesActions = ReturnType<typeof getPhonesRequest
    | typeof getPhonesSuccess
    | typeof getPhonesFailure
    | typeof getPhoneRequest
    | typeof getPhoneSuccess
    | typeof getPhoneFailure
    | typeof createPhoneRequest
    | typeof createPhoneSuccess
    | typeof createPhoneFailure
    | typeof deletePhoneRequest
    | typeof deletePhoneSuccess
    | typeof deletePhoneFailure
    | typeof updatePhoneRequest
    | typeof updatePhoneSuccess
    | typeof updatePhoneFailure
    >