import { graphql } from 'react-relay';

export const signUpMutation = graphql`
  mutation SignUpMutation($input: createUserInput!) {
    createUser(input: $input) {
      user {
        email
        fullName
      }
      token
      error
    }
  }
`;
