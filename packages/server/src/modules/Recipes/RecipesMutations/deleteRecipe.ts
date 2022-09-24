import { GraphQLID, GraphQLString } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';
import { errorField } from '../../../graphql/errorField';
import { IAuthContext } from '../../User/auth/findCurrentUser';
import { RecipesModel } from '../recipesModel';

export const deleteRecipe = mutationWithClientMutationId({
  name: 'deleteRecipe',
  inputFields: {
    globalId: { type: GraphQLID },
  },
  outputFields: {
    deletedOutput: {
      type: GraphQLString,
      resolve: (response) => response.deletedCount,
    },
    ...errorField,
  },
  mutateAndGetPayload: async ({ globalId }, ctx: IAuthContext) => {
    if (!ctx.user) {
      return {
        error: 'Unauthorized',
      };
    }

    const { id } = fromGlobalId(globalId);

    return await RecipesModel.deleteOne({ _id: id });
  },
});
