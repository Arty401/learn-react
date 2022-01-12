import {SerializedError} from "@reduxjs/toolkit";
import {SubmitHandler} from "react-hook-form";
import {NavigateFunction} from "react-router-dom";

export interface PhoneNumberRecord {
    id: string,
    isActive: boolean,
    age: number | null,
    name: {
        first: string,
        last: string
    },
    company: string | null,
    email: string | null,
    phone: string,
    address: string | null,
    registered: string,
}

export interface PhonesInitialState {
    phones: PhoneNumberRecord[] | null,
    phone: PhoneNumberRecord | null,
    lastCreatedId: PhoneNumberRecord["id"] | null,
    isLoading: boolean,
    errors: SerializedError | null,
}

export interface IPhoneNumberFormValues {
    id: string | undefined;
    isActive: boolean;
    age: number | null;
    name: {
        first: string;
        last: string;
    };
    company: string | null;
    email: string | null;
    phone: string;
    address: string | null;
    registered: string | undefined;
}

export type PhonesFormComponentProps = {
    defaultValues?: IPhoneNumberFormValues;
    submitHandler: SubmitHandler<IPhoneNumberFormValues>;
    submitButtonText?: string;
};

export type NavigatePayloadAction = {
    navigate: NavigateFunction;
}

export type CreatePhoneRequestPayloadAction = NavigatePayloadAction & {
    phone: IPhoneNumberFormValues;
}

export type DeletePhoneRequestPayloadAction = NavigatePayloadAction & {
    id: PhoneNumberRecord["id"];
}

export type UpdatePhoneRequestPayloadAction = NavigatePayloadAction & {
    phone: IPhoneNumberFormValues;
}