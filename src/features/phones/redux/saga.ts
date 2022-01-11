import {createPhone as createPhoneAPI, fetchPhone, fetchPhones} from "../api";
import {call, put, select, takeLatest} from "redux-saga/effects"
import {
    createPhoneFailure,
    createPhoneRequest,
    createPhoneSuccess,
    deletePhoneRequest,
    deletePhoneSuccess,
    getPhoneRequest,
    getPhonesFailure,
    getPhonesSuccess,
    getPhoneSuccess,
    updatePhoneRequest,
    updatePhoneSuccess
} from "./actions";
import * as types from './types';
import {PhoneNumberRecord} from "../ts";
import {ROUTES} from "../../../constants/routes";
import {RootState} from "../../../store";

function getPhonesState() {
    return select((state: RootState) => state.phones.phones);
}

function* getPhones() {
    try {
        let phones: PhoneNumberRecord[] | null = yield getPhonesState();

        if (!phones) {
            phones = yield call(fetchPhones);
        }

        yield phones && put(getPhonesSuccess(phones));
    } catch (error) {
        yield put(getPhonesFailure({message: "Error"}))
    }
}

function* getPhone(action: ReturnType<typeof getPhoneRequest>) {
    try {
        const phones: PhoneNumberRecord[] | null = yield getPhonesState();
        let phone: PhoneNumberRecord | undefined;

        if (!phones) {
            phone = yield call(fetchPhone, action.payload);
        } else {
            phone = phones.find(phone => phone.id === action.payload);
        }

        if (phone) {
            yield put(getPhoneSuccess(phone));
        }
    } catch (error) {
        console.log(error);
    }
}

function* createPhone(action: ReturnType<typeof createPhoneRequest>) {
    try {
        const phone: PhoneNumberRecord = yield call(createPhoneAPI, action.payload);
        yield put(createPhoneSuccess(phone));
        yield call(() => action.navigateFunction && action.navigateFunction(ROUTES.phones.edit(phone.id)));
    } catch (error) {
        yield put(createPhoneFailure({message: "Error"}));
        console.log(error);
    }
}

function* deletePhone(action: ReturnType<typeof deletePhoneRequest>) {
    try {
        yield put(deletePhoneSuccess(action.payload));
        yield call(() => action.navigateFunction && action.navigateFunction(ROUTES.main));
    } catch (e) {
        console.log(e);
    }
}

function* updatePhone(action: ReturnType<typeof updatePhoneRequest>) {
    try {
        const phones: PhoneNumberRecord[] | null = yield getPhonesState();

        if (!phones) {
            throw Error();
        }

        const phone: PhoneNumberRecord | undefined = yield phones.find(phone => phone.id === action.payload.id);

        if (!phone) {
            throw Error();
        }

        yield put(updatePhoneSuccess(action.payload as PhoneNumberRecord));
        yield call(() => action.navigateFunction && action.navigateFunction(ROUTES.phones.show(action.payload.id)));
    } catch (e) {
        console.log(e);
    }
}

export default function* phonesSaga() {
    yield takeLatest(types.GET_PHONES_REQUEST, getPhones);
    yield takeLatest(types.GET_PHONE_REQUEST, getPhone);
    yield takeLatest(types.CREATE_PHONE_REQUEST, createPhone);
    yield takeLatest(types.DELETE_PHONE_REQUEST, deletePhone);
    yield takeLatest(types.UPDATE_PHONE_REQUEST, updatePhone);
}