import React from 'react';
import {v4} from 'uuid';
import {AuthFormDataType} from "../../ts";

import {useNavigate} from 'react-router-dom'
import InputField from "../../../../shared/components/FormFields/InputField";
import {useDispatch, useSelector} from "react-redux";
import {SubmitHandler, useForm} from "react-hook-form";
import {RootState} from "../../../../store/reducers";
import {loginFailed, loginRequest, loginSuccess} from "../../redux/authSlice";
import {IUser} from "../../redux/types";
import {ROUTES} from "../../../../constants/routes";

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<AuthFormDataType>();

    const navigate = useNavigate();

    const {
        isLoading, errors: authErrors
    } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    const onSubmitHandler: SubmitHandler<AuthFormDataType> = async (data: AuthFormDataType) => {
        await dispatch(loginRequest())

        if (data.email === 'test@gmail.com' && data.password === 'Password1') {
            dispatch(loginSuccess({
                user: {
                    id: 1,
                    email: 'test@gmail.com',
                    name: 'Test'
                } as IUser,
                _token: v4()
            }))

            navigate(ROUTES.phones);
        } else {
            await dispatch(loginFailed({message: 'Provided data is invalid'}))
        }
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

            <button className="btn btn-primary mt-2">{isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"> </span>
                </div>
            ) : 'Login'}</button>
        </form>
    );
};

export default LoginForm;