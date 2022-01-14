import { Box } from '@mui/material';
import React, {useCallback, useEffect} from 'react';
import PhonesItem from "../PhonesItem";
import {usePhones} from "../../../../hooks";

const PhonesList = () => {
    const {phones, onFetchPhones} = usePhones();

    useEffect(() => {
        if (!phones) {
            onFetchPhones();
        }
    }, [onFetchPhones, phones]);

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
        <Box p={'1em'}>
            {phones && renderPhonesList()}
        </Box>
    );
};

export default PhonesList;