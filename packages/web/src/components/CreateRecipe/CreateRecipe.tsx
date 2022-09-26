import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { AddButton } from './CreateRecipeStyles';
import Fade from '@mui/material/Fade';
import { TEXT_GRAY } from '../../utils/colorConsts';

export const CreateRecipe = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AddButton onClick={handleClick} aria-label='add' size='large'>
        <AddIcon fontSize='large' />
      </AddButton>
      <Menu
        id='fade-menu'
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddCircleOutlinedIcon
              fontSize='medium'
              sx={{ color: TEXT_GRAY }}
            />
          </ListItemIcon>
          Add Recipe
        </MenuItem>
      </Menu>
    </>
  );
};
