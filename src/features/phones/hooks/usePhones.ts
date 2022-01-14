import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {IPhoneNumberFormValues, PhoneNumberRecord} from "../ts";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {
    createPhoneRequest,
    deletePhoneRequest,
    getPhoneRequest,
    getPhonesRequest,
    updatePhoneRequest
} from "../redux/actions";

export default function usePhones() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const phonesState = useAppSelector(state => state.phones);

    const onGetAll = useCallback(() => dispatch(getPhonesRequest()), [dispatch]);

    const onGetById = useCallback((id: string) => dispatch(getPhoneRequest(id)), [dispatch]);

    const onCreate = useCallback((data: IPhoneNumberFormValues) => dispatch(createPhoneRequest(data, navigate)), [dispatch, navigate]);

    const onDelete = useCallback((id: string) => dispatch(deletePhoneRequest(id, navigate)), [dispatch]);

    const onUpdate = useCallback((data: IPhoneNumberFormValues) => dispatch(updatePhoneRequest(data, navigate)), [dispatch])

    const getFullName = useCallback((phone: PhoneNumberRecord) => `${phone.name.first} ${phone.name.last}`, [dispatch]);

    return {
        ...phonesState,
        onGetAll,
        onGetById,
        onDelete,
        onCreate,
        onUpdate,
        getFullName,
    };
}