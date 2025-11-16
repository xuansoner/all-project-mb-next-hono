import { pgSchema, text, timestamp, uuid } from "drizzle-orm/pg-core";

import users from "./user";

const mySchema = pgSchema("next-hono-mb");

const sessions = mySchema.table("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export default sessions;
