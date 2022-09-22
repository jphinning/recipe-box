import { GraphQLObjectType } from 'graphql';
import { userMutations } from '../modules/User/UserMutations/userMutations';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'RootMutationType',
  fields: {
    ...userMutations,
  },
});
