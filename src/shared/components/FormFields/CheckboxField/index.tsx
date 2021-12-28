import React, {FC} from 'react';
import {InputFieldProps} from "../ts";

const CheckboxField: FC<InputFieldProps> = (props) => {
    return (
        <div className={[props.className, "form-check"].join(' ')}>
            <label htmlFor="pr" id={props.id} className="form-check-label">{props.label}</label>
            <input type="checkbox" {...props.register} className="form-check-input" />
        </div>
    );
};

export default CheckboxField;