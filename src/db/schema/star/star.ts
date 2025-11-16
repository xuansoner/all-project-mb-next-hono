import { sql } from "drizzle-orm";
import {
  boolean,
  numeric,
  pgSchema,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

const mySchema = pgSchema("next-hono-mb");

const star = mySchema.table("stars", {
  id: serial(),
  name: varchar("name", { length: 100 }).notNull(),
  age: numeric(),
  sex: boolean(),
  createAt: timestamp("create_time").default(sql`now()`),
  updateAt: timestamp("update_time").default(sql`now()`),
});

export const selectStarSchema = createSelectSchema(star);
export const createStarSchema = createInsertSchema(star, {
  // 设置name不为空字符串
  name: (s) => s.min(1).max(100),
})
  .required({ age: true, sex: true })
  // 输入时需要忽略的字段
  .omit({
    id: true,
    createAt: true,
    updateAt: true,
  });

export const updateStarSchema = createInsertSchema(star).partial();

export default star;
