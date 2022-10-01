import { yupResolver } from '@hookform/resolvers/yup';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {
  Avatar,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-relay';
import { toast } from 'react-toastify';
import { DefaultField } from '../DefaultField/DefaultField';
import { CardHeader, RecipeWrapper } from '../RecipeCard/RecipeCardStyles';
import { SearchButton } from '../UI/Buttons/AddNewPostButton';
import { Form, PrimaryButton } from '../UI/Form/FormStyles';
import { createRecipeMutation } from './CreateRecipeMutation';
import createRecipeSchema from './CreateRecipeSchema';
import { AddButton } from './CreateRecipeStyles';
import { CreateRecipeMutation } from './__generated__/CreateRecipeMutation.graphql';

const actions = [
  { icon: <AddCircleOutlineRoundedIcon />, name: 'Create new Recipe' },
];

interface CreateRecipeForm extends FieldValues {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

export const CreateRecipe = ({ id }: { id: string | undefined }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { control, handleSubmit, reset } = useForm<CreateRecipeForm>({
    resolver: yupResolver(createRecipeSchema),
  });

  const [runCreateRecipe, isCreateRecipeLoading] =
    useMutation<CreateRecipeMutation>(createRecipeMutation);

  const onSubmit = async (formInputData: CreateRecipeForm) => {
    runCreateRecipe({
      variables: {
        input: {
          ...formInputData,
          instructions: ['uno'],
          ingredients: ['uno'],
        },
        connections: id ? [id] : [],
      },
      onCompleted: (data) => {
        if (data.createRecipe?.error) {
          toast.error('Server error, please try again');
        }

        if (data.createRecipe?.recipe) {
          toast.success('Post Created');
        }
      },
    });
    reset();
    setOpen(false);
  };

  return (
    <>
      <RecipeWrapper>
        <CardHeader>
          <Avatar>H</Avatar>
          <SearchButton onClick={() => setOpen(true)}>
            Add your post
          </SearchButton>
        </CardHeader>
      </RecipeWrapper>
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
              multiline
              rows={7}
              maxRows={7}
            />
            <PrimaryButton onClick={handleSubmit(onSubmit)}>
              {isCreateRecipeLoading ? (
                <CircularProgress size={20} sx={{ color: 'white' }} />
              ) : (
                'Create Recipe'
              )}
            </PrimaryButton>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
