import { enhance } from "@zenstackhq/runtime";
import { NextRequestHandler } from "@zenstackhq/server/next";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

// create an enhanced Prisma client with user context
async function getPrisma() {
  const session = await auth();
  return enhance(
    db,
    {
      user: session?.user?.id ? { id: session.user.id } : undefined,
    },
    { transactionMaxWait: 10000, transactionTimeout: 10000 },
  );
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};

export const runtime = "edge";
