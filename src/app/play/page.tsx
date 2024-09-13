"use client";

import { type NextPage } from "next";
import { signOut } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <main className="h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container mx-auto h-full rounded-lg border px-4">
        {/* ai chat window with input at bottom */}

        <div className="flex h-full flex-col">
          <div className="grow overflow-y-auto rounded-lg bg-gray-800">
            <div className="">
              <div className="p-4">
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
                <div className="mb-4 rounded-lg bg-gray-700 p-4">
                  <p className="text-sm">Hello, how can I help you?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-600 p-2"
              placeholder="Ask me anything..."
            />
          </div>
        </div>

        {/* <h1 className="text-5xl font-extrabold">ask me anything...</h1> */}
        {/* <SignOutButton /> */}
      </div>
    </main>
  );
};

export default Home;

const SignOutButton = () => {
  return (
    <button
      className="rounded border border-white p-2 text-lg text-white"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign out
    </button>
  );
};
