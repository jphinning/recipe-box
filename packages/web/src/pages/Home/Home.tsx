import React from 'react';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { HomeWrapper } from './HomeStyles';

function Home() {
  return (
    <HomeWrapper>
      <RecipeCard />
    </HomeWrapper>
  );
}

export default Home;
