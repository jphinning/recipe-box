import { graphql } from 'react-relay';

export const findAllRecipesQuery = graphql`
  query FindAllRecipesQuery($first: Int) {
    findAllRecipes(first: $first) {
      edges {
        node {
          id
          ...RecipeCardFragment_recipes
        }
      }
    }
  }
`;
