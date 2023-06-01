"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import InfoIcon from "./InfoIcon";

export default function HomePage({ title, Icon }) {
  const [nav, setNav] = useState(false);
  return (
    <nav>
      <div>
        <div className="flex justify-between md:justify-evenly items-center px-16 py-4 bg-gray-300 shadow-lg">
          <div className="uppercase font-bold">paul olawale</div>
          <ul className="hidden md:flex justify-between uppercase ">
            <li className="p-4">Home </li>
            <li className="p-4">about</li>
            <li className="p-4">skills</li>
            <li className="p-4">product</li>
            <li className="p-4">contact</li>
          </ul>

          <div
            className="font-bold flex md:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>

        <div className="px-8 md:px-16 mt-[80px] flex flex-col justify-center items-center">
          <p className="uppercase"> let's build together</p>
          <p className="text-[40px] md:text-[50px] flex flex-col justify-center items-center font-bold p-4">
            <span>Hi, I'm Ola</span>
            <span className="text-center">A Front-End Web Developer</span>
          </p>
          <p className="md:px-8 text-xl text-center lg:px-20">
            I'm a front-end developer specializing in building and designing
            exceptional digital experience. Currently im focussed on building
            responsive front-web application while learning back-end technology
          </p>
        </div>

        <div className=" mt-20">
          <div className="flex justify-evenly items-center ">
            <InfoIcon title="Github" Icon={<FaGithub size={25} />} />
            <InfoIcon
              title="Account"
              Icon={<BsFillPersonLinesFill size={25} />}
            />
            <InfoIcon title="LinkedinIn" Icon={<FaLinkedinIn size={25} />} />
            <InfoIcon title="Mail" Icon={<AiOutlineMail size={25} />} />
            <InfoIcon title="Twitter" Icon={<FaTwitter size={25} />} />
          </div>
        </div>
      </div>
    </nav>
  );
}
