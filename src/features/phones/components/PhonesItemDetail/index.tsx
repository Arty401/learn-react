import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {usePhones} from "../../../../hooks";
import {ROUTES} from "../../../../constants/routes";

const PhonesItemDetail = () => {
    const {id} = useParams<{ id: string }>();
    const {isLoading, phone, onGetById, onDelete} = usePhones()

    useEffect(() => {
        if (id) {
            onGetById(id);
        }
    }, [onGetById, id]);

    if (isLoading) {
        return <h1>Loading</h1>;
    }

    return (
        <div className="w-50 border p-4 mx-auto mt-5">
            {phone && (
                <>
                    <div className="row">
                        <h1 className="text-center">{`${phone.name.first} ${phone.name.last}`}</h1>
                    </div>
                    <hr className="m-0" />
                    <div className="mt-2">
                        <div className="row">
                            <p className="m-0">Is Active: {phone.isActive ? 'Active' : 'Inactive'}</p>
                            <p className="m-0">Phone number: {phone.phone}</p>
                            <p className="m-0">E-mail: {phone.email}</p>
                            <p className="m-0">Address: {phone.address}</p>
                            <p className="m-0">Company: {phone.company}</p>
                            <p className="m-0">Age: {phone.age}</p>
                            <p className="m-0">Registered: {phone.registered}</p>
                        </div>
                        <hr />
                        <div className="row justify-content-end">
                            <NavLink to={ROUTES.phones.edit(phone.id)} className="col-3 btn btn-primary me-2">
                                Edit
                            </NavLink>
                            <button className="col-3 btn bg-danger text-white me-2" onClick={() => onDelete(phone.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default PhonesItemDetail;