import React, {FC, useEffect} from 'react';
import PhonesCreateForm from "../../../features/phones/components/PhonesCreateForm";
import {usePhones} from "../../../hooks";
import {useNavigate, useParams} from "react-router-dom";
import {SubmitHandler} from "react-hook-form";
import {IPhoneNumberFormValues} from "../../../features/phones/ts";
import {ROUTES} from "../../../constants/routes";

type EditParamsType = {
    id: string
}

const Edit: FC = () => {
    const {id} = useParams<EditParamsType>();
    const {isLoading, onGetById, getFullName, phone, onUpdate, errors} = usePhones();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            onGetById(id);
        }
    }, [id, onGetById])

    if (isLoading) {
        return <div className="text-center h1">Loading...</div>
    }

    if (!phone || errors) {
        return <div className="text-center h1">Phone with id "{id}" not found</div>
    }

    const onSubmitHandler: SubmitHandler<IPhoneNumberFormValues> = async (data) => {
        await onUpdate(data).unwrap().then(() => navigate(ROUTES.phones.show(data.id)));
    }

    return (
        <div className="mt-5 mx-auto row justify-content-center border rounded p-3 w-75">
            <h2>Edit "{getFullName(phone)}" Phone Number</h2>
            <PhonesCreateForm defaultValues={phone} submitHandler={onSubmitHandler} submitButtonText="Edit"/>
        </div>
    );
};

export default Edit;