import { createRoute, z } from "@hono/zod-openapi";

import * as HttpStatusCode from "@/server/constants/http-status-code";

import { createRouter } from "../lib/create-app";

// 构建路由的Hono app对象不需要not-found之类的中间件的所以不需要createApp(),createRouter()足矣
const route = createRouter().openapi(
  createRoute({
    method: "get",
    path: "/",
    tags: ["index"],
    responses: {
      [HttpStatusCode.OK]: {
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
        description: "API的根目录",
      },
    },
  }),
  (ctx) => {
    return ctx.json({ message: "API首页" }, HttpStatusCode.OK);
  }
);

export default route;
