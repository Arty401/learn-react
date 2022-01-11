import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPhoneNumberFormValues, PhoneNumberRecord} from "../ts";
import {RootState} from "src/store";
import {v4} from "uuid";

export const getAllPhones = createAsyncThunk<PhoneNumberRecord[], void, {state: RootState}>(
    '@PHONES/getAll',
    async () => {
        const data = await require('./phones.json') as PhoneNumberRecord[];

        return data.slice().sort((a, b) => a.name.first > b.name.first ? 1 : -1);
    }
);

export const getPhoneById = createAsyncThunk<PhoneNumberRecord | null, string, { state: RootState, rejectValue: object }>(
    '@PHONES/getById',
    async (id, thunkAPI) => {
        const statePhones = await thunkAPI.getState().phones.phones;

        let data: PhoneNumberRecord[];

        if (statePhones) {
            data = statePhones;
        } else {
            data = await require('./phones.json') as PhoneNumberRecord[]
        }

        if (data.length) {
            const phone = await data.slice().find(phone => phone.id === id);

            if (phone) return phone;
        }

        return thunkAPI.rejectWithValue({message: 'asdasdasddas'});
    }
);

export const deletePhoneById = createAsyncThunk<PhoneNumberRecord[] | null, string, { state: RootState }>(
    '@PHONES/deleteById',
    async (id, {getState}) => {
        const phones = await getState().phones.phones;

        if (phones) {
            return phones.filter(phone => phone.id !== id);
        }

        return phones;
    }
);

export const createPhone = createAsyncThunk<PhoneNumberRecord, IPhoneNumberFormValues, { state: RootState; }>(
    '@PHONES/create',
    async (data, thunkAPI) => {
        try {
            return {
                ...data,
                id: v4(),
                registered: new Date().toISOString()
            } as PhoneNumberRecord;
        } catch (error) {
            return thunkAPI.rejectWithValue('Provided data is invalid');
        }
    }
);

export const updatePhone = createAsyncThunk<PhoneNumberRecord, IPhoneNumberFormValues, { state: RootState; rejectValue: object }>(
    '@PHONES/update',
    async (data, {getState, rejectWithValue}) => {
        const {phones} = getState().phones

        if (!phones || !phones.find(phone => phone.id === data.id)) {
            return rejectWithValue({message: `Phone with id ${data.id} not found`})
        }

        return data as PhoneNumberRecord;
    }
);