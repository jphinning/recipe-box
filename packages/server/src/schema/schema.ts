import { GraphQLSchema } from 'graphql';
import { mutation } from './mutation';
import { query } from './query';

export const schema = new GraphQLSchema({ query, mutation });
