import { graphql } from 'react-relay';

export const removeRecipeMutation = graphql`
  mutation RemoveRecipeMutation(
    $input: deleteRecipeInput!
    $connections: [ID!]!
  ) {
    deleteRecipe(input: $input) {
      recipeId @deleteEdge(connections: $connections)
      error
    }
  }
`;
