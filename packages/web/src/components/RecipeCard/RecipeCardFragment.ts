import { graphql } from 'react-relay';

export const RecipeCardFragment = graphql`
  fragment RecipeCardFragment_recipes on Recipes {
    id
    title
    description
    ingredients
    instructions
    createdAt
    updatedAt
    userId {
      id
      email
      fullName
    }
  }
`;
