import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DefaultField } from '../../components/DefaultField/DefaultField';
import { CircularProgress } from '@mui/material';
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
import logo from '../../assets/logo.svg';
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
          <img height='110px' alt='logo' src={logo} />
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
