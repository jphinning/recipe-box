import { GraphQLFieldConfig, GraphQLID } from 'graphql';
import { fromGlobalId } from 'graphql-relay';
import { IAuthContext } from '../../User/auth/findCurrentUser';
import { RecipesModel } from '../recipesModel';
import { RecipesType } from '../recipesType';

export const findOneRecipe: GraphQLFieldConfig<any, any, any> = {
  type: RecipesType,
  args: { id: { type: GraphQLID } },
  resolve: async (_, args, ctx: IAuthContext) => {
    const { id } = fromGlobalId(args.id);

    return await RecipesModel.findById(id);
  },
};
