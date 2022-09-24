import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { errorField } from '../../../graphql/errorField';
import { IAuthContext } from '../auth/findCurrentUser';
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
    ...errorField,
  },
  mutateAndGetPayload: async ({ ...payload }, ctx: IAuthContext) => {
    if (!ctx.user) {
      return {
        error: 'Unauthorized',
      };
    }

    await UserModel.updateOne({ _id: ctx.user.id }, { ...payload });
    const user = await UserModel.findById(ctx.user.id);

    return { user };
  },
});
