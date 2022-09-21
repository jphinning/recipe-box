import { GraphQLObjectType } from 'graphql';
import { userQueries } from '../modules/User/UserQueries/userQueries';
import { nodeField, nodesField } from '../graphql/nodeInterface';

export const query = new GraphQLObjectType({
  name: 'Query',
  description: 'RootQueryType',
  fields: () => ({
    ...userQueries,
    node: nodeField,
    nodes: nodesField,
  }),
});
