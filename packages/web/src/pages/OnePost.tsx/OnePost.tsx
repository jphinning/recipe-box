import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useParams } from 'react-router-dom';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { HomeWrapper } from '../Home/HomeStyles';
import { MyPostQuery } from './__generated__/MyPostQuery.graphql';

function OnePost() {
  const { recipeId } = useParams();

  const res = useLazyLoadQuery<MyPostQuery>(
    graphql`
      query OnePostQuery($id: ID!) {
        findOneRecipe(id: $id) {
          ...RecipeCardFragment_recipes
        }
      }
    `,
    { id: recipeId ?? '' },
    {
      fetchPolicy: 'store-and-network',
    },
  );

  return (
    <>
      <HomeWrapper>
        <RecipeCard data={res?.findOneRecipe!} />
      </HomeWrapper>
    </>
  );
}

export default OnePost;
