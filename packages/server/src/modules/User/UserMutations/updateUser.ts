import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';
import { UserModel } from '../userModel';
import { UserType } from '../userType';

export const updateUser = mutationWithClientMutationId({
  name: 'updateUser',
  inputFields: {
    globalId: { type: GraphQLID },
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
  mutateAndGetPayload: async ({ globalId, ...payload }) => {
    const { id } = fromGlobalId(globalId);

    await UserModel.updateOne({ _id: id }, { ...payload });
    const user = await UserModel.findById(id);

    return { user };
  },
});
