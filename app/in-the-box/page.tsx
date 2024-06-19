"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import goodVibesImage from "@/public/good-vibes.jpg";
import aotcImage from "@/public/buku-aotc.webp";
import snackImage from "@/public/snack.jpg";
import kertasImage from "@/public/kertas.jpg";
import bungaImage from "@/public/bunga.jpg";

import Image, { StaticImageData } from "next/image";

interface InTheBoxItem {
  name: string;
  src: StaticImageData;
  description: string;
}

const inTheBoxItems: InTheBoxItem[] = [
  {
    name: "Bunga Edelweis",
    src: bungaImage,
    description:
      "Meski tak seindah yang di gambar bunga ini melambangkan abadi dan sesuatu yang berharga. Aku harap kebahagiaan abadi selalu bersama pudan dan pudan selalu menjadi perempuan yang berharga dan terhormat.",
  },
  {
    name: "Buku: Good Vibes Good Live",
    src: goodVibesImage,
    description:
      "Kenapa ngasih buku ini? Buku ini judulnya good vibes good life. Jadi semoga kamu bisa terus memberikan vibes positif kepada lingkungan kamu dan selain itu juga bisa meliat semua sisi positif dari setiap kejadian yang kamu alami. Semoga pudan selalu bahagia yaa...",
  },
  {
    name: "Buku: The Art of Thinking Clearly",
    src: aotcImage,
    description:
      "Pudan suka debat sama hukum. Jadi semoga buku ini bisa improve pudan terus dalam penerapannya. Dan juga disamping itu pudan bisa terus meningkatkan keahlian dalam public speaking. Selain itu bukunya ringan.",
  },
  {
    name: "Some Snack",
    src: snackImage,
    description:
      "Buat ngemil aja, aku gak ngasih kue soalnya🥺 Maafin yaa pudan...",
  },
  {
    name: "Serpihan Kertas",
    src: kertasImage,
    description: "Ini biar keliatan penuh, soalnya kotaknya kegedean😭",
  },
];

const InTheBoxPage = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

  const selectedItem =
    selectedId !== undefined ? inTheBoxItems[parseInt(selectedId)] : null;

  return (
    <main className="px-10 pt-20 pb-32 flex flex-col items-center justify-center">
      <h1 className="mb-5 text-4xl text-center font-semibold">
        In The Box Items Detail
      </h1>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {inTheBoxItems.map((item, index) => (
          <motion.div
            key={index}
            layoutId={index.toString()}
            onClick={() => setSelectedId(index.toString())}
            className="cursor-pointer max-w-sm p-5 rounded-xl flex flex-col items-center justify-center bg-mpurple-50 gap-y-3"
          >
            <Image src={item.src} alt={item.name} />
            <motion.h2 className="text-center font-semibold text-xl">
              {item.name}
            </motion.h2>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              layoutId={selectedId}
              className="fixed top-0 left-0 w-full h-svh py-32 flex flex-col items-center justify-center bg-white bg-opacity-75 p-4 overflow-auto"
            >
              <motion.h5 className="text-2xl text-center bg-mpurple-50 p-5 font-semibold mb-5">
                {selectedItem.name}
              </motion.h5>
              <div className="p-5 bg-mpurple-50 max-h-72 overflow-scroll">
                <motion.p className="mb-5">{selectedItem.description}</motion.p>
              </div>

              <motion.button
                onClick={() => setSelectedId(undefined)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default InTheBoxPage;
