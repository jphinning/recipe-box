import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { connectionDefinitions, globalIdField } from 'graphql-relay';
import { nodeInterface } from '../../graphql/nodeInterface';
import { UserModel } from '../User/userModel';
import { UserType } from '../User/userType';

export const RecipesType = new GraphQLObjectType({
  name: 'Recipes',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('Recipes'),
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    ingredients: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
    instructions: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    userId: {
      type: new GraphQLNonNull(UserType),
      resolve: async ({ userId }) => await UserModel.findById(userId),
    },
  }),
});

export const { connectionType: RecipesConnection, edgeType: RecipesEdge } =
  connectionDefinitions({
    nodeType: RecipesType,
  });
