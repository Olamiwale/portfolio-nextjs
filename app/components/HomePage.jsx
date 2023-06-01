import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function HomePage() {
  return (
    <nav>
        <div>
      <div className="hidden md:flex justify-evenly items-center px-16 py-4 bg-gray-500  ">
        <div className="uppercase font-bold">paul olawale</div>
        <ul className="flex justify-between ">
          <li className="p-4">Home </li>
          <li className="p-4">about</li>
          <li className="p-4">skills</li>
          <li className="p-4">product</li>
          <li className="p-4">contact</li>
        </ul>
      </div>

      <div className="mt-20 flex flex-col justify-center items-center bg-red-400">
        <p className="uppercase"> let's build together</p>
        <p>
          <span>Hi, I'm Ola</span>
          <span>A Front-End Web Developer</span>
        </p>
        <p>
          I'm a front-end developer specializing in building and designing
          exceptional digital experience. Currently im focussed on building
          responsive front-web application while learning back-end technologies
        </p>
      </div>

      <div className="">
        <FaGithub />
        <FaLinkedinIn />
        <BsFillPersonLinesFill />
        <AiOutlineMail />
      </div>
      </div>
    </nav>
  );
}
