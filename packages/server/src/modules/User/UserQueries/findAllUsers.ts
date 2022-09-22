import { GraphQLFieldConfig } from 'graphql';
import { connectionArgs, connectionFromArray } from 'graphql-relay';
import { UserModel } from '../userModel';
import { UserConnection } from '../userType';

export const findAllUsers: GraphQLFieldConfig<any, any, any> = {
  type: UserConnection,
  args: connectionArgs,
  resolve: async (_, args) => {
    const users = await UserModel.find({});

    return connectionFromArray(users, args);
  },
};
