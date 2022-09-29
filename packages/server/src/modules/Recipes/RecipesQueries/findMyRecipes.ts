import { GraphQLFieldConfig } from 'graphql';
import { connectionArgs, connectionFromArray } from 'graphql-relay';
import { IAuthContext } from '../../User/auth/findCurrentUser';
import { RecipesModel } from '../recipesModel';
import { RecipesConnection } from '../recipesType';

export const findMyRecipes: GraphQLFieldConfig<any, any, any> = {
  type: RecipesConnection,
  args: connectionArgs,
  resolve: async (_, args, ctx: IAuthContext) => {
    if (!ctx.user) {
      return {
        error: 'Unauthorized',
      };
    }
    const recipes = await RecipesModel.find({ userId: ctx.user.id }).sort({
      createdAt: 'desc',
    });

    return connectionFromArray(recipes, args);
  },
};
