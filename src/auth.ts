import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Adapter Prisma untuk simpan session & user ke database
  // Dinonaktifkan jika DB belum dikonfigurasi (fallback ke JWT)
  ...(process.env.DATABASE_URL && process.env.DATABASE_URL !== "your_database_url_here"
    ? { adapter: PrismaAdapter(prisma) }
    : {}),

  providers: [
    // GitHub OAuth — aktif jika env tersedia
    ...(process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET
      ? [
          GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
          }),
        ]
      : []),
  ],

  trustHost: true,
  secret: process.env.AUTH_SECRET || "default_development_secret_key_gameby_cplusplus",

  // Callback untuk menambahkan data extra ke session
  callbacks: {
    async session({ session, user, token }) {
      if (session.user) {
        // Tambahkan user ID ke session agar bisa digunakan di API routes
        session.user.id = user?.id ?? token?.sub ?? "";
      }
      return session;
    },
  },

  // Halaman custom (opsional — pakai default NextAuth jika tidak ada)
  pages: {
    // signIn: "/auth/signin",
  },
});
