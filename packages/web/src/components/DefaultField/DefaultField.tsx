import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

type IDefaultFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
  label: string;
};

export const DefaultField = ({
  name,
  control,
  label,
  ...props
}: IDefaultFieldProps) => {
  return (
    <Controller
      defaultValue={''}
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <TextField
            onChange={onChange}
            value={value}
            label={label}
            error={!!error}
            helperText={error?.message}
            {...props}
          />
        </>
      )}
    />
  );
};
