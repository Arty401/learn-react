import React from 'react';
import {PhoneNumberRecord} from "../../ts";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../../constants/routes";
import {usePhones} from "../../../../hooks";

const PhonesItem = ({phoneNumber}: { phoneNumber: PhoneNumberRecord }) => {

    const {getFullName} = usePhones()

    return (
        <NavLink to={ROUTES.phones.show(phoneNumber.id)}>
            <h6>{getFullName(phoneNumber)}</h6>
        </NavLink>
    );
};

export default PhonesItem;