import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import { useMutation } from 'react-relay';
import { toast } from 'react-toastify';
import { removeRecipeMutation } from './RemoveRecipeMutation';
import { RemoveRecipeMutation } from './__generated__/RemoveRecipeMutation.graphql';

interface IRemoveDialogProps {
  recipeId?: string;
  edgeId: string | undefined;
  openModal: boolean;
  setOpenModal: () => void;
}

export function RemoveDialog({
  recipeId,
  edgeId,
  openModal,
  setOpenModal,
}: IRemoveDialogProps) {
  const [runRemoveRecipe] =
    useMutation<RemoveRecipeMutation>(removeRecipeMutation);

  const handleMutation = async () => {
    runRemoveRecipe({
      variables: {
        input: {
          globalId: recipeId,
        },
        connections: edgeId ? [edgeId] : [],
      },
      onCompleted: (data) => {
        if (data.deleteRecipe?.error) {
          toast.error('Server error, please try again');
        }

        if (data.deleteRecipe?.recipeId) {
          toast.success('Post Deleted');
        }
      },
    });
    setOpenModal();
  };

  return (
    <>
      <Dialog open={openModal} onClose={() => setOpenModal()}>
        <DialogTitle>{'Delete Recipe?'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your recipe? This action is
            irreversible and may not be subject to legal noticing.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal()}>Cancel</Button>
          <Button onClick={handleMutation} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
