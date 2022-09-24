import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';
import { errorField } from '../../../graphql/errorField';
import { IAuthContext } from '../../User/auth/findCurrentUser';
import { RecipesModel } from '../recipesModel';
import { RecipesType } from '../recipesType';

export const updateRecipe = mutationWithClientMutationId({
  name: 'updateRecipe',
  inputFields: {
    globalId: { type: GraphQLID },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Recipe title',
    },
    ingredients: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      description: 'Recipe ingredients',
    },
    instructions: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      description: 'Recipe instructions',
    },
  },
  outputFields: {
    recipe: {
      type: RecipesType,
      resolve: (response) => response.recipe,
    },
    ...errorField,
  },
  mutateAndGetPayload: async ({ globalId, ...args }, ctx: IAuthContext) => {
    if (!ctx.user) {
      return {
        error: 'Unauthorized',
      };
    }

    const { id } = fromGlobalId(globalId);

    await RecipesModel.updateOne({ _id: id }, { ...args });

    const recipe = await RecipesModel.findById(id);
    return { recipe };
  },
});
