"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const SigninSignup = () => {
  const { data: session, status } = useSession();

  if (status === "loading" || session?.user) {
    return null;
  } else {
    return (
      <div className="flex gap-4 text-2xl">
        <Link href="/signin" className="rounded-lg border px-4 py-2">
          Signin
        </Link>
        <Link href="/signup" className="rounded-lg border px-4 py-2">
          Signup
        </Link>
      </div>
    );
  }
};

export default SigninSignup;
