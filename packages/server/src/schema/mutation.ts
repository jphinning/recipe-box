import { GraphQLObjectType } from 'graphql';
import { recipeMutations } from '../modules/Recipes/RecipesMutations/recipesMutations';
import { userMutations } from '../modules/User/UserMutations/userMutations';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'RootMutationType',
  fields: {
    ...userMutations,
    ...recipeMutations,
  },
});
