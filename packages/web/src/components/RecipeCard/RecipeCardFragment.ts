import { graphql } from 'react-relay';

export const RecipeCardFragment = graphql`
  fragment RecipeCardFragment_recipes on Recipes {
    id
    title
    description
    createdAt
    userId {
      id
      fullName
    }
  }
`;
