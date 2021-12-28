import React from 'react';
import PhonesList from "../../features/phones/components/PhonesList";
import {ROUTES} from "../../constants/routes";
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div className="row align-items-center">
                <h1 className="col">Phones List</h1>
                <NavLink to={ROUTES.phones.create} className="col-3 btn btn-success">Create new</NavLink>
            </div>
            <PhonesList/>
        </div>
    );
};

export default Main;