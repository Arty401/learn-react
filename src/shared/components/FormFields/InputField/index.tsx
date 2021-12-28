import React from 'react';
import {InputFieldProps} from "../ts";

const InputField = ({label, disabled = false, type = 'text', register, errors, className, required}: InputFieldProps) => {
    return (
        <div className={className}>
            {label && (
                <label className="form-label">
                    {label}
                </label>
            )}

            <input
                type={type}
                required={required}
                disabled={disabled}
                {...register}
                className={['form-control', errors ? 'is-invalid' : ''].join(' ')}
            />
            {errors && <p className="text-danger">{errors?.message}</p>}
        </div>
    );
};

export default InputField;