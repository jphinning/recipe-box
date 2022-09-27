import { graphql } from 'react-relay';

export const createRecipeMutation = graphql`
  mutation CreateRecipeMutation($input: createRecipeInput!) {
    createRecipe(input: $input) {
      recipe {
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
