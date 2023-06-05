
import React from "react";
import { AiOutlineMail} from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import InfoIcon from "./InfoIcon";
import Navbar from "./Navbar";

export default function HomePage({ title, Icon }) {

  return (
    <div id='#home'>
      <div className="mb-20">
        <Navbar />

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
          <div className="flex justify-evenly items-center lg:w-[800px] m-auto ">
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
      
    </div>
  );
}
