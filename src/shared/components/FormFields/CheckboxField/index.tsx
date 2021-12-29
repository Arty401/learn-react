import React, {FC} from 'react';
import {InputFieldProps} from "../ts";

const CheckboxField: FC<InputFieldProps> = (props) => {
    return (
        <div className={[props.className, "form-check form-switch"].join(' ')}>
            <label htmlFor={props.id} className="form-check-label">{props.label}</label>
            <input type="checkbox" id={props.id} {...props.register} className="form-check-input" />
        </div>
    );
};

export default CheckboxField;