import {useCallback} from "react";
import {createPhone, deletePhoneById, getAllPhones, getPhoneById, updatePhone} from "../redux/thunks";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../constants/routes";
import {IPhoneNumberFormValues, PhoneNumberRecord} from "../ts";
import {useAppDispatch, useAppSelector} from "../../../hooks";

export default function usePhones() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const phonesState = useAppSelector(state => state.phones);

    const onGetAll = useCallback(() => dispatch(getAllPhones()), [dispatch]);

    const onGetById = useCallback((id: string) => dispatch(getPhoneById(id)), [dispatch]);

    const onCreate = useCallback((data: IPhoneNumberFormValues) => dispatch(createPhone(data)), [dispatch]);

    const onDelete = useCallback((id: string) => {
        dispatch(deletePhoneById(id))
        navigate(ROUTES.main);
    }, [dispatch]);

    const onUpdate = useCallback((data: IPhoneNumberFormValues) => dispatch(updatePhone(data)), [dispatch])

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