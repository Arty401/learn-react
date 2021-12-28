import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {usePhones} from "../../../../hooks";
import {ROUTES} from "../../../../constants/routes";

const PhonesItemDetail = () => {
    const {id} = useParams<{ id: string }>();
    const {isLoading, phone, onGetById, onDelete, errors} = usePhones()

    useEffect(() => {
        if (id) {
            onGetById(id);
        }
    }, [onGetById, id]);

    if (isLoading) {
        return <h1>Loading</h1>;
    }

    return (
        <div>
            {phone && (
                <>
                    <h1 className="text-center">{`${phone.name.first} ${phone.name.last}`}</h1>
                    <div>
                        <div className="row">
                            <p className="m-0">Is Active: {phone.isActive ? 'Active' : 'Inactive'}</p>
                            <p className="m-0">Phone number: {phone.phone}</p>
                            <p className="m-0">E-mail: {phone.email}</p>
                            <p className="m-0">Address: {phone.address}</p>
                            <p className="m-0">Company: {phone.company}</p>
                            <p className="m-0">Age: {phone.age}</p>
                            <p className="m-0">Registered: {phone.registered}</p>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <NavLink to={ROUTES.phones.edit(phone.id)} className="col-2 btn btn-primary me-2">
                                    Edit
                                </NavLink>
                                <button className="col-2 btn bg-danger text-white" onClick={() => onDelete(phone.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {/*{errors && errors.message}*/}
        </div>
    );
};

export default PhonesItemDetail;