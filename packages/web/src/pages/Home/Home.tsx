import React from 'react';
import { HomeWrapper } from './HomeStyles';
import { useLazyLoadQuery } from 'react-relay';
import { findAllRecipesQuery } from './FindAllRecipes';
import { FindAllRecipesQuery } from './__generated__/FindAllRecipesQuery.graphql';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { CreateRecipe } from '../../components/CreateRecipe/CreateRecipe';

function Home() {
  const res = useLazyLoadQuery<FindAllRecipesQuery>(
    findAllRecipesQuery,
    { first: 5 },
    {
      fetchPolicy: 'store-or-network',
    },
  );

  const { findAllRecipes } = res;

  return (
    <>
      <CreateRecipe />
      <HomeWrapper>
        {findAllRecipes?.edges?.map((edge) => {
          return <RecipeCard key={edge?.node?.id} data={edge?.node!} />;
        })}
      </HomeWrapper>
    </>
  );
}

export default Home;
