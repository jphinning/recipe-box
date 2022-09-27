import { graphql } from 'react-relay';

export const createRecipeMutation = graphql`
  mutation CreateRecipeMutation(
    $input: createRecipeInput!
    $connections: [ID!]!
  ) {
    createRecipe(input: $input) {
      recipe
        @prependNode(connections: $connections, edgeTypeName: "RecipesEdge") {
        id
        title
        description
        ingredients
        instructions
        userId {
          fullName
          id
          email
        }
      }
      error
    }
  }
`;
