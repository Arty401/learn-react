import React from 'react';
import PhonesList from "../../features/phones/components/PhonesList";
import {ROUTES} from "../../constants/routes";
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div className="border rounded p-4 mt-5 w-50 mx-auto">
            <div className="row align-items-center mb-2">
                <h2 className="col m-0">Phones List</h2>
                <NavLink to={ROUTES.phones.create} className="col-3 btn btn-success">Create new</NavLink>
            </div>
            <div className="row">
                <hr className="m-0"/>
            </div>
            <PhonesList/>
        </div>
    );
};

export default Main;