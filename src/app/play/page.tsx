"use client";

import { type NextPage } from "next";
import { signOut } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
        <h1 className="text-5xl font-extrabold">ask me anything...</h1>
      </div>
      <SignOutButton />
    </main>
  );
};

export default Home;

const SignOutButton = () => {
  return (
    <button
      className="rounded border border-white p-2 text-lg"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign out
    </button>
  );
};
