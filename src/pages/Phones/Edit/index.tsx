import { Box, Divider, Typography } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import PhonesCreateForm
  from '../../../features/phones/components/PhonesCreateForm';
import { IPhoneNumberFormValues } from '../../../features/phones/ts';
import { usePhones } from '../../../hooks';

type EditParamsType = {
  id: string
}

const Edit: FC = () => {
  const { id } = useParams<EditParamsType>();
  const {
    isLoading,
    onFetchPhones,
    onFetchPhone,
    getFullName,
    phone,
    errors,
    phones,
    onUpdatePhone
  } = usePhones();

  useEffect(() => {
    if (id) {
      onFetchPhone(id);
    }
  }, [id, onFetchPhone]);

  if (isLoading) {
    return <div className="text-center h1">Loading...</div>;
  }

  if (!phone || errors) {
    return <div className="text-center h1">Phone with id &quot;{id}&quot; not
      found</div>;
  }

  const onSubmitHandler: SubmitHandler<IPhoneNumberFormValues> = async (data) => {
    if (!phones) {
      await onFetchPhones();
    }

    await onUpdatePhone(data);
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      border={'1px lightgray solid'}
      borderRadius={'15px'}
      boxShadow={'0 0 15px gray'}
      p={'1em'}
      m={'auto'}
      width={'50%'}
      height={'fit-content'}
    >
      <Typography variant="h5">
        Edit &quot;{getFullName(phone)}&quot; Phone Number
      </Typography>
      <Box my={'1em'}>
        <Divider variant="fullWidth" />
      </Box>
      <PhonesCreateForm
        defaultValues={phone} submitHandler={onSubmitHandler}
        submitButtonText="Edit"
      />
    </Box>
  );
};

export default Edit;