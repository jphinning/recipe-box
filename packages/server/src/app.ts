import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import logger from "koa-logger";
import routes from "./routes/healthCheck";

import {
  shouldRenderGraphiQL,
  renderGraphiQL,
  getGraphQLParameters,
  processRequest,
  sendResult,
} from "graphql-helix";
import { schema } from "./schema/schema";

export const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(logger());
app.use(routes.routes());

app.use(async (ctx) => {
  // Create a generic Request object that can be consumed by Graphql Helix's API
  const request = {
    body: ctx.body,
    headers: ctx.headers,
    method: ctx.method,
    query: ctx.query,
  };

  // Determine whether we should render GraphiQL instead of returning an API response
  if (shouldRenderGraphiQL(request)) {
    ctx.body = renderGraphiQL();
  } else {
    // Extract the Graphql parameters from the request
    const { operationName, query, variables } = getGraphQLParameters(request);

    // Validate and execute the query
    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema,
    });

    sendResult(result, ctx.res);
  }
});
