"use client";

import { type NextPage } from "next";
import Link from "next/link";
import app from "~/app.config";

const RetroButton = () => {
  return (
    <button className="relative border-4 border-pink-500 bg-black px-8 py-4 font-mono text-xl font-bold uppercase tracking-widest text-white transition duration-300 hover:border-pink-300 hover:bg-pink-500 hover:text-black hover:shadow-[0_0_15px_5px_rgba(255,105,180,0.7)]">
      Start
    </button>
  );
};

const Hero = () => {
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white">
      <h1 className="mb-6 text-5xl font-bold md:text-6xl">
        Unlock the Secrets of Every Board Game
      </h1>

      <p className="mb-8 text-xl md:text-2xl">
        Your{" "}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text font-extrabold text-transparent">
          ultimate companion
        </span>{" "}
        for game rules, strategies, and setups.
      </p>
      <div className="flex space-x-4">
        <Link href={app.routes.play}>
          <RetroButton />
        </Link>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <main className="bg-animated relative min-h-screen overflow-hidden">
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
      <Hero />
    </main>
  );
};
export default Home;
