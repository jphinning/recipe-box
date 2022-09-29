/* eslint-disable camelcase */
import React, { useCallback } from 'react';

import { usePaginationFragment } from 'react-relay';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { CreateRecipe } from '../CreateRecipe/CreateRecipe';
import { CircularProgress } from '@mui/material';
import { PrimaryButton } from '../UI/Form/FormStyles';
import { MyRecipes_query$key } from './__generated__/MyRecipes_query.graphql';
import { MyRecipesQuery } from './__generated__/MyRecipesQuery.graphql';
import { myRecipesQuery } from './MyRecipes';

interface IMyRecipesFeedProps {
  query: MyRecipes_query$key;
}

const MyRecipesFeed = ({ query }: IMyRecipesFeedProps) => {
  const { data, hasNext, isLoadingNext, loadNext } = usePaginationFragment<
    MyRecipesQuery,
    MyRecipes_query$key
  >(myRecipesQuery, query);

  const { findMyRecipes } = data;

  const loadMore = useCallback(() => {
    if (!hasNext) return;
    // Don't fetch again if we're already loading the next page
    if (!isLoadingNext) {
      loadNext(10);
    }
  }, [isLoadingNext, loadNext]);

  return (
    <>
      <CreateRecipe id={findMyRecipes?.__id} />
      {findMyRecipes?.edges?.map((edge) => {
        return <RecipeCard key={edge?.node?.id} data={edge?.node!} />;
      })}
      {hasNext && (
        <PrimaryButton onClick={loadMore}>
          {isLoadingNext ? (
            <CircularProgress size={20} sx={{ color: 'white' }} />
          ) : (
            'Load More'
          )}
        </PrimaryButton>
      )}
    </>
  );
};

export default MyRecipesFeed;
