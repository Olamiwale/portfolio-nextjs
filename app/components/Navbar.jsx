"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-10">
      <div className=" flex justify-between md:justify-evenly items-center px-16 py-4 shadow-lg">
        <div className="uppercase font-bold p-3">paul olawale</div>
        
        <ul className="hidden md:flex justify-between uppercase font-bold ">
          <li className="p-4 hover:scale-105 active:text-red-600"><Link href="/#home">Home </Link>  </li>
          <li className="p-4 hover:scale-105 active:text-red-600"><Link href="/#about">about</Link>  </li>
          <li className="p-4 hover:scale-105 active:text-red-600"><Link href="/#skills">skills </Link> </li>
          <li className="p-4 hover:scale-105 active:text-red-600"><Link href="/#product">product </Link> </li>
          <li className="p-4 hover:scale-105 active:text-red-600"><Link href="/#contact">contact </Link> </li>
        </ul>

        <ul
          className={
            nav
              ? "uppercase fixed left-0 top-0 bg-black/80 w-[50%] h-full text-white flex flex-col justify-center items-center md:hidden": "hidden"} >
       
          <li onClick={() => setNav(false)} className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center shadow-lg cursor-pointer">
            <Link href='/#home'>Home </Link>
          </li>
          <li onClick={() => setNav(false)} className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center shadow-lg cursor-pointer">
           <Link href='/#about'>about
           </Link> 
          </li>
          <li onClick={() => setNav(false)} className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center shadow-lg cursor-pointer">
           <Link href='/#skills'>skills
           </Link> 
          </li>
          <li onClick={() => setNav(false)} className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center shadow-lg cursor-pointer">
            <Link href='/#project'>projects
            </Link>
          </li>
          <li onClick={() => setNav(false)} className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center shadow-lg cursor-pointer">
           
            <Link href='/#contact'> contact</Link>
          </li>
        </ul>

        <div className="font-bold flex md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </nav>
  );
}
