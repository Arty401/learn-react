import {createAsyncThunk} from '@reduxjs/toolkit';

import {AuthLoginResponse, AuthParams} from '../ts';
import {v4} from "uuid";
import {setStorageValue} from "src/api/localStorage";

export const loginThunk = createAsyncThunk<AuthLoginResponse, AuthParams>('@AUTH', async (param, thunkAPI) => {
    try {
        // API call
        //localStorage.setItem('user', JSON.stringify(data.user));
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
