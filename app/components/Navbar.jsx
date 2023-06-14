"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      className={
        !shadow
          ? "fixed top-0 left-0 w-full bg-[#ecf0f3]"
          : " fixed top-0 left-0 w-full bg-[#ecf0f3] shadow-xl"
      }
    >
      <div className="flex justify-between md:justify-evenly items-center px-16 py-4">
        <div className="uppercase font-bold p-3">paul olawale</div>

        <ul className="hidden md:flex justify-between uppercase font-bold ">
          <li className="p-4 hover:scale-105 active:text-red-600">
            <Link href="/#home">Home </Link>{" "}
          </li>
          <li className="p-4 hover:scale-105 active:text-red-600">
            <Link href="/#about">about</Link>{" "}
          </li>
          <li className="p-4 hover:scale-105 active:text-red-600">
            <Link href="/#skills">skills </Link>{" "}
          </li>
          <li className="p-4 hover:scale-105 active:text-red-600">
            <Link href="/#projects">projects </Link>{" "}
          </li>
          <li className="p-4 hover:scale-105 active:text-red-600">
            <Link href="/#contact">contact </Link>{" "}
          </li>
        </ul>

        <ul
          className={
            nav
              ? "uppercase fixed left-0 top-0 bg-black/80 w-[50%] h-full text-white flex flex-col justify-center items-center md:hidden"
              : "hidden"
          }
        >
          <Link
            onClick={() => setNav(false)}
            href="/#home"
            className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center cursor-pointer"
          >
            Home
          </Link>

          <Link
            onClick={() => setNav(false)}
            href="/#about"
            className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center cursor-pointer"
          >
            about
          </Link>

          <Link
            onClick={() => setNav(false)}
            href="/#skills"
            className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center cursor-pointer"
          >
            skills
          </Link>

          <Link
            onClick={() => setNav(false)}
            href="/#projects"
            className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center cursor-pointer"
          >
            projects
          </Link>

          <Link
            onClick={() => setNav(false)}
            href="/#contact"
            className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center cursor-pointer"
          >
            {" "}
            contact
          </Link>
        </ul>

        <div className="font-bold flex md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </nav>
  );
}
