import { withPresets } from "@zenstackhq/runtime";
import { NextRequestHandler } from "@zenstackhq/server/next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../server/auth";
import { prisma } from "../../../../server/db";

async function getPrisma() {
  const session = await getServerSession(authOptions);
  // create a wrapper of Prisma client that enforces access policy,
  // data validation, and @password, @omit behaviors
  return withPresets(prisma, { user: session?.user }, { logPrismaQuery: true });
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};
