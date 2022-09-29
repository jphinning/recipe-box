import { Context } from 'koa';
import { JwtPayload, verify } from 'jsonwebtoken';

interface ITokenPayload {
  id: string;
  email: string;
}

export interface IAuthContext extends Context {
  user: ITokenPayload | null;
}

export async function findCurrentUser(ctx: Context) {
  const { authorization } = ctx.headers;

  if (!authorization) return null;

  const accessToken = authorization.replace('Bearer', '').trim();

  try {
    const { id, email, exp } = verify(
      accessToken,
      process.env.JWT_SECRET!,
    ) as JwtPayload & ITokenPayload;

    if (Date.now() >= exp! * 1000) {
      return null;
    }

    return { id, email };
  } catch {
    return null;
  }
}
