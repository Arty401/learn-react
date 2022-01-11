import {put, takeEvery} from "redux-saga/effects";
import {v4} from "uuid";
import {clearStorageValue, setStorageValue} from "../../../api/localStorage";
import * as types from './types';
import {loginFailure, loginSuccess, loginWithTokenSuccess, logoutSuccess} from "./actions";

function* login() {
    try {
        const _token = v4();
        setStorageValue('_token', _token);
        yield put(loginSuccess());
    } catch (error) {
        yield put(loginFailure({name: "error", message: 'message'}));
    }
}

function* loginWithToken(action: ReturnType<typeof loginWithTokenSuccess>) {
    yield put(loginWithTokenSuccess(action.payload))
}

function* logout() {
    clearStorageValue('_token');
    yield put(logoutSuccess())
}

export default function* authSaga() {
    yield takeEvery(types.LOGIN_REQUEST, login);
    yield takeEvery(types.LOGIN_WITH_TOKEN_REQUEST, loginWithToken);
    yield takeEvery(types.LOGOUT_REQUEST, logout);
}