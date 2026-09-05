import { PrismaClient } from "@prisma/client";

// Mencegah error build di lingkungan CI/CD (seperti Vercel) jika DATABASE_URL belum diset
const isBuildStep = process.env.CI || process.env.VERCEL || !process.env.DATABASE_URL;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Fallback URL sementara hanya untuk proses instansiasi (tidak akan dipakai untuk query betulan jika DB kosong)
const dummyUrl = "postgresql://dummy:dummy@localhost:5432/dummy";

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL || dummyUrl,
      },
    },
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

