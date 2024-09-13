"use client";

import { type NextPage } from "next";
import { signOut } from "next-auth/react";
import { useChat } from "ai/react";

const conversation = [
  {
    id: 1,
    role: "ai",
    message: "Its over Anakin, I have the high ground.",
  },
  {
    id: 2,
    role: "user",
    message: "You underestimate my power!",
  },
  {
    id: 3,
    role: "ai",
    message: "Don't try it.",
  },
  {
    id: 4,
    role: "user",
    message: "You never knew my father.",
  },
  {
    id: 5,
    role: "ai",
    message: "I am your father.",
  },
];
const Page: NextPage = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] py-4">
      <div className="bg-base-content container mx-auto h-full rounded-lg border-2 border-gray-400">
        {/* ai chat window with input at bottom */}
        <div className="flex h-full flex-col rounded-lg ">
          <div className="p-4 text-end">
            <UserSettings />
          </div>
          <div className="grow overflow-y-auto">
            <div className="p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chat ${
                    message.role === "user" ? "chat-end" : "chat-start"
                  }`}
                >
                  <div className="chat-bubble">{message.content}</div>
                </div>
              ))}

              {/* {conversation.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat ${
                    chat.role === "ai" ? "chat-start" : "chat-end"
                  }`}
                >
                  <div className="chat-bubble">{chat.message}</div>
                </div>
              ))} */}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-4 p-4">
            <input
              className="w-full rounded-lg border border-gray-600 p-2"
              type="text"
              placeholder="Ask me something..."
              value={input}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary">
              send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;

const UserSettings = () => {
  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <div tabIndex={0} role="button" className="btn btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <button onClick={() => signOut({ callbackUrl: "/" })}>
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};
