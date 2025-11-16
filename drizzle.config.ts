import { defineConfig } from "drizzle-kit";

import { env } from "@/env/server";

export default defineConfig({
  dialect: "postgresql",
  // 表结构定义路径 按照该路径获取表结构定义
  schema: "./src/db/schema/index.ts",
  // 迁移文件输出路径
  out: "./src/db/migrations",
  // pg库实际连接信息
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  //   指定迁移配置表所在的schema名以及表名
  migrations: {
    table: "my-migrations-table", // `__drizzle_migrations` by default
    schema: "next-hono-mb", // used in PostgreSQL only, `drizzle` by default
  },
});
