import { GraphQLObjectType } from 'graphql';
import { userQueries } from '../modules/User/UserQueries/userQueries';
import { nodeField, nodesField } from '../graphql/nodeInterface';
import { recipeQueries } from '../modules/Recipes/RecipesQueries/recipeQueries';

export const query = new GraphQLObjectType({
  name: 'Query',
  description: 'RootQueryType',
  fields: () => ({
    ...userQueries,
    ...recipeQueries,
    node: nodeField,
    nodes: nodesField,
  }),
});
