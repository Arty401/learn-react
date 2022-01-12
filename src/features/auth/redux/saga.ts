import {put, takeLatest} from "redux-saga/effects";
import {v4} from "uuid";
import {clearStorageValue, getStorageValue, setStorageValue} from "../../../api/localStorage";
import {authSliceActions} from "./authSlice";
import * as actions from "./actions";


function* login(action: ReturnType<typeof actions.loginRequest>) {
    try {
        const {email, password} = action.payload;

        if (email === 'test@gmail.com' && password === 'Password1') {
            const _token: string = v4();
            setStorageValue('_token', _token);

            yield put(authSliceActions.loginSuccess(_token))
        }
    } catch (error) {
        yield put(authSliceActions.loginFailure({message: "Errors"}));
    }
}

function* loginWithToken() {
    try {
        const _token = getStorageValue('_token');

        if (!_token) {
            throw Error();
        }

        yield put(authSliceActions.loginWithTokenSuccess());
    } catch (error) {
        yield put(authSliceActions.loginWithTokenFailure());
    }
}

function* logout() {
    try {
        clearStorageValue('_token');
        yield put(authSliceActions.logoutSuccess());
    } catch (error) {
        yield put(authSliceActions.logoutFailure({message: "Error"}))
    }
}

export default function* authSaga() {
    yield takeLatest(actions.loginRequest.type, login);
    yield takeLatest(actions.loginWithTokenRequest.type, loginWithToken);
    yield takeLatest(actions.logoutRequest.type, logout);
}