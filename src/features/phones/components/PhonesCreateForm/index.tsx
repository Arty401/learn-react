import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IPhoneNumberFormValues, PhonesFormComponentProps} from "../../ts";
import InputField from "../../../../shared/components/FormFields/InputField";
import CheckboxField from "../../../../shared/components/FormFields/CheckboxField";

const PhonesCreateForm: FC<PhonesFormComponentProps> = ({defaultValues, submitHandler, submitButtonText= 'Submit'}) => {
    const {register, handleSubmit, formState: {errors}} = useForm<IPhoneNumberFormValues>({
        mode: 'onChange',
        defaultValues
    })

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="align-items-center">
            <div className="row">
                <InputField
                    className="col-6"
                    required={true}
                    register={register('name.first', {
                        required: {
                            value: true,
                            message: 'First name field is required'
                        }
                    })}
                    label="First Name"
                    errors={errors.name?.first}
                />

                <InputField
                    className="col-6"
                    required={true}
                    register={register('name.last', {
                        required: {
                            value: true,
                            message: 'Last name fields is required'
                        }
                    })}
                    label="Last Name"
                    errors={errors.name?.last}
                />
            </div>

            <div className="row">
                <InputField
                    className="col-12"
                    type="tel"
                    placeholder="+0 (123) 456-7890"
                    required={true}
                    label="Phone number"
                    errors={errors.phone}
                    register={register('phone', {
                        required: {
                            value: true,
                            message: "Phone number field is required"
                        },
                        pattern: {
                            value: /^\+[0-9]{1,3} \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/,
                            message: "Phone number is invalid"
                        },
                    })}
                />
            </div>

            <div className="row">
                <InputField
                    className="col-6"
                    type="email"
                    placeholder="some@email.com"
                    label="E-mail"
                    errors={errors.email}
                    register={register('email', {
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail is invalid'
                        },
                    })}
                />

                <InputField
                    className="col-6"
                    label="Address"
                    errors={errors.address}
                    register={register('address')}
                />
            </div>

            <div className="row">
                <InputField
                    className="col-6"
                    type="number"
                    min={1}
                    max={120}
                    label="Age"
                    placeholder="1"
                    errors={errors.age}
                    register={register('age', {
                        max: {
                            value: 120,
                            message: 'Age value is invalid'
                        },
                        min: {
                            value: 1,
                            message: 'Age value is invalid'
                        }
                    })}
                />

                <InputField
                    className="col-6"
                    label="Company"
                    errors={errors.company}
                    register={register('company')}
                />
            </div>

            <div className="row">

                <CheckboxField
                    id="isActive"
                    className="col-12 mt-2 ms-2"
                    type="checkbox"
                    label="Is Active"
                    errors={errors.isActive}
                    register={register('isActive')}
                />
            </div>

            <div className="row justify-content-end">
                <button className="col-2 btn btn-success mt-2">{submitButtonText}</button>
            </div>
        </form>
    );
};

export default PhonesCreateForm;