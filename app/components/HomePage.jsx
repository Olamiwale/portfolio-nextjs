import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import InfoIcon from "./InfoIcon";
import Navbar from "./Navbar";

export default function HomePage({ title, Icon }) {
  return (
    <div
      id="#home"
      className="pt-[100px] pb-[10px] md:pb-[200px] scroll-smooth h-screen justify-center items-center flex"
    >
      <div>
        <Navbar />

        <div className="px-8 md:px-16 mt-[80px] flex flex-col justify-center items-center">
          <p className="uppercase"> let's build together</p>
          <p className="text-[40px] md:text-[50px] flex flex-col justify-center items-center font-bold p-4">
            <span>
              Hi, I'm <span className="orange_gradient">Paul </span>
            </span>
            <span className="text-center orange_gradient ">A Full stack Developer</span>
          </p>
          <p className="md:px-8 text-xl text-center lg:px-20">
            I'm a fullstack developer specializing in building and designing
            exceptional digital experience.
          </p>
        </div>

        <div className=" mt-20">
          <div className="flex justify-evenly items-center lg:w-[800px] m-auto ">
            <a
              href="https://github.com/Olamiwale"
              target="_blank"
              rel="noreferrer"
            >
              <InfoIcon title="Github" Icon={<FaGithub size={25} />} />
            </a>

            <InfoIcon
              title="Account"
              Icon={<BsFillPersonLinesFill size={25} />}
            />

            <a
              href="https://www.linkedin.com/in/paul-olawale-9236b51a3/"
              target="_blank"
              rel="noreferrer"
            >
              <InfoIcon title="LinkedinIn" Icon={<FaLinkedinIn size={25} />} />
            </a>

            <a
              href="https://www.twitter.com/paulolawalee"
              target="_blank"
              rel="noreferrer"
            >
              <InfoIcon title="Twitter" Icon={<FaTwitter size={25} />} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
