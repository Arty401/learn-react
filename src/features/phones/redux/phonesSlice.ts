import {
  createSlice,
  PayloadAction,
  SerializedError,
  SliceCaseReducers
} from '@reduxjs/toolkit';
import { PhoneNumberRecord, PhonesInitialState } from '../ts';

const initialState: PhonesInitialState = {
  phones: null,
  phone: null,
  isLoading: false,
  errors: null,
  lastCreatedId: null
};

const phonesSlice = createSlice<PhonesInitialState, SliceCaseReducers<PhonesInitialState>>(
  {
    name: 'phones',
    initialState,
    reducers: {
      fetchPhonesRequest: (state) => {
        state.isLoading = true;
        state.phones = null;
        state.errors = null;
      },
      fetchPhonesSuccess: (state, action: PayloadAction<PhoneNumberRecord[]>) => {
        state.isLoading = false;
        state.phones = action.payload;
        state.errors = null;
      },
      fetchPhonesFailure: (state, action: PayloadAction<SerializedError>) => {
        state.isLoading = false;
        state.phones = null;
        state.errors = action.payload;
      },
      fetchPhoneRequest: (state) => {
        state.isLoading = true;
        state.phone = null;
        state.errors = null;
      },
      fetchPhoneSuccess: (state, action: PayloadAction<PhoneNumberRecord['id']>) => {
        state.isLoading = false;
        if (state.phones) {
          const phone = state.phones.find(phone => phone.id === action.payload);
          if (phone) state.phone = phone;
        }
        state.errors = null;
      },
      fetchPhoneFailure: (state, action: PayloadAction<SerializedError>) => {
        state.isLoading = false;
        state.phone = null;
        state.errors = action.payload;
      },
      createPhoneRequest: (state) => {
        state.isLoading = true;
        state.lastCreatedId = null;
        state.errors = null;
      },
      createPhoneSuccess: (state, action: PayloadAction<PhoneNumberRecord>) => {
        state.isLoading = false;

        state.phones = state.phones ? [
          ...state.phones,
          action.payload
        ].sort(
          (a, b) => (
            a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1
          )
        ) : state.phones;
        state.lastCreatedId = action.payload.id;
        state.errors = null;
      },
      createPhoneFailure: (state, action: PayloadAction<SerializedError>) => {
        state.isLoading = false;
        state.lastCreatedId = null;
        state.errors = action.payload;
      },
      updatePhoneRequest: (state) => {
        state.isLoading = true;
        state.errors = null;
      },
      updatePhoneSuccess: (state, action: PayloadAction<PhoneNumberRecord>) => {
        state.isLoading = false;

        if (state.phones) {
          const index = state.phones.findIndex(
            phone => phone.id === action.payload.id);
          state.phones[index] = action.payload;
        }

        state.errors = null;
      },
      updatePhoneFailure: (state, action: PayloadAction<SerializedError>) => {
        state.isLoading = false;
        state.errors = action.payload;
      },
      deletePhoneRequest: (state) => {
        state.isLoading = true;
        state.errors = null;
      },
      deletePhoneSuccess: (state, action: PayloadAction<PhoneNumberRecord['id']>) => {
        state.isLoading = false;

        if (state.phones) {
          state.phones = state.phones.filter(
            phone => phone.id !== action.payload);
        }

        state.errors = null;
      },
      deletePhoneFailure: (state, action: PayloadAction<SerializedError>) => {
        state.isLoading = false;
        state.errors = action.payload;
      },
    },
  });

export const phonesSliceActions = phonesSlice.actions;
export default phonesSlice.reducer;