import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import MyRecipesFeed from '../../components/MyRecipesFeed/MyRecipesFeed';
import { HomeWrapper } from '../Home/HomeStyles';
import { MyPostsQuery } from './__generated__/MyPostsQuery.graphql';

function MyPosts() {
  const res = useLazyLoadQuery<MyPostsQuery>(
    graphql`
      query MyPostsQuery {
        ...MyRecipes_query
      }
    `,
    {},
  );

  return (
    <>
      <HomeWrapper>
        <MyRecipesFeed query={res} />
      </HomeWrapper>
    </>
  );
}

export default MyPosts;
