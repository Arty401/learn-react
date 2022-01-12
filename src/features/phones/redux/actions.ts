import {createAction, SerializedError} from "@reduxjs/toolkit";
import {
    CreatePhoneRequestPayloadAction,
    DeletePhoneRequestPayloadAction,
    PhoneNumberRecord,
    UpdatePhoneRequestPayloadAction
} from "../ts";
import {phonesSliceActions} from "./phonesSlice";

export const fetchPhonesRequest = createAction(phonesSliceActions.fetchPhonesRequest.type);
export const fetchPhonesSuccess = createAction<PhoneNumberRecord[]>(phonesSliceActions.fetchPhonesSuccess.type);
export const fetchPhonesFailure = createAction<SerializedError>(phonesSliceActions.fetchPhonesFailure.type);

export const fetchPhoneRequest = createAction<PhoneNumberRecord["id"]>(phonesSliceActions.fetchPhoneRequest.type);
export const fetchPhoneSuccess = createAction<PhoneNumberRecord["id"]>(phonesSliceActions.fetchPhoneSuccess.type);
export const fetchPhoneFailure = createAction<SerializedError>(phonesSliceActions.fetchPhoneFailure.type);

export const createPhoneRequest = createAction<CreatePhoneRequestPayloadAction>(phonesSliceActions.createPhoneRequest.type);
export const createPhoneSuccess = createAction<PhoneNumberRecord>(phonesSliceActions.createPhoneSuccess.type);
export const createPhoneFailure = createAction<SerializedError>(phonesSliceActions.createPhoneFailure.type);

export const updatePhoneRequest = createAction<UpdatePhoneRequestPayloadAction>(phonesSliceActions.updatePhoneRequest.type);
export const updatePhoneSuccess = createAction<PhoneNumberRecord>(phonesSliceActions.updatePhoneSuccess.type);
export const updatePhoneFailure = createAction<SerializedError>(phonesSliceActions.updatePhoneFailure.type);

export const deletePhoneRequest = createAction<DeletePhoneRequestPayloadAction>(phonesSliceActions.deletePhoneRequest.type);
export const deletePhoneSuccess = createAction<PhoneNumberRecord["id"]>(phonesSliceActions.deletePhoneSuccess.type);
export const deletePhoneFailure = createAction<SerializedError>(phonesSliceActions.deletePhoneFailure.type);

export const phonesActions = {
    fetchPhonesRequest,
    fetchPhonesSuccess,
    fetchPhonesFailure,
    fetchPhoneRequest,
    fetchPhoneSuccess,
    fetchPhoneFailure,
    createPhoneRequest,
    createPhoneSuccess,
    createPhoneFailure,
    updatePhoneRequest,
    updatePhoneSuccess,
    updatePhoneFailure,
    deletePhoneRequest,
    deletePhoneSuccess,
    deletePhoneFailure,
};