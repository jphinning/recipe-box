import { GraphQLID, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { IAuthContext } from '../auth/findCurrentUser';
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
  mutateAndGetPayload: async (_, ctx: IAuthContext) => {
    if (!ctx.user) {
      return {
        error: 'Unauthorized',
      };
    }

    return await UserModel.deleteOne({ _id: ctx.user.id });
  },
});
