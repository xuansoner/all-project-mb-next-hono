/* eslint-disable n/no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

console.log(process.env.DATABASE_URL);

// 在配置文件中定义的DATABASE_URL配置
// 值为postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
// 默认直接取 无法${}获取到变量值 需要expand()进行展开
// 动态导入并处理环境变量  但在nextjs不可用
// expand(config());

export const env = createEnv({
  server: {
    // DATABASE_URL: z.string().url(),
    // OPEN_AI_API_KEY: z.string().min(1),
    NODE_ENV: z.enum(["development", "production"]),
    // DATABASE_URL: z.string(),
    // github认证oauth相关相关配置
    AUTH_GITHUB_ID: z.string(),
    AUTH_GITHUB_SECRET: z.string(),

    DATABASE_URL: z.url(),
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number(),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),

    LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
  },

  // 在控制台只显示错误信息 不显示异常堆栈
  onValidationError: (error) => {
    console.error("❌ Invalid environment variables:");
    console.error(error);
    process.exit(1);
  },
  // 当配置文件中仅定义但没有赋值 也会报错
  emptyStringAsUndefined: true,
  // 指定运行时从哪加载配置信息

  experimental__runtimeEnv: process.env,
});

// zod 4版本废弃了infer推断 换为output
// type myEnv = z.output<typeof env>;

console.log(env);
