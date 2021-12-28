import {useCallback} from 'react';
import {AuthParams} from "../ts";
import {loginThunk} from "../redux/thunks";
import {loginWithToken, logOut} from "../redux/authSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";

export default function useAuth() {
    const dispatch = useAppDispatch();

    const auth = useAppSelector(state => state.auth);

    const onLogin = useCallback((params: AuthParams) => dispatch(loginThunk(params)), [dispatch]);

    const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

    const onLoginWithToken = useCallback((_token?: string | null) => {
        if (_token) {
            dispatch(loginWithToken({_token}))
        }
    }, [dispatch]);

    return {
        ...auth,
        onLogin,
        onLogout,
        onLoginWithToken,
    };
}
