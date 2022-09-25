import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DefaultField } from '../../components/DefaultField/DefaultField';
import { CircularProgress, Typography } from '@mui/material';
import { DARK_BLUE } from '../../utils/colorConsts';
import signInSchema from './SignInSchema';
import { signInMutation } from './SignInMutation';
import { SignInMutation } from './__generated__/SignInMutation.graphql';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useAuth, { IAuthResponse } from '../../hooks/useAuth';
import { useMutation } from 'react-relay';
import {
  Wrapper,
  FormBox,
  PrimaryButton,
  Form,
} from '../../components/UI/Form/FormStyles';

interface SignInForm extends FieldValues {
  email: string;
  password: string;
}

export default function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [runSignIn, isSignInLoading] =
    useMutation<SignInMutation>(signInMutation);

  const { control, handleSubmit } = useForm<SignInForm>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (formInputData: SignInForm) => {
    runSignIn({
      variables: {
        input: {
          ...formInputData,
        },
      },
      onCompleted: (data) => {
        if (data.loginUser?.error) {
          toast.error('Invalid Credentials');
        }

        if (data.loginUser?.token && data.loginUser.user) {
          toast.success('Login successful');
          navigate('/');

          signIn(data.loginUser as IAuthResponse);
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
          <DefaultField name='email' control={control} label='Email' />
          <DefaultField
            name='password'
            control={control}
            label='Password'
            type='password'
          />
          <PrimaryButton onClick={handleSubmit(onSubmit)}>
            {isSignInLoading ? (
              <CircularProgress size={20} sx={{ color: 'white' }} />
            ) : (
              'Sign In'
            )}
          </PrimaryButton>
        </Form>
      </FormBox>
    </Wrapper>
  );
}
