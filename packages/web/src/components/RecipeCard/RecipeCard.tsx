/* eslint-disable camelcase */
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TEXT_GRAY } from '../../utils/colorConsts';
import { CardHeader, RecipeWrapper } from './RecipeCardStyles';
import { useFragment } from 'react-relay';
import { RecipeCardFragment_recipes$key } from './__generated__/RecipeCardFragment_recipes.graphql';
import { RecipeCardFragment } from './RecipeCardFragment';

dayjs.extend(relativeTime);
interface IRecipeCardProps {
  data: RecipeCardFragment_recipes$key;
}

export const RecipeCard = ({ data }: IRecipeCardProps) => {
  const res = useFragment<RecipeCardFragment_recipes$key>(
    RecipeCardFragment,
    data,
  );

  return (
    <RecipeWrapper>
      <CardHeader>
        <Avatar>H</Avatar>
        <div>
          <Typography sx={{ fontWeight: 600 }}>{res.title}</Typography>
          <Typography
            variant='caption'
            sx={{ fontWeight: 200, color: TEXT_GRAY }}
          >
            {res.userId.fullName} {dayjs(Number(res.createdAt)).fromNow()}
          </Typography>
        </div>
        <Box sx={{ marginLeft: 'auto' }}>
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </CardHeader>

      <Stack sx={{ color: TEXT_GRAY }} spacing={2}>
        <Typography variant='body2' color='text.secondary'>
          {res.description}
        </Typography>
        <img src='/src/assets/burrito.webp' />
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
