import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {loginRequest, loginWithTokenRequest, logoutRequest} from "../redux/actions";

export default function useAuth() {
    const dispatch = useAppDispatch();

    const auth = useAppSelector(state => state.auth);

    const onLogin = useCallback(() => dispatch(loginRequest()), [dispatch]);

    const onLogout = useCallback(() => dispatch(logoutRequest()), [dispatch]);

    const onLoginWithToken = useCallback((_token?: string | null) => {
        if (_token) {
            dispatch(loginWithTokenRequest({_token}))
        }
    }, [dispatch]);

    return {
        ...auth,
        onLogin,
        onLogout,
        onLoginWithToken,
    };
}
