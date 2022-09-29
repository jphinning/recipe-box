import { graphql } from 'react-relay';

export const editFormMutation = graphql`
  mutation EditFormMutation($input: updateRecipeInput!, $connections: [ID!]!) {
    updateRecipe(input: $input) {
      recipe
        @prependNode(connections: $connections, edgeTypeName: "RecipesEdge") {
        ...RecipeCardFragment_recipes
      }
      error
    }
  }
`;
