import { graphql } from 'react-relay';

export const findAllRecipesQuery = graphql`
  fragment FindAllRecipes_query on Query
  @argumentDefinitions(
    first: { type: Int, defaultValue: 10 }
    after: { type: String }
  )
  @refetchable(queryName: "FindAllRecipesQuery") {
    findAllRecipes(first: $first, after: $after)
      @connection(key: "FindAllRecipesQuery_findAllRecipes", filters: []) {
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
