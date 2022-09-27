import * as yup from 'yup';

const createRecipeSchema = yup.object({
  title: yup.string().required('Insert a title'),
  description: yup
    .string()
    .required('Insert a description')
    .max(250, 'Max limit reached'),
});

export default createRecipeSchema;
