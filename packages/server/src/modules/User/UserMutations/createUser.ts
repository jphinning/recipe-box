import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { UserModel } from '../userModel';
import { UserType } from '../userType';

export const createUser = mutationWithClientMutationId({
  name: 'createUser',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User email',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User password',
    },
    fullName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User full name',
    },
  },
  outputFields: {
    user: {
      type: UserType,
      resolve: (response) => response.user,
    },
  },
  mutateAndGetPayload: async ({ ...payload }) => {
    const newUser = new UserModel({
      ...payload,
    });

    await newUser.save();

    return { user: newUser };
  },
});
