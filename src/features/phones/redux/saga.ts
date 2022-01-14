import { call, put, takeLatest } from 'redux-saga/effects';
import { v4 } from 'uuid';
import { ROUTES } from '../../../constants/routes';
import { fetchPhonesApi } from '../api';
import { PhoneNumberRecord } from '../ts';
import * as actions from './actions';
import { phonesSliceActions } from './phonesSlice';

function * fetchPhones () {
  try {
    const phones: PhoneNumberRecord[] = yield call(fetchPhonesApi);
    yield put(phonesSliceActions.fetchPhonesSuccess(phones));
  } catch (error) {
    yield put(phonesSliceActions.fetchPhonesFailure({ 'message': 'Error' }));
  }
}

function * fetchPhone (action: ReturnType<typeof actions.fetchPhoneRequest>) {
  try {
    yield put(phonesSliceActions.fetchPhoneSuccess(action.payload));
  } catch (error) {
    yield put(
      phonesSliceActions.fetchPhoneFailure({ message: '404 Phone not found' }));
  }
}

function * createPhone (action: ReturnType<typeof actions.createPhoneRequest>) {
  try {
    const phone: PhoneNumberRecord = yield {
      ...action.payload.phone,
      id: v4(),
      registered: new Date().toISOString(),
    } as PhoneNumberRecord;

    yield put(phonesSliceActions.createPhoneSuccess(phone));
    yield call(() => action.payload.navigate(ROUTES.phones.show(phone.id)));
  } catch (error) {
    yield put(
      phonesSliceActions.createPhoneFailure(
        { message: 'Error when creating a phone number' }
      )
    );
  }
}

function * updatePhone (action: ReturnType<typeof actions.updatePhoneRequest>) {
  try {
    yield put(phonesSliceActions.updatePhoneSuccess(
      action.payload.phone as PhoneNumberRecord));
    yield call(() => action.payload.navigate(
      ROUTES.phones.show(action.payload.phone.id)));
  } catch (error) {
    yield put(phonesSliceActions.updatePhoneFailure({ message: 'Error' }));
  }
}

function * deletePhone (action: ReturnType<typeof actions.deletePhoneRequest>) {
  try {
    yield put(phonesSliceActions.deletePhoneSuccess(action.payload.id));
    yield call(() => action.payload.navigate(ROUTES.main));
  } catch (error) {
    yield put(phonesSliceActions.deletePhoneFailure({ message: 'Error' }));
  }
}

export default function * phonesSaga () {
  yield takeLatest(actions.fetchPhonesRequest, fetchPhones);
  yield takeLatest(actions.fetchPhoneRequest, fetchPhone);
  yield takeLatest(actions.createPhoneRequest, createPhone);
  yield takeLatest(actions.updatePhoneRequest, updatePhone);
  yield takeLatest(actions.deletePhoneRequest, deletePhone);
}