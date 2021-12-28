import {createSlice} from "@reduxjs/toolkit";
import {PhonesInitialState} from "../ts";
import {createPhone, deletePhoneById, getAllPhones, getPhoneById, updatePhone} from "./thunks";

const initialState: PhonesInitialState = {
    phones: null,
    phone: null,
    isLoading: false,
    errors: null
};

const PhonesSlice = createSlice({
    name: 'phones',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllPhones.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllPhones.fulfilled, (state, {payload}) => {
                state.phones = payload;
                state.errors = null;
                state.isLoading = false;
            })
            .addCase(getAllPhones.rejected, (state, {error}) => {
                state.phones = null;
                state.errors = error;
                state.isLoading = false;
            })
            .addCase(getPhoneById.pending, (state) => {
                state.isLoading = true;
                state.phone = null;
                state.errors = null;
            })
            .addCase(getPhoneById.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.phone = payload;
                state.errors = null;
            })
            .addCase(getPhoneById.rejected, (state, {error, payload}) => {
                state.isLoading = false;
                state.phone = null;

                if (payload) {
                    state.errors = payload;
                } else {
                    state.errors = error;
                }
            })
            .addCase(deletePhoneById.pending, state => {
                state.isLoading = true;
            })
            .addCase(deletePhoneById.fulfilled, (state, {payload}) => {
                state.phones = payload;
                state.isLoading = false;
            })
            .addCase(createPhone.pending, (state) => {
                state.phone = null;
                state.isLoading = true;
            })
            .addCase(createPhone.fulfilled, (state, {payload}) => {
                if (state.phones) {
                    state.phones = [...state.phones, payload].sort((a, b) => a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1);
                } else {
                    state.phones = [payload];
                }

                state.isLoading = false;
            })
            .addCase(createPhone.rejected, (state, {error}) => {
                state.phone = null;
                state.isLoading = false;
                state.errors = error;
            })
            .addCase(updatePhone.pending, (state) => {
                state.isLoading = true;
                state.errors = null;
            })
            .addCase(updatePhone.fulfilled, (state, {payload}) => {
                if (state.phones) {
                    const phoneIndex = state.phones.findIndex(phone => phone.id === payload.id);
                    if (phoneIndex >= 0) state.phones[phoneIndex] = payload;
                }
                state.isLoading = false;
                state.errors = null;
            })
            .addCase(updatePhone.rejected, (state, {payload, error}) => {
                state.isLoading = false;

                if (payload) {
                    state.errors = payload;
                } else {
                    state.errors = error;
                }
            });
    },
});

export default PhonesSlice.reducer;