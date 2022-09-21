import { GraphQLID, GraphQLString } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';
import { UserModel } from '../userModel';

export const deleteUser = mutationWithClientMutationId({
  name: 'deleteUser',
  inputFields: {
    globalId: { type: GraphQLID },
  },
  outputFields: {
    deletedOutput: {
      type: GraphQLString,
      resolve: (response) => response.deletedCount,
    },
  },
  mutateAndGetPayload: async ({ globalId }) => {
    const { id } = fromGlobalId(globalId);

    return await UserModel.deleteOne({ _id: id });
  },
});
