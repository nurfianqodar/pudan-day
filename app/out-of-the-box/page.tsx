import React, { useRef } from "react";
import Image from "next/image";
import pudanImage from "@/public/pudan.jpg";
import pudanImage2 from "@/public/pudan2.jpg";

const OutOfTheBoxPage = () => {
  return (
    <main className="px-5 pt-20 pb-32 flex flex-col items-center justify-center bg-mpurple-200">
      <h1 className="text-4xl mb-7 text-center text-mpurple-50">Hehehe...</h1>
      <div className="flex flex-col items-center justify-center gap-y-6">
        <Image
          className="w-full max-w-md"
          src={pudanImage}
          alt="gambar bocil"
        />
        <Image
          className="w-full max-w-md"
          src={pudanImage2}
          alt="gambar bocil"
        />
        <audio
          className="w-full max-w-md"
          src="/audio/mang-adeng.mp3"
          autoPlay
        />
      </div>
    </main>
  );
};

export default OutOfTheBoxPage;
