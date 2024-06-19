"use client";
import React, { useState } from "react";
import { FiGift, FiHome, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";
import { BiCake } from "react-icons/bi";
import { BsBoxArrowUp } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

interface MenuItem {
  name: string;
  icon: IconType;
  href: string;
}
const menuItem: MenuItem[] = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Happy Birthday", icon: BiCake, href: "/hbd" },
  { name: "In the Box", icon: FiGift, href: "/in-the-box" },
  { name: "Out of the Box", icon: BsBoxArrowUp, href: "/out-of-the-box" },
  { name: "How I Made This?", icon: SiGithub, href: "/" },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen
            ? "bg-mpurple-50 text-red-500"
            : "bg-mpurple-300 text-mpurple-50 animate-bounce"
        } fixed flex items-center gap-x-3 bottom-10 z-20 right-10 py-3 px-4 rounded-full transition duration-300 ease-in-out`}
      >
        {isOpen ? "Close" : "Explore Me!"}
        {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 fixed w-full bg-mpurple-300/70 h-svh backdrop-blur-sm top-0 left-0 right-0"
          >
            <motion.ul
              className="flex flex-wrap items-center justify-evenly my-16 gap-5"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {menuItem.map((item, index) => {
                return (
                  <motion.li variants={child}>
                    <Link
                      href={item.href}
                      key={index}
                      className="bg-mpurple-50 py-4 px-6 rounded-2xl flex flex-col items-center justify-center gap-1"
                    >
                      <item.icon className="text-6xl text-mpurple-300" />
                      <h3 className="font-semibold">{item.name}</h3>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
