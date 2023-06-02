'use client'
import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
    const [nav, setNav] = useState(false);
  return (
    <nav>
        <div className="flex justify-between md:justify-evenly items-center px-16 py-4 bg-gray-300 shadow-lg">
          <div className="uppercase font-bold">paul olawale</div>
          <ul className="hidden md:flex justify-between uppercase ">
            <li className="p-4">Home </li>
            <li className="p-4">about</li>
            <li className="p-4">skills</li>
            <li className="p-4">product</li>
            <li className="p-4">contact</li>
          </ul>
         
            <ul className={nav ? "uppercase fixed left-0 top-0 bg-black/80 w-[50%] h-full text-white flex flex-col justify-center items-center md:hidden":'hidden'}>
           
            <li className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center shadow-lg cursor-pointer">Home</li>
            <li className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center shadow-lg cursor-pointer">about</li>
            <li className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center shadow-lg cursor-pointer">skills</li>
            <li className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center shadow-lg cursor-pointer">product</li>
            <li className="p-5 font-bold m-3 bg-gray-400 rounded-full w-[50%] text-center shadow-lg cursor-pointer">contact</li>
          </ul>
       
          


          <div className="font-bold flex md:hidden" onClick={() => setNav(!nav)}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
    </nav>
  )
}
