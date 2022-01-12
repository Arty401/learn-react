import {useCallback} from "react";
import {IPhoneNumberFormValues, PhoneNumberRecord} from "../ts";
import {useAppSelector} from "../../../hooks";
import usePhonesActions from "./usePhonesActions";
import {useNavigate} from "react-router-dom";

export default function usePhones() {
    const actions = usePhonesActions()
    const navigate = useNavigate();
    const phonesState = useAppSelector(state => state.phones);

    const onFetchPhones = useCallback(() => {
        if (!phonesState.phones) {
            actions.fetchPhonesRequest()
        }
    }, [phonesState.phones]);

    const onFetchPhone = useCallback((id: PhoneNumberRecord["id"]) => actions.fetchPhoneRequest(id), []);

    const onCreatePhone = useCallback((data: IPhoneNumberFormValues) => actions.createPhoneRequest({
        phone: data,
        navigate
    }), [navigate]);

    const onUpdatePhone = useCallback((data: IPhoneNumberFormValues) => actions.updatePhoneRequest({
        phone: data,
        navigate
    }), []);

    const onDeletePhone = useCallback((id: PhoneNumberRecord["id"]) => actions.deletePhoneRequest({
        id,
        navigate
    }), [navigate, phonesState.errors]);

    const getFullName = useCallback((phone: PhoneNumberRecord) => `${phone.name.first} ${phone.name.last}`, []);

    const getPhones = useCallback((): PhoneNumberRecord[] | null => phonesState.phones, [phonesState.phones]);

    const getPhone = useCallback((id: PhoneNumberRecord["id"]) => phonesState.phones && phonesState.phones.find(phone => phone.id === id), [phonesState.phones]);

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