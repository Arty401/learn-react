import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "src/store/reducers";
import {AuthParams} from "../ts";
import {loginThunk} from "../redux/thunks";
import {logOut, loginWithToken} from "../redux/authSlice";

export default function useAuth() {
    const dispatch = useDispatch();

    const auth = useSelector((state: RootState) => state.auth);

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
