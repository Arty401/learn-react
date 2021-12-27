import React from 'react';
import {Navigate} from "react-router-dom";
import {ROUTES} from "../constants/routes";
import {AuthBasedRouteProps} from "./types";
import {useAuth} from "../hooks";

const PrivateRoute: React.FC<AuthBasedRouteProps> = ({component: Component}) => {
    const {isLoggedIn} = useAuth();

    if (isLoggedIn) {
        return Component
    }

    return <Navigate replace to={ROUTES.login} />;
};

export default PrivateRoute;
