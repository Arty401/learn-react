import React from 'react';
import {Outlet} from "react-router-dom";
import DefaultLayout from "./shared/components/DefaultLayout";
import './App.css';

function App() {
    return (
        <DefaultLayout>
            <Outlet />
        </DefaultLayout>
    );
}

export default App;
