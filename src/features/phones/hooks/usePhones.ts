import { useSnackbar } from 'notistack';
import {useCallback} from "react";
import {IPhoneNumberFormValues, PhoneNumberRecord} from "../ts";
import {useAppSelector} from "../../../hooks";
import usePhonesActions from "./usePhonesActions";
import {useNavigate} from "react-router-dom";

export default function usePhones() {
    const actions = usePhonesActions()
    const navigate = useNavigate();
    const phonesState = useAppSelector(state => state.phones);
    const {enqueueSnackbar} = useSnackbar();

    const getFullName = useCallback((phone: PhoneNumberRecord) => `${phone.name.first} ${phone.name.last}`, []);

    const getPhones = useCallback((): PhoneNumberRecord[] | null => phonesState.phones, [phonesState.phones]);

    const getPhone = useCallback((id: PhoneNumberRecord["id"]) => phonesState.phones && phonesState.phones.find(phone => phone.id === id), [phonesState.phones]);

    const onFetchPhones = useCallback(() => {
        if (!phonesState.phones) {
            actions.fetchPhonesRequest()
        }
    }, [phonesState.phones]);

    const onFetchPhone = useCallback((id: PhoneNumberRecord["id"]) => actions.fetchPhoneRequest(id), []);

    const onCreatePhone = useCallback((data: IPhoneNumberFormValues) => actions.createPhoneRequest({
        phone: data,
        navigate,
        addToast: () => enqueueSnackbar('Phone number successfully added.', {variant: 'success'})
    }), [enqueueSnackbar, navigate]);

    const onUpdatePhone = useCallback((data: IPhoneNumberFormValues) => actions.updatePhoneRequest({
        phone: data,
        navigate,
        addToast: () => enqueueSnackbar(`Phone number "${getFullName(data as PhoneNumberRecord)}" successfully updated.`, {variant: 'success'})
    }), [enqueueSnackbar, getFullName, navigate]);

    const onDeletePhone = useCallback((id: PhoneNumberRecord["id"]) => actions.deletePhoneRequest({
        id,
        navigate,
        addToast: () => enqueueSnackbar('Phone number successfully deleted.', {variant: 'success'}),
    }), [enqueueSnackbar, navigate]);

    return {
        ...phonesState,
        onFetchPhones,
        onFetchPhone,
        onCreatePhone,
        onUpdatePhone,
        onDeletePhone,
        getPhones,
        getPhone,
        getFullName,
    };
}