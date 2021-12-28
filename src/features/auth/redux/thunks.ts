import {createAsyncThunk} from '@reduxjs/toolkit';

import {AuthLoginResponse, AuthParams} from '../ts';
import {v4} from "uuid";
import {setStorageValue} from "src/api/localStorage";
import {RootState} from "../../../store";

export const loginThunk = createAsyncThunk<AuthLoginResponse, AuthParams, { state: RootState }>('@AUTH', async (param, thunkAPI) => {
    try {
        const _token = v4();
        setStorageValue('_token', _token);
        return {
            user: {
                id: 1,
                email: param.email,
                name: 'Test'
            },
            _token,
        };
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
