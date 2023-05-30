import { withPresets, type DbClientContract } from "@zenstackhq/runtime";
import ApiHandler from "@zenstackhq/server/api/rpc";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../../server/auth";
import { prisma } from "../../../../server/db";

const apiHandler = ApiHandler();

async function getPrisma() {
  const session = await getServerSession(authOptions);
  // create a wrapper of Prisma client that enforces access policy,
  // data validation, and @password, @omit behaviors
  return withPresets(prisma, {
    user: session?.user,
  }) as unknown as DbClientContract;
}

type Context = { params: { path: string[] } };

// A shim for adapting the Next.js "app" route handler
const routeHandler = async (req: NextRequest, context: Context) => {
  const url = new URL(req.url);
  const query = Object.fromEntries(url.searchParams);
  let requestBody: unknown;
  if (req.body) {
    try {
      requestBody = await req.json();
    } catch {
      // noop
    }
  }

  const response = await apiHandler({
    prisma: await getPrisma(),
    method: req.method,
    path: context.params.path.join("/"),
    query,
    requestBody,
  });

  return NextResponse.json(JSON.stringify(response.body), {
    status: response.status,
  });
};

export {
  routeHandler as GET,
  routeHandler as POST,
  routeHandler as PUT,
  routeHandler as PATCH,
  routeHandler as DELETE,
};
