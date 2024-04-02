import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import { env } from "~/env";

const createPrismaClient = () => {
  const pool = new Pool({ connectionString: env.DATABASE_URL });
  const adapter = new PrismaNeon(pool);
  const prisma = new PrismaClient({ adapter, log: ["error", "warn", "info"] });
  return prisma;
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
