import NextAuth from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  trustHost: true,
  secret: process.env.AUTH_SECRET || "default_development_secret_key_gameby_cplusplus",
});
