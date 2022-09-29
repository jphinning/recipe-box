import React from 'react';
import { HomeWrapper } from './HomeStyles';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { HomeQuery } from './__generated__/HomeQuery.graphql';
import AllRecipesFeed from '../../components/AllRecipesFeed.tsx/AllRecipesFeed';

function Home() {
  const res = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        ...FindAllRecipes_query
      }
    `,
    {},
  );

  return (
    <>
      <HomeWrapper>
        <AllRecipesFeed query={res} />
      </HomeWrapper>
    </>
  );
}

export default Home;
