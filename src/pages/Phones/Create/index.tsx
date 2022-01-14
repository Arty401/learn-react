import { Box, Divider, Typography } from '@mui/material';
import {cloneDeep} from 'lodash';
import React, { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import PhonesCreateForm
  from '../../../features/phones/components/PhonesCreateForm';
import { IPhoneNumberFormValues } from '../../../features/phones/ts';
import { usePhones } from '../../../hooks';

const Create = () => {
  const { onCreatePhone } = usePhones();

  const onSubmitHandler: SubmitHandler<IPhoneNumberFormValues> = useCallback(
    (data) => {
      onCreatePhone(cloneDeep(data));
    }, [onCreatePhone]
  );

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      border={'1px lightgray solid'}
      boxShadow={'0 0 15px gray'}
      borderRadius={'5px'}
      p={'1em'}
      width={'50%'}
      mx={'auto'}
      my={'auto'}
    >
      <Typography variant="h4">
        Create Phone Number
      </Typography>
      <Box my={'1em'}>
        <Divider />
      </Box>
      <PhonesCreateForm
        submitHandler={onSubmitHandler}
        submitButtonText="Create"
        defaultValues={{
          age: 1,
          address: '',
          company: '',
          phone: '',
          name: {
            first: '',
            last: ''
          },
          email: '',
          isActive: false,
        }}
      />
    </Box>
  );
};

export default Create;