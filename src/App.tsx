import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import DefaultLayout from "./shared/components/DefaultLayout";
import './App.css';
import {useAuth} from "./hooks";
import {getStorageValue} from "./api/localStorage";

function App() {
    const {onLoginWithToken} = useAuth();

    useEffect(() => {
        onLoginWithToken(getStorageValue('_token'))
    }, [onLoginWithToken]);

    return (
        <DefaultLayout>
            <Outlet />
        </DefaultLayout>
    );
}

export default App;
