import { enhance } from "@zenstackhq/runtime";
import { NextRequestHandler } from "@zenstackhq/server/next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../server/auth";
import { prisma } from "../../../../server/db";

async function getPrisma() {
  const session = await getServerSession(authOptions);
  // create a wrapper of Prisma client that enforces access policy,
  // data validation, and @password, @omit behaviors
  return enhance(prisma, { user: session?.user });
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
