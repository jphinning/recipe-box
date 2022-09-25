import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, FormBox, PrimaryButton, Wrapper } from './SignInStyles';
import { DefaultField } from '../../components/DefaultField/DefaultField';
import { Typography } from '@mui/material';
import { DARK_BLUE } from '../../utils/colorConsts';
import signInSchema from './SignInSchema';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// import useAuth from '../../hooks/useAuth';

interface SignInForm extends FieldValues {
  email: string;
  password: string;
}

export default function SignIn() {
  // const { signIn } = useAuth();
  // const navigate = useNavigate();

  const { control, handleSubmit } = useForm<SignInForm>({
    resolver: yupResolver(signInSchema),
  });

  // const success = () => {
  //   toast.success('Success');
  //   navigate('/');
  //   // signIn(data!);
  // };

  // useEffect(() => {
  //   if (!isLoading && isError) {
  //     if ('status' in error!) {
  //       errorMessage(error.status);
  //       return;
  //     }
  //   }
  //   if (!isLoading && isSuccess) {
  //     success();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoading]);

  async function onSubmit({ email, password }: SignInForm) {
    console.log(email, password);
    // await runSignIn({ email, password });
  }

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
            Sign In
          </PrimaryButton>
        </Form>
      </FormBox>
    </Wrapper>
  );
}
