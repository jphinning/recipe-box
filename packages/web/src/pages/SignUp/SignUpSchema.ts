import * as yup from 'yup';

const signUpSchema = yup.object({
  fullName: yup.string().required('Insert your name'),
  email: yup.string().required('Insert an Email').email('Insert a valid Email'),
  password: yup
    .string()
    .required('Insert a password')
    .min(8, 'Insert at least 8 characters'),
});

export default signUpSchema;
