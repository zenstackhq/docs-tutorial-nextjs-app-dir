import { type NextPage } from "next";
import SigninSignup from "../components/SigninSignup";
import Welcome from "../components/Welcome";
import Posts from "../components/Posts";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
        <h1 className="text-5xl font-extrabold">My Awesome Blog</h1>

        <div className="flex flex-col">
          <Welcome />
          <section className="mt-10">
            <Posts />
          </section>
          <SigninSignup />
        </div>
      </div>
    </main>
  );
};

export default Home;
