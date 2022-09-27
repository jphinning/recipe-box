import { yupResolver } from '@hookform/resolvers/yup';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { DefaultField } from '../DefaultField/DefaultField';
import { Form, PrimaryButton } from '../UI/Form/FormStyles';
import createRecipeSchema from './CreateRecipeSchema';
import { AddButton } from './CreateRecipeStyles';

const actions = [
  { icon: <AddCircleOutlineRoundedIcon />, name: 'Create new Recipe' },
];

interface CreateRecipeForm extends FieldValues {
  email: string;
  password: string;
}

export const CreateRecipe = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<CreateRecipeForm>({
    resolver: yupResolver(createRecipeSchema),
  });

  const onSubmit = async (formInputData: CreateRecipeForm) => {
    console.log(formInputData);
    setOpen(false);
  };

  return (
    <>
      <AddButton ariaLabel='SpeedDial' icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => setOpen(true)}
          />
        ))}
      </AddButton>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Create new recipe</DialogTitle>
        <DialogContent dividers>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DefaultField name='title' control={control} label='Title' />
            <DefaultField
              name='description'
              control={control}
              label='Description'
            />
            <PrimaryButton onClick={handleSubmit(onSubmit)}>
              {/* {isSignInLoading ? (
                  <CircularProgress size={20} sx={{ color: 'white' }} />
                ) : (
                  'Sign In'
                )} */}
              Create
            </PrimaryButton>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
