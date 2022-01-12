import React from 'react';
import {AuthParams} from "../../ts";
import InputField from "src/shared/components/FormFields/InputField";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAuth} from "../../../../hooks";

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<AuthParams>();
    const {isLoading, errors: authErrors, onLogin} = useAuth();

    const onSubmitHandler: SubmitHandler<AuthParams> = (data: AuthParams) => {
        onLogin(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            {authErrors && <p className="text-danger">{authErrors.message}</p>}
            <InputField
                name="email"
                register={register('email', {
                    required: {
                        value: true,
                        message: "Email field is required"
                    },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email address not valid'
                    }

                })}
                label="Email"
                errors={errors.email}
            />

            <InputField
                name="password"
                type="password"
                register={register('password', {
                    required: {
                        value: true,
                        message: "Password field is required"
                    },
                    minLength: {
                        value: 8,
                        message: "Password field has at least 8 characters"
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                        message: "Password is incorrect"
                    }
                })}
                label="Password"
                errors={errors.password}
            />

            <div className="row justify-content-end">
                <button className="col-3 btn btn-primary mt-2 me-2">{
                    isLoading
                        ? (
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden"> </span>
                            </div>
                        )
                        : 'Login'
                }</button>
            </div>
        </form>
    );
};

export default LoginForm;
