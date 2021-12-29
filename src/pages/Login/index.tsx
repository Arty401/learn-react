import React from 'react';
import LoginForm from "../../features/auth/components/LoginForm";

const Login = () => {
    return (
        <div className="w-50 mx-auto border rounded p-4 mt-5">
            <div className="text-center">
                <h1>Login</h1>
                <hr/>
            </div>
            <LoginForm />
        </div>
    );
};

export default Login;
