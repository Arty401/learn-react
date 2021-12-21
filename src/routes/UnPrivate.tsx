import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import {getAuthData} from "../api";
import {Navigate} from "react-router-dom";
import {ROUTES} from "../constants/routes";
import {AuthBasedRouteProps} from "./types";

const UnPrivateRoute: React.FC<AuthBasedRouteProps> = ({component: Component}) => {
    const auth = useSelector((state: RootState) => state.auth);
    const authData = getAuthData();

    if (auth.user || authData._token) {
        return <Navigate to={ROUTES.main} />;
    }

    return Component
};

export default UnPrivateRoute;