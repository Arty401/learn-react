import React, {useCallback} from 'react';
import {PhoneNumberRecord} from "../../ts";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../../constants/routes";

const PhonesItem = ({phoneNumber}: { phoneNumber: PhoneNumberRecord }) => {

    const getFullName = useCallback(() => `${phoneNumber.name.first} ${phoneNumber.name.last}`, [])

    return (
        <NavLink to={ROUTES.phones.show(phoneNumber.id)}>
            <h6>{getFullName()}</h6>
        </NavLink>
    );
};

export default PhonesItem;