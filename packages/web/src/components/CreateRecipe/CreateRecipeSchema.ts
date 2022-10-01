import * as yup from 'yup';

const createRecipeSchema = yup.object({
  title: yup
    .string()
    .required('Insert a title')
    .max(45, 'Max limit of 45 characters reached'),
  description: yup
    .string()
    .required('Insert a description')
    .max(250, 'Max limit of 250 characters reached'),
});

export default createRecipeSchema;
