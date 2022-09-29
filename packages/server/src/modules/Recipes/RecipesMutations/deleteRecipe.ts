import { GraphQLID } from 'graphql';
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
    recipeId: {
      type: GraphQLID,
      resolve: (response) => response,
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
    const recipe = await RecipesModel.findById(id);

    if (!recipe) {
      return { error: 'No recipe was found' };
    }

    await RecipesModel.deleteOne({ _id: id });

    return globalId;
  },
});
