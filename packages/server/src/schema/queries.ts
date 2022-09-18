import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import {
  globalIdField,
  connectionDefinitions,
  connectionFromArray,
  connectionArgs,
} from "graphql-relay";
import { nodeField, nodeInterface, nodesField } from "./nodeInterface";
import { users } from "../entities/User/utils";

export const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: "User",
  description: "User",
  fields: () => ({
    id: globalIdField("User"),
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ firstName }) => firstName,
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ lastName }) => lastName,
    },
  }),
  interfaces: () => [nodeInterface],
});

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});

export const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all... queries",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    users: {
      type: new GraphQLNonNull(UserConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: (_, args) => connectionFromArray(users, args),
    },
  }),
});
