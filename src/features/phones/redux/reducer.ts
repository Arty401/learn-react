import {PhonesInitialState} from "../ts";
import {PhonesActions} from "./actions";
import * as types from './types';
import {Reducer} from "redux";

export const initialState: PhonesInitialState = {
    phones: null,
    phone: null,
    isLoading: false,
    errors: null,
    lastCreatedId: null,
};

const phonesReducer: Reducer<PhonesInitialState, PhonesActions> = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PHONES_REQUEST:
            return {
                ...state,
                isLoading: true,
                phones: null,
                errors: null
            };
        case types.GET_PHONES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                phones: action.payload,
                errors: null
            };
        case types.GET_PHONES_FAILURE:
            return {
                ...state,
                isLoading: false,
                phones: null,
                errors: action.payload
            };
        case types.GET_PHONE_REQUEST:
            return {
                ...state,
                isLoading: true,
                phone: null,
                errors: null
            };
        case types.GET_PHONE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                phone: action.payload,
                errors: null
            };
        case types.GET_PHONE_FAILURE:
            return {
                ...state,
                isLoading: false,
                phone: null,
                errors: action.payload
            };
        case types.CREATE_PHONE_REQUEST:
            return {
                ...state,
                isLoading: true,
                phone: null,
                errors: null
            };
        case types.CREATE_PHONE_SUCCESS:

            if (state.phones) {
                state.phones = [...state.phones, action.payload]
            } else {
                state.phones = [action.payload];
            }

            state.phones.sort((a, b) => a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1);

            return {
                ...state,
                isLoading: false,
                phones: state.phones,
                lastCreatedId: action.payload.id,
                phone: null,
                errors: null
            };
        case types.CREATE_PHONE_FAILURE:
            return {
                ...state,
                isLoading: false,
                phone: null,
                errors: action.payload
            };
        case types.DELETE_PHONE_REQUEST:
            return {
                ...state,
                isLoading: true,
                errors: null
            };
        case types.DELETE_PHONE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                phones: state.phones && state.phones.filter(phone => phone.id !== action.payload),
                phone: null,
                errors: null
            };
        case types.DELETE_PHONE_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            };
        case types.UPDATE_PHONE_REQUEST:
            return {
                ...state,
                isLoading: true,
                errors: null
            };
        case types.UPDATE_PHONE_SUCCESS:

            if (state.phones) {
                state.phones[state.phones.findIndex(phone => phone.id === action.payload.id)] = action.payload;
            }

            return {
                ...state,
                isLoading: false,
                phones: state.phones,
                errors: null
            };
        case types.UPDATE_PHONE_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default phonesReducer;