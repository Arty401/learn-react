import React, {useCallback} from 'react';
import PhonesCreateForm from "../../../features/phones/components/PhonesCreateForm";
import {SubmitHandler} from "react-hook-form";
import {IPhoneNumberFormValues} from "../../../features/phones/ts";
import {usePhones} from "../../../hooks";

const Create = () => {
    const {onCreatePhone} = usePhones();

    const onSubmitHandler: SubmitHandler<IPhoneNumberFormValues> = useCallback(async (data) => {
        await onCreatePhone(data);
    }, [onCreatePhone]);

    return (
        <div className="mt-5 mx-auto row justify-content-center border rounded p-3 w-50">
            <h1>Create Phone Number</h1>
            <hr />
            <PhonesCreateForm submitHandler={onSubmitHandler} submitButtonText="Create" />
        </div>
    );
};

export default Create;