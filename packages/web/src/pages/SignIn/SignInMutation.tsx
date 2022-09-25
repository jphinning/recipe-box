import { graphql } from 'react-relay';

export const signInMutation = graphql`
  mutation SignInMutation($input: loginUserInput!) {
    loginUser(input: $input) {
      user {
        email
        fullName
      }
      token
      error
    }
  }
`;
