import {SerializedError} from "@reduxjs/toolkit";
import {SubmitHandler} from "react-hook-form";

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
    isLoading: boolean,
    errors: SerializedError | null | string,
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