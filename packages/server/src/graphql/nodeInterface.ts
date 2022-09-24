import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import { RecipesModel } from '../modules/Recipes/recipesModel';
import { UserModel } from '../modules/User/userModel';

export const { nodeInterface, nodeField, nodesField } = nodeDefinitions(
  async (globalId: string) => {
    const { id: userGlobalID, type } = fromGlobalId(globalId);

    if (type === 'User') return await UserModel.findById(userGlobalID);
    if (type === 'Recipes') return await RecipesModel.findById(userGlobalID);

    return null;
  },
  (obj) => {
    if (obj instanceof UserModel) return 'User';
    if (obj instanceof RecipesModel) return 'Recipes';

    return undefined;
  },
);
