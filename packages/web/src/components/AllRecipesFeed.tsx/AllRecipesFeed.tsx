/* eslint-disable camelcase */
import React, { useCallback } from 'react';

import { usePaginationFragment } from 'react-relay';
import { findAllRecipesQuery } from './FindAllRecipes';
import { FindAllRecipes_query$key } from './__generated__/FindAllRecipes_query.graphql';
import { FindAllRecipesQuery } from './__generated__/FindAllRecipesQuery.graphql';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { CreateRecipe } from '../CreateRecipe/CreateRecipe';
import { CircularProgress } from '@mui/material';
import { PrimaryButton } from '../UI/Form/FormStyles';

interface IAllRecipesFeedProps {
  query: FindAllRecipes_query$key;
}

const AllRecipesFeed = ({ query }: IAllRecipesFeedProps) => {
  const { data, hasNext, isLoadingNext, loadNext } = usePaginationFragment<
    FindAllRecipesQuery,
    FindAllRecipes_query$key
  >(findAllRecipesQuery, query);

  const { findAllRecipes } = data;

  const loadMore = useCallback(() => {
    if (!hasNext) return;
    // Don't fetch again if we're already loading the next page
    if (!isLoadingNext) {
      loadNext(10);
    }
  }, [isLoadingNext, loadNext]);

  return (
    <>
      <CreateRecipe id={findAllRecipes?.__id} />
      {findAllRecipes?.edges?.map((edge) => {
        return <RecipeCard key={edge?.node?.id} data={edge?.node!} />;
      })}

      {findAllRecipes?.edges?.map((edge) => {
        return <RecipeCard key={edge?.node?.id} data={edge?.node!} />;
      })}

      <PrimaryButton onClick={loadMore}>
        {isLoadingNext ? (
          <CircularProgress size={20} sx={{ color: 'white' }} />
        ) : (
          'Load More'
        )}
      </PrimaryButton>
    </>
  );
};

export default AllRecipesFeed;
