import { graphql } from 'react-relay';

export const findAllRecipesQuery = graphql`
  query FindAllRecipesQuery($first: Int) {
    findAllRecipes(first: $first)
      @connection(key: "FindAllRecipesQuery_findAllRecipes") {
      __id
      edges {
        node {
          id
          ...RecipeCardFragment_recipes
        }
      }
    }
  }
`;

// export const findAllRecipesFragment = graphql`
//   fragment FindAllRecipes_recipes on RecipesConnection {
//     edges {
//       node {
//         id
//         ...RecipeCardFragment_recipes
//       }
//     }
//   }
// `;
