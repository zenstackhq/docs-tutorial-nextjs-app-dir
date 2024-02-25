"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  async function onSignout() {
    await signOut({ redirect: false });
    router.push("/signin");
  }

  if (status === "loading" || !session?.user) {
    return null;
  } else {
    return (
      <div className="flex gap-4">
        <h3 className="text-lg">Welcome back, {session.user?.email}</h3>
        <button className="text-gray-300 underline" onClick={onSignout}>
          Signout
        </button>
      </div>
    );
  }
};

export default Welcome;
