import Quotes from "@/components/Quotes/Quotes";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-svh bg-mpurple-50 w-full gap-y-5 text-center px-5 pb-32">
      <h1 className="text-4xl font-bold leading-snug text-mpurple-300">
        Happy Birthday Pudan ❤️
      </h1>
      <h2 className="text-2xl">Wish you all the best...</h2>

      <Quotes />
    </main>
  );
};

export default Home;
