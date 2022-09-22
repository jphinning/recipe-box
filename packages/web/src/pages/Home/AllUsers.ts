import { graphql } from 'react-relay';

export const AllUsers = graphql`
  query AllUsersQuery($first: Int) {
    findAllUsers(first: $first) {
      edges {
        node {
          id
          email
          password
          fullName
        }
      }
    }
  }
`;
