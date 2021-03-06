import React, {useCallback, useEffect} from 'react';
import PhonesItem from "../PhonesItem";
import {usePhones} from "../../../../hooks";

const PhonesList = () => {
    const {phones, onGetAll} = usePhones();

    useEffect(() => {
        if (!phones) {
            onGetAll();
        }
    }, [onGetAll, phones]);

    const renderPhonesList = useCallback(() => {
        if (phones) {
            let currentLetter = '';

            return phones.map((phone) => {
                const firstLetter = phone.name.first.charAt(0).toLowerCase()

                if (currentLetter !== firstLetter) {
                    currentLetter = firstLetter;

                    return (
                        <React.Fragment key={phone.id}>
                            <h2>{currentLetter?.toUpperCase()}</h2>

                            <PhonesItem phoneNumber={phone} />
                        </React.Fragment>
                    );
                }

                return <PhonesItem phoneNumber={phone} key={phone.id} />;
            });
        }

        return <h1>Loading...</h1>
    }, [phones]);

    return (
        <div>
            {phones && renderPhonesList()}
        </div>
    );
};

export default PhonesList;