import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DefaultField } from '../../components/DefaultField/DefaultField';
import { CircularProgress, Typography } from '@mui/material';
import { DARK_BLUE } from '../../utils/colorConsts';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useAuth, { IAuthResponse } from '../../hooks/useAuth';
import { useMutation } from 'react-relay';
import { SignUpMutation } from './__generated__/SignUpMutation.graphql';
import { signUpMutation } from './SignUpMutation';
import signUpSchema from './SignUpSchema';
import {
  Form,
  FormBox,
  PrimaryButton,
  Wrapper,
} from '../../components/UI/Form/FormStyles';

interface ISignUpForm extends FieldValues {
  email: string;
  password: string;
  fullName: string;
}

export default function SignUp() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [runSignUp, isSignUpLoading] =
    useMutation<SignUpMutation>(signUpMutation);

  const { control, handleSubmit } = useForm<ISignUpForm>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (formInputData: ISignUpForm) => {
    runSignUp({
      variables: {
        input: {
          ...formInputData,
        },
      },
      onCompleted: (data) => {
        if (data.createUser?.error) {
          toast.error('User already exists');
        }

        if (data.createUser?.token && data.createUser.user) {
          toast.success('Success');
          navigate('/');

          signIn(data.createUser as IAuthResponse);
        }
      },
    });
  };

  return (
    <Wrapper>
      <FormBox>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='h3' color={DARK_BLUE}>
            Recipe Box
          </Typography>
          <DefaultField name='fullName' control={control} label='Full Name' />
          <DefaultField name='email' control={control} label='Email' />
          <DefaultField
            name='password'
            control={control}
            label='Password'
            type='password'
          />
          <PrimaryButton onClick={handleSubmit(onSubmit)}>
            {isSignUpLoading ? (
              <CircularProgress size={20} sx={{ color: 'white' }} />
            ) : (
              'Sign Up'
            )}
          </PrimaryButton>
        </Form>
      </FormBox>
    </Wrapper>
  );
}
