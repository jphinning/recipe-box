import { graphql } from 'react-relay';

export const myRecipesQuery = graphql`
  fragment MyRecipes_query on Query
  @argumentDefinitions(
    first: { type: Int, defaultValue: 10 }
    after: { type: String }
  )
  @refetchable(queryName: "MyRecipesQuery") {
    findMyRecipes(first: $first, after: $after)
      @connection(key: "MyRecipesQuery_findMyRecipes", filters: []) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
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
