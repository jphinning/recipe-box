import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import { UserModel } from '../modules/User/userModel';

export const { nodeInterface, nodeField, nodesField } = nodeDefinitions(
  async (globalId: string) => {
    const { id: userGlobalID, type } = fromGlobalId(globalId);

    if (type === 'User') return await UserModel.findById(userGlobalID);

    return null;
  },
  (obj) => {
    const objName = obj instanceof UserModel ? 'User' : undefined;

    return objName;
  },
);
