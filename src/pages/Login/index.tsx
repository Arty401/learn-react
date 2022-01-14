import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import LoginForm from '../../features/auth/components/LoginForm';

const Login = () => {
  return (
    <Box
      width={'50%'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      border={'1px lightgray solid'}
      my={'auto'}
      mx={'auto'}
      p={'1em'}
      boxShadow={'0 0 1em gray'}
      borderRadius={'5px'}
    >
      <Typography variant="h2" align={'center'} fontWeight={"bolder"}>
        Log In
      </Typography>
      <Divider variant="fullWidth" sx={{mt: '5px', mb: '5px'}}/>
      <LoginForm />
    </Box>
  );
};

export default Login;
