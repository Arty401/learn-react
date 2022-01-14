import {all, fork} from "redux-saga/effects";
import authSaga from "../features/auth/redux/saga";
import phonesSaga from "../features/phones/redux/saga";

function* sagas() {
    yield all([fork(authSaga)]);
    yield all([fork(phonesSaga)]);
}

export default sagas;