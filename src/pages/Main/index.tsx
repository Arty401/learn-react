import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import PhonesList from '../../features/phones/components/PhonesList';

const Main = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      height={'fit-content'}
      border={'1px lightgray solid'}
      borderRadius={'5px'}
      mt={'1em'}
      mx={'auto'}
      width={'50%'}
      boxShadow={'0 0 15px gray'}
    >
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        p={'1em'}
      >
        <Typography variant="h4" fontWeight={'bolder'}>
          Phones list
        </Typography>
        <Button
          variant="contained"
          color="success"
          type={'button'}
          component={NavLink}
          to={ROUTES.phones.create}
          sx={{ ':hover': { color: 'white' } }}
        >
          Create new phone
        </Button>
      </Box>
      <Divider />
      <PhonesList />
    </Box>
  );
};

export default Main;