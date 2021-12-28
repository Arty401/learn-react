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
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="row">
                <div className="col-6">
                    <InputField
                        className="col"
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
                        className="col"
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

                    <InputField
                        type="tel"
                        required={true}
                        label="Phone number"
                        errors={errors.phone}
                        register={register('phone', {
                            required: {
                                value: true,
                                message: "Phone number field is required"
                            },
                            pattern: {
                                value: /\+[0-9]{1,3} \([0-9]{3}\) [0-9]{3}-[0-9]{4}/gm,
                                message: "Phone number is invalid"
                            },
                        })}
                    />

                    <CheckboxField
                        className="mt-2"
                        type="checkbox"
                        label="Is Active"
                        errors={errors.isActive}
                        register={register('isActive')}
                    />
                </div>
                <div className="col-6">
                    <InputField
                        type="email"
                        label="E-mail"
                        errors={errors.email}
                        register={register('email')}
                    />

                    <InputField
                        label="Address"
                        errors={errors.address}
                        register={register('address')}
                    />

                    <InputField
                        label="Company"
                        errors={errors.company}
                        register={register('company')}
                    />
                </div>
            </div>

            <div className="row justify-content-end">
                <button className="col-2 btn btn-success mt-2">{submitButtonText}</button>
            </div>
        </form>
    );
};

export default PhonesCreateForm;