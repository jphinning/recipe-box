import { GraphQLFieldConfig, GraphQLID } from 'graphql';
import { fromGlobalId } from 'graphql-relay';
import { UserModel } from '../userModel';
import { UserType } from '../userType';

export const findOneUser: GraphQLFieldConfig<any, any, any> = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve: async (_, args) => {
    const { id } = fromGlobalId(args.id);

    return await UserModel.findById(id);
  },
};
