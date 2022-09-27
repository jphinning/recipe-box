import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { errorField } from '../../../graphql/errorField';
import { IAuthContext } from '../../User/auth/findCurrentUser';
import { RecipesModel } from '../recipesModel';
import { RecipesType } from '../recipesType';

export interface IRecipeArgs {
  title: string;
  ingredients: string;
  instructions: string;
}

export const createRecipe = mutationWithClientMutationId({
  name: 'createRecipe',
  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Recipe title',
    },
    description: {
      type: GraphQLString,
      description: 'Recipe description',
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
  mutateAndGetPayload: async ({ ...args }: IRecipeArgs, ctx: IAuthContext) => {
    if (!ctx.user) {
      return { error: 'Unauthorized', recipe: null };
    }

    const newRecipe = new RecipesModel({
      ...args,
      userId: ctx.user.id,
    });

    await newRecipe.save();

    return { recipe: newRecipe };
  },
});
