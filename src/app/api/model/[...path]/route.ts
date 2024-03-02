import { enhance } from "@zenstackhq/runtime";
import { NextRequestHandler } from "@zenstackhq/server/next";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

// create an enhanced Prisma client with user context
async function getPrisma() {
  const session = await getServerAuthSession();
  return enhance(db, { user: session?.user });
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
