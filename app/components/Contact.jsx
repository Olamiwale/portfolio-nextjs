import Image from "next/image";
import Link from "next/link";
import React from "react";

import Form from "./Form";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import InfoIcon from "./InfoIcon";

export default function Contact({ title, Icon }) {
  return (
    <div id="contact" className="p-8 pt-[80px]">
      <p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold">
        Contact
      </p>
      <h2 className="py-4 text-xl font-semibold">Get In Touch</h2>
      <div className="w-[93%] m-auto md:grid grid-cols-2 gap-10 items-center justify-center">
        {/* left*/}
        <div className="p-4 md:p-8 bg-gray-200 rounded-lg shadow-gray-400 shadow-xl h-[600px]">
          <Image
            className="rounded-xl m-auto"
            width={300}
            height={30}
            src="/about.jpg"
            alt="/"
          />
          <div>
            <h2 className="py-4 font-bold text-2xl">Paul Ola</h2>
            <p>Front-End Developer</p>
            <p className="py-2">
              I am available for freelance or full-time positions. Contact me
              and let&apos;s talk.
            </p>
          </div>

          <div>
            <p className="uppercase pt-8 font-semibold text-center">
              Connect With Me
            </p>

            <div className="flex justify-evenly py-8">
              <a
                href="https://github.com/Olamiwale"
                target="_blank"
                rel="noreferrer"
              >
                <InfoIcon title="Github" Icon={<FaGithub size={20} />} />
              </a>

              <a
                href="https://www.linkedin.com/in/paul-olawale-9236b51a3/"
                target="_blank"
                rel="noreferrer"
              >
                <InfoIcon
                  title="LinkedinIn"
                  Icon={<FaLinkedinIn size={20} />}
                />
              </a>

              <a
                href="https://www.twitter.com/paulolawalee"
                target="_blank"
                rel="noreferrer"
              >
                <InfoIcon title="Twitter" Icon={<FaTwitter size={20} />} />
              </a>
              <InfoIcon
                title="Resume"
                Icon={<BsFillPersonLinesFill size={20} />}
              />
            </div>
          </div>
        </div>

        <div 
           className="flex justify-center m-auto w-full mt-16 md:mt-0 p-4 bg-gray-300 rounded-lg shadow-gray-400 shadow-xl h-[600px]">
            {/*right */}
          <Form />
        </div>
      </div>

      <div className="p-16">
        <Link href="#home">
          <HiOutlineChevronDoubleUp
            className="bg-gray-400 m-auto rounded-full p-3 w-16 h-16  text-[#5651e5] cursor-pointer "
            size={30}
          />
        </Link>
      </div>
    </div>
  );
}
