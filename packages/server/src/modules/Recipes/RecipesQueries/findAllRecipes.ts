import { GraphQLFieldConfig } from 'graphql';
import { connectionArgs, connectionFromArray } from 'graphql-relay';
import { IAuthContext } from '../../User/auth/findCurrentUser';
import { RecipesModel } from '../recipesModel';
import { RecipesConnection } from '../recipesType';

export const findAllRecipes: GraphQLFieldConfig<any, any, any> = {
  type: RecipesConnection,
  args: connectionArgs,
  resolve: async (_, args, ctx: IAuthContext) => {
    const recipes = await RecipesModel.find({}).sort({ updatedAt: 'desc' });

    return connectionFromArray(recipes, args);
  },
};
