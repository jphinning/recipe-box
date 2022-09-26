import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { UserModel } from '../userModel';
import { UserType } from '../userType';
import { genSalt, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorField } from '../../../graphql/errorField';

export const createUser = mutationWithClientMutationId({
  name: 'createUser',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User email',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User password',
    },
    fullName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User full name',
    },
  },
  outputFields: {
    user: {
      type: UserType,
      resolve: (response) => response.user,
    },
    token: {
      type: GraphQLString,
      resolve: (response) => response.token,
    },
    ...errorField,
  },
  mutateAndGetPayload: async ({ ...payload }) => {
    try {
      const { email, password } = payload;

      const emailAlreadyTaken = await UserModel.findOne({ email });

      if (emailAlreadyTaken) {
        return { error: 'User already exists' };
      }

      const salt = await genSalt();
      const hashPassword = await hash(password, salt);

      const newUser = new UserModel({
        ...payload,
        password: hashPassword,
      });

      const { id, fullName } = newUser;

      const token = jwt.sign({ id, email }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRATION,
      });

      await newUser.save();

      return {
        user: { id, email, fullName },
        token,
      };
    } catch {
      return { error: 'Server error' };
    }
  },
});
