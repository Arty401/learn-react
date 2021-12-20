import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginRequest, loginSuccess} from "../../features/auth/authSlice";
import {RootState} from "../../store/reducers";
import {AuthInitialState, IUser} from "../../features/auth/types";

const Login = () => {
    const auth: AuthInitialState = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    console.log(auth.user, auth.isLoading, auth.errors);

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
            Login
            <button onClick={() => login()}>Auth</button>
        </div>
    );
};

export default Login;