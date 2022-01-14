import {all, spawn} from "redux-saga/effects";
import authSaga from "../features/auth/redux/saga";
import phonesSaga from "../features/phones/redux/saga";

function* sagas() {
    yield all([spawn(authSaga)]);
    yield all([spawn(phonesSaga)]);
}

export default sagas;