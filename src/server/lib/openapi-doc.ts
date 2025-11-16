import { Scalar } from "@scalar/hono-api-reference";

import PackageInfo from "@/../package.json";

import { HonoOpenApi } from "./type";

export function configurationOpenApi(app: HonoOpenApi) {
  app.doc31("/docs", {
    openapi: "3.1.0",
    info: { version: PackageInfo.version, title: "Api Document" },
  });

  app.get(
    "/scalar",
    Scalar({
      // 对应到doc31的路径上 就可以与doc进行整合
      url: "docs",
      layout: "modern",
      theme: "mars",
      defaultHttpClient: {
        targetKey: "js",
        clientKey: "axios",
      },
    })
  );
}
