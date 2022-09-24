import { GraphQLObjectType, GraphQLString } from 'graphql';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  globalIdField,
} from 'graphql-relay';
import { nodeInterface } from '../../graphql/nodeInterface';
import { RecipesModel } from '../Recipes/recipesModel';
import { RecipesConnection } from '../Recipes/recipesType';
import { IUser } from './userModel';

export const UserType: GraphQLObjectType<IUser> = new GraphQLObjectType<IUser>({
  name: 'User',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    fullName: { type: GraphQLString, description: 'The name of the user' },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    recipes: {
      type: RecipesConnection,
      description: 'All user recipes',
      args: connectionArgs,
      resolve: async (user, args) => {
        const userRecipes = await RecipesModel.find({ userId: user._id });

        return connectionFromArray([...userRecipes], args);
      },
    },
  }),
});

export const { connectionType: UserConnection, edgeType: UserEdge } =
  connectionDefinitions({
    nodeType: UserType,
  });
