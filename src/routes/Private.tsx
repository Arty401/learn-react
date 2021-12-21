import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import {getAuthData} from "../api";
import {Navigate} from "react-router-dom";
import {ROUTES} from "../constants/routes";
import {AuthBasedRouteProps} from "./types";

const PrivateRoute: React.FC<AuthBasedRouteProps> = ({component: Component}) => {
    const auth = useSelector((state: RootState) => state.auth);
    const authData = getAuthData();

    if (auth.user && authData._token) {
        return Component
    }

    return <Navigate replace to={ROUTES.login} />;
};

export default PrivateRoute;