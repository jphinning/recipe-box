import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { EditFormDialog } from '../FormDialog/EditForm/EditFormDialog';

// eslint-disable-next-line no-unused-vars
enum IMenuOptions {
  // eslint-disable-next-line no-unused-vars
  edit = 1,
  // eslint-disable-next-line no-unused-vars
  remove = 2,
}

type WhichModal = 'EDIT' | 'DELETE' | null;

interface IMenuIconProps {
  edgeId?: string;
  recipeId?: string;
}

const options = [
  { text: 'Edit Post', value: IMenuOptions.edit },
  { text: 'Delete', value: IMenuOptions.remove },
];

const ITEM_HEIGHT = 48;

export default function MenuIcon({ edgeId, recipeId }: IMenuIconProps) {
  const [whichModal, setWhichModal] = useState<WhichModal>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOption = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { value } = event.target as HTMLLIElement;

    switch (value) {
      case IMenuOptions.edit:
        setAnchorEl(null);
        setWhichModal('EDIT');
        break;
      case IMenuOptions.remove:
        setAnchorEl(null);
        setWhichModal('DELETE');
        break;
    }
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map(({ text, value }) => (
          <MenuItem key={value} value={value} onClick={handleOption}>
            {text}
          </MenuItem>
        ))}
      </Menu>
      <EditFormDialog
        recipeId={recipeId}
        edgeId={edgeId}
        openModal={whichModal === 'EDIT'}
        title={'Edit Recipe'}
        setOpenModal={() => setWhichModal(null)}
      />
    </div>
  );
}
