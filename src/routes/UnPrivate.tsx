import React from 'react';
import {Navigate} from "react-router-dom";
import {ROUTES} from "../constants/routes";
import {AuthBasedRouteProps} from "./types";
import {useAuth} from "../hooks";

const UnPrivateRoute: React.FC<AuthBasedRouteProps> = ({component: Component}) => {
    const {isLoggedIn} = useAuth();
    if (isLoggedIn) {
        return <Navigate replace to={ROUTES.main}/>;
    }

    return Component
};

export default UnPrivateRoute;
