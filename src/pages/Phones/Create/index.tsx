import React from 'react';
import PhonesCreateForm from "../../../features/phones/components/PhonesCreateForm";
import {SubmitHandler} from "react-hook-form";
import {IPhoneNumberFormValues} from "../../../features/phones/ts";
import {usePhones} from "../../../hooks";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const {onCreate, lastCreatedId} = usePhones();
    const navigate = useNavigate();

    const onSubmitHandler: SubmitHandler<IPhoneNumberFormValues> = async (data) => {
        onCreate(data);

        if (lastCreatedId) {
            navigate(lastCreatedId);
        }
    };

    return (
        <div className="mt-5 mx-auto row justify-content-center border rounded p-3 w-50">
            <h1>Create Phone Number</h1>
            <hr />
            <PhonesCreateForm submitHandler={onSubmitHandler} submitButtonText="Create" />
        </div>
    );
};

export default Create;