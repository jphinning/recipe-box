import * as yup from 'yup';

const createRecipeSchema = yup.object({
  title: yup.string().required('Insert a title').max(45, 'Max limit reached'),
  description: yup
    .string()
    .required('Insert a description')
    .max(250, 'Max limit reached'),
});

export default createRecipeSchema;
