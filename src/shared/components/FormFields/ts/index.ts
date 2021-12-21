import React from "react";
import {FieldError, UseFormRegisterReturn} from "react-hook-form";

export interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
    register: UseFormRegisterReturn,
    errors?: FieldError
}