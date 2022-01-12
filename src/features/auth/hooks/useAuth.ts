import {useCallback} from 'react';
import {useAppSelector} from "../../../hooks";
import useAuthActions from "./useAuthActions";
import {AuthParams} from "../ts";

export default function useAuth() {
    const actions = useAuthActions();

    const auth = useAppSelector(state => state.auth);

    const onLogin = useCallback((credentials: AuthParams) => actions.loginRequest(credentials), [actions]);

    const onLoginWithToken = useCallback(() => actions.loginWithTokenRequest(), []);

    const onLogout = useCallback(() => actions.logoutRequest(), [actions]);

    return {
        ...auth,
        onLogin,
        onLoginWithToken,
        onLogout,
        actions,
    };
}
