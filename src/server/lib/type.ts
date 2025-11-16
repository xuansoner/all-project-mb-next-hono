import type { z } from "@hono/zod-openapi";
import { OpenAPIHono, RouteConfig, RouteHandler } from "@hono/zod-openapi";
import { PinoLogger } from "hono-pino";

// 自定义类型 告知hono 日志使用的是pino  设置泛型后使用pino时会有提类型提示
export type AppBindings = {
  Variables: {
    logger: PinoLogger;
  };
};

// 自定义类型 创建Hono应用对象的时候绑定AppBindings 即和pino日志框架绑定
export type HonoOpenApi = OpenAPIHono<AppBindings>;

// 自定义类型 创建路由处理函数对象的时候绑定AppBindings 即和pino日志框架绑定 同时限制当前处理函数是对应的哪个路由对象
export type AppRouteHandler<R extends RouteConfig> = RouteHandler<
  R,
  AppBindings
>;

// 为error-schema 模板创建的类型
export type ZodSchema =
  | z.ZodUnion
  | z.AnyZodObject
  | z.ZodArray<z.AnyZodObject>;
export type ZodIssue = z.ZodIssue;
