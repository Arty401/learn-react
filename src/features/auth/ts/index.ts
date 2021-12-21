import React from "react";

export type AuthFormDataType = {
    email: string,
    password: string
}

export type AuthFormDataState = [formData: AuthFormDataType, setFormData: React.Dispatch<React.SetStateAction<AuthFormDataType>>];