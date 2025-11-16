import { pinoLogger } from "hono-pino";
import pino from "pino";
import { env } from "process";

export default function pinoLog() {
  return pinoLogger({
    pino: pino({
      //  在配置文件中设置日志级别
      level: env.LOG_LEVEL,
    }),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}
