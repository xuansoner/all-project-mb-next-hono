// import { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { env } from "@/env/server";
// const authConfig: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: env.GOOGLE_CLIENT_ID,
//       clientSecret: env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
// };
// export default authConfig;
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import db from "@/db";
import { accounts, sessions, users } from "@/db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
  }),
});
