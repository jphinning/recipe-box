import { graphql } from 'react-relay';

export const RecipeCardFragment = graphql`
  fragment RecipeCardFragment_recipes on Recipes {
    id
    title
    description
    ingredients
    instructions
    userId {
      id
      email
      fullName
    }
  }
`;
