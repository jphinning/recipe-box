/* eslint-disable camelcase */
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { TEXT_GRAY } from '../../utils/colorConsts';
import { CardHeader, RecipeWrapper } from './RecipeCardStyles';
import { useFragment } from 'react-relay';
import { RecipeCardFragment_recipes$key } from './__generated__/RecipeCardFragment_recipes.graphql';
import { RecipeCardFragment } from './RecipeCardFragment';
import MenuIcon from '../UI/MenuIcon/MenuIcon';
import useAuth from '../../hooks/useAuth';

dayjs.extend(relativeTime);
interface IRecipeCardProps {
  globalId?: string;
  edgeId?: string;
  data: RecipeCardFragment_recipes$key;
}

export const RecipeCard = ({ data, globalId, edgeId }: IRecipeCardProps) => {
  const res = useFragment<RecipeCardFragment_recipes$key>(
    RecipeCardFragment,
    data,
  );

  const { email } = useAuth();

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
          {res.userId.email === email && (
            <MenuIcon recipeId={globalId} edgeId={edgeId} />
          )}
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
