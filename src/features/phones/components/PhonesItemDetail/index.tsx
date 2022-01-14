import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';
import { usePhones } from '../../../../hooks';

const PhonesItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const {
    isLoading,
    phone,
    onFetchPhone,
    errors,
    onDeletePhone,
    getFullName,
    phones,
    onFetchPhones
  } = usePhones();

  useEffect(() => {
    if (!phones) {
      onFetchPhones()
    }

    if (id) {
      onFetchPhone(id);
    }
  }, [onFetchPhone, id, phones, onFetchPhones]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (!isLoading && errors) {
    return (
      <div className="row text-center">
        <h1>{errors.message}</h1>
      </div>
    );
  }

  return (
    <Box
      width={'50%'}
      height={'-webkit-fit-content'}
      border={'1px lightgray solid'}
      borderRadius={'15px'}
      boxShadow={'0 0 15px gray'}
      m={'auto'}
      display={'flex'}
      flexDirection={'column'}
    >
      {phone && (
        <>
          <Box display={'flex'} justifyContent={'center'}>
            <Typography variant="h3">
              {getFullName(phone)}
            </Typography>
          </Box>
          <Divider />
          <Box p={'1em'}>
            <p className="m-0">Is Active: {phone.isActive ? 'Active'
              : 'Inactive'}</p>
            <p className="m-0">Phone number: {phone.phone}</p>
            <p className="m-0">E-mail: {phone.email}</p>
            <p className="m-0">Address: {phone.address}</p>
            <p className="m-0">Company: {phone.company}</p>
            <p className="m-0">Age: {phone.age}</p>
            <p className="m-0">Registered: {phone.registered}</p>
          </Box>
          <Divider />
          <Box
            p={'1em'}
            display={'flex'}
            justifyContent={'flex-end'}
            gap={'10px'}
            sx={{ 'a:hover': { color: 'white' } }}
          >
            <Button
              variant="contained"
              component={NavLink}
              to={ROUTES.phones.edit(phone.id)}
              color="success"
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => onDeletePhone(phone.id)}
            >
              Delete
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default PhonesItemDetail;