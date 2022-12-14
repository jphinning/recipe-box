import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import logger from 'koa-logger';
import routes from './routes/healthCheck';
import dotenv from 'dotenv';

import {
  shouldRenderGraphiQL,
  renderGraphiQL,
  getGraphQLParameters,
  processRequest,
  sendResult,
} from 'graphql-helix';
import { schema } from './schema/schema';
import {
  findCurrentUser,
  IAuthContext,
} from './modules/User/auth/findCurrentUser';

dotenv.config({ path: '../../.env' });

export const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(logger());
app.use(routes.routes());

app.use(async (ctx: IAuthContext) => {
  const user = await findCurrentUser(ctx);
  ctx.user = user;

  // Create a generic Request object that can be consumed by Graphql Helix's API
  const request = {
    body: ctx.request.body,
    headers: ctx.request.headers,
    method: ctx.request.method,
    query: ctx.request.query,
  };

  // Determine whether we should render GraphiQL instead of returning an API response
  if (shouldRenderGraphiQL(request)) {
    ctx.body = renderGraphiQL();

    return;
  }
  // Extract the Graphql parameters from the request
  const { operationName, query, variables } = getGraphQLParameters(request);

  // Validate and execute the query
  const result = await processRequest({
    operationName,
    query,
    variables,
    request,
    schema,
    contextFactory: () => {
      return {
        ...ctx.req.headers,
        user: ctx.user,
      };
    },
  });

  sendResult(result, ctx.res);
});
