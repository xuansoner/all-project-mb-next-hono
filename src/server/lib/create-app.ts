import { OpenAPIHono } from "@hono/zod-openapi";

import OnError from "@/server/middleware/error";
import NotFound from "@/server/middleware/not-found";
import pinoLog from "@/server/middleware/pino-logger";

import defaultHook from "../openapi/default-hook";
import { AppBindings } from "./type";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    //   关闭严格模式: 开启严格模式 /api/wxy 可以成功 /api/wxy/ 会失败
    strict: false,
    //   如果路由响应不成功 则按照此模板返回
    defaultHook,
  });
}

export default function createApp() {
  const app = createRouter().basePath("/api");

  // 使用pino作为 hono.js框架的日志组件
  app.use(pinoLog());

  // 引入自定义NotFound模板
  app.notFound(NotFound);

  // 引入自定义error模板
  app.onError(OnError);

  return app;
}
