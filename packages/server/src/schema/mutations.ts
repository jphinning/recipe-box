import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { users } from "../entities/User/utils";

const UserCreate = mutationWithClientMutationId({
  name: "UserCreate",
  inputFields: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ firstName, lastName }) => {
    const newUser = { firstName, lastName };
    users.push(newUser);
    return {
      message: "Success",
      error: null,
    };
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "MutationType",
  fields: () => ({
    UserCreate,
  }),
});
