import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginRequest, loginSuccess} from "../../features/auth/redux/authSlice";
import {RootState} from "../../store/reducers";
import {AuthInitialState, IUser} from "../../features/auth/redux/types";
import LoginForm from "../../features/auth/components/LoginForm";

const Login = () => {
    const auth: AuthInitialState = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    async function login() {
        await dispatch(loginRequest());
        await dispatch(loginSuccess({
            name: "Arty4",
            _token: 'asdasd',
            id: 1,
            email: 'arty28071@gmail.com',
        } as IUser));
    }

    return (
        <div>
            <div className="text-center">
                <h1>Login</h1>
            </div>
            <LoginForm />
        </div>
    );
};

export default Login;