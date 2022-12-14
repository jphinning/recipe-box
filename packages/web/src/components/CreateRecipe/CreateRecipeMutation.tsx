import { graphql } from 'react-relay';

export const createRecipeMutation = graphql`
  mutation CreateRecipeMutation(
    $input: createRecipeInput!
    $connections: [ID!]!
  ) {
    createRecipe(input: $input) {
      recipe
        @prependNode(connections: $connections, edgeTypeName: "RecipesEdge") {
        ...RecipeCardFragment_recipes
      }
      error
    }
  }
`;
