import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField
} from '@mui/material';
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IPhoneNumberFormValues, PhonesFormComponentProps } from '../../ts';

const PhonesCreateForm: FC<PhonesFormComponentProps> = ({
  defaultValues,
  submitHandler,
  submitButtonText = 'Submit'
}) => {
  const {
    control,
    handleSubmit,
  } = useForm<IPhoneNumberFormValues>({
    defaultValues
  });

  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit(submitHandler)}
      display={'flex'}
      flexDirection={'column'}
    >
      <Box display={'flex'} gap={'15px'} mb={'1em'}>
        <Controller
          control={control}
          name={'name.first'}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              fullWidth={true}
              label={'First name'}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
            />
          )}
          rules={{
            required: {
              value: true,
              message: 'First name field is required'
            }
          }}
        />

        <Controller
          control={control}
          name={'name.last'}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              fullWidth={true}
              label={'Last name'}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
            />
          )}
          rules={{
            required: {
              value: true,
              message: 'Last name field is required'
            }
          }}
        />
      </Box>

      <Box display={'flex'} justifyContent={'space-between'} mb={'1em'}>
        <Controller
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              fullWidth={true}
              label={'Phone number'}
              placeholder="+0 (123) 456-7890"
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
            />
          )}
          control={control}
          name={'phone'}
          rules={{
            required: {
              value: true,
              message: 'Phone number field is required'
            },
            pattern: {
              value: /^\+[0-9]{1,3} \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/,
              message: 'Phone number is invalid. Example: +0 (123) 456-7890'
            },
          }}
        />
      </Box>

      <Box display={'flex'} gap={'15px'} mb={'1em'}>
        <Controller
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              fullWidth={true}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              label={'E-mail'}
              placeholder="example@email.com"
            />
          )}
          rules={{
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail is invalid'
            },
          }}
          control={control}
          name={'email'}
        />

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth={true}
              label={'Address'}
              placeholder="Example address"
            />
          )}
          control={control}
          name={'address'}
        />
      </Box>

      <Box display={'flex'} gap={'15px'} mb={'1em'}>
        <Controller
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type={'number'}
              fullWidth={true}
              label={'Age'}
              placeholder="18"
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
            />
          )}
          rules={{
            max: {
              value: 120,
              message: 'Age value is invalid'
            },
            min: {
              value: 1,
              message: 'Age value is invalid'
            }
          }}
          control={control}
          name={'age'}
        />

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth={true}
              label={'Company Name'}
              placeholder="Example Company"
            />
          )}
          control={control}
          name={'company'}
        />
      </Box>

      <Box>
        <Controller
          render={({ field }) => (
            <FormGroup>
              <FormControlLabel
                control={(
                  <Switch
                    {...field}
                  />
                )}
                label={'Is Active'}
              />
            </FormGroup>
          )}
          control={control}
          name={'isActive'}
        />
      </Box>

      <Box display={'flex'} flexDirection={'row-reverse'}>
        <Button variant="contained" color="success" type={'submit'}>
          {submitButtonText}
        </Button>
      </Box>
    </Box>
  );
};

export default PhonesCreateForm;