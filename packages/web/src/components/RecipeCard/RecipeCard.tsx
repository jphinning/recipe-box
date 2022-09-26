import React from 'react';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TEXT_GRAY } from '../../utils/colorConsts';
import { CardHeader, RecipeWrapper } from './RecipeCardStyles';

export const RecipeCard = () => {
  return (
    <RecipeWrapper>
      <CardHeader>
        <Avatar>H</Avatar>
        <div>
          <Typography sx={{ fontWeight: 600 }}>Title</Typography>
          <Typography
            variant='caption'
            sx={{ fontWeight: 200, color: TEXT_GRAY }}
          >
            Full name 3h ago
          </Typography>
        </div>
        <Box sx={{ marginLeft: 'auto' }}>
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </CardHeader>

      <img src='/src/assets/paella.jpg' />

      <Stack sx={{ color: TEXT_GRAY }} spacing={2}>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <Stack direction='row'>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </Stack>
      </Stack>
    </RecipeWrapper>
  );
};
