import React from 'react';
import {InputFieldProps} from "../ts";

const InputField = ({value, label, disabled = false, type = 'text', register, errors}: InputFieldProps) => {
    return (
        <div>
            {label && (
                <label className="form-label">
                    {label}
                </label>
            )}

            <input
                type={type}
                value={value}
                disabled={disabled}
                {...register}
                className={[errors ? 'is-invalid' : '', 'form-control'].join(' ')}
            />
            {errors && <p className="text-danger">{errors?.message}</p>}
        </div>
    );
};

export default InputField;