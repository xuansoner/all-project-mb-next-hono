import createApp from "./lib/create-app";
import { configurationOpenApi } from "./lib/openapi-doc";
import index from "./routes/index.route";
import star from "./routes/stars/stars.index";

const app = createApp();

configurationOpenApi(app);

// app.get("/", (c) => {
//   return c.text("hello hono.js");
// });

// app.get("/error", (c) => {
//   c.status(422);
//   // 此处打印日志使用的是pino  提示信息是AppBindings类型的功效
//   c.var.logger.info("出现错误");
//   throw new Error("出错了...");
// });
const routes = [index,star];

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
