import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { UserModel } from '../userModel';
import { UserType } from '../userType';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface ILoginPayload {
  email: string;
  password: string;
}

export const loginUser = mutationWithClientMutationId({
  name: 'loginUser',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User email',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User password',
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
  },
  mutateAndGetPayload: async ({ ...payload }: ILoginPayload) => {
    const { email, password } = payload;

    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error('Invalid email');
    }

    console.log(user.password);
    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
      expiresIn: '10h',
    });

    return { user, token };
  },
});
