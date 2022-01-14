import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../../../../hooks';
import { AuthParams } from '../../ts';

const LoginForm = () => {
  const {
    handleSubmit,
    control
  } = useForm<AuthParams>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { onLogin } = useAuth();

  const onSubmitHandler: SubmitHandler<AuthParams> = (data: AuthParams) => {
    onLogin(data);
  };

  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit(onSubmitHandler)}
      display={'flex'}
      flexDirection={'column'}
    >
      <Controller
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'E-mail field is mandatory'
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email address is invalid'
          }
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            variant="outlined"
            label="E-mail"
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
            margin="normal"
          />
        )}
      />

      <Controller
        render={({ field, fieldState }) => (
          <TextField
            type={'password'}
            {...field}
            variant="outlined"
            label="Password"
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
            margin="normal"
          />
        )}
        control={control}
        name="password"
        rules={{
          required: {
            value: true,
            message: 'Password field is required'
          },
          minLength: {
            value: 8,
            message: 'Password field has at least 8 characters'
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            message: 'Password is incorrect'
          }
        }}
      />

      <Box display={'flex'} justifyContent={'flex-end'}>
        <Button variant="contained" color="primary" type={'submit'}>
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
