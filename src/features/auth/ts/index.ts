import {SerializedError} from "@reduxjs/toolkit";

export type AuthParams = {
    email: string;
    password: string;
}

export type LoginRequestPayloadAction = {
    email: string;
    password: string;
};
export type LoginSuccessPayloadAction = string;
export type LoginFailurePayloadAction = SerializedError;