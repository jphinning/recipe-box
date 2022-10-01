import { yupResolver } from '@hookform/resolvers/yup';
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-relay';
import { toast } from 'react-toastify';
import createRecipeSchema from '../../../CreateRecipe/CreateRecipeSchema';
import { DefaultField } from '../../../DefaultField/DefaultField';
import { Form, PrimaryButton } from '../../Form/FormStyles';
import { editFormMutation } from './EditFormMutation';
import { EditFormMutation } from './__generated__/EditFormMutation.graphql';

interface EditRecipeForm extends FieldValues {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

interface FormDialogProps {
  recipeId?: string;
  edgeId: string | undefined;
  openModal: boolean;
  title: string;
  setOpenModal: () => void;
}

export const EditFormDialog = ({
  recipeId,
  edgeId,
  openModal,
  title,
  setOpenModal,
}: FormDialogProps) => {
  const [runEditRecipe, isEditRecipeLoading] =
    useMutation<EditFormMutation>(editFormMutation);

  const { control, handleSubmit, reset } = useForm<EditRecipeForm>({
    resolver: yupResolver(createRecipeSchema),
  });

  const onSubmit = async (formInputData: EditRecipeForm) => {
    runEditRecipe({
      variables: {
        input: {
          globalId: recipeId,
          ...formInputData,
          instructions: ['uno'],
          ingredients: ['uno'],
        },
        connections: edgeId ? [edgeId] : [],
      },
      onCompleted: (data) => {
        if (data.updateRecipe?.error) {
          toast.error('Server error, please try again');
        }

        if (data.updateRecipe?.recipe) {
          toast.success('Post updated');
        }
      },
    });
    reset();
    setOpenModal();
  };

  return (
    <Dialog open={openModal} onClose={() => setOpenModal()} fullWidth>
      <DialogTitle>{title}</DialogTitle>
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
            {isEditRecipeLoading ? (
              <CircularProgress size={20} sx={{ color: 'white' }} />
            ) : (
              'Edit Recipe'
            )}
          </PrimaryButton>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
