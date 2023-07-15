import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import InfoIcon from "./InfoIcon";

export default function Contact({ title, Icon }) {
  return (
    <div id="contact" className="p-8 pt-[80px]">
      
      <p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold">Contact</p>
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
          <h2 className="py-4 font-bold text-2xl">Paul Olawale</h2>
          <p>Front-End Developer</p>
          <p className="py-2">    
            I am available for freelance or full-time positions. Contact me and
            let&apos;s talk.</p>
        </div>

        <div>
          <p className="uppercase pt-8 font-semibold text-center">Connect With Me</p>

          <div className="flex justify-evenly py-8">
          <a
              href="https://github.com/Olamiwale"
              target="_blank"
              rel="noreferrer"
            >
              <InfoIcon title="Github" Icon={<FaGithub size={25} />} />
            </a>
            <a
              href="https://www.linkedin.com/in/paul-olawale-9236b51a3/"
              target="_blank"
              rel="noreferrer"
            >
              <InfoIcon title="LinkedinIn" Icon={<FaLinkedinIn size={25} />} />
            </a>
          <InfoIcon title="Email" Icon={<AiOutlineMail size={15} />} />
          <a
              href="https://www.twitter.com/paulolawalee"
              target="_blank"
              rel="noreferrer"
            >
              <InfoIcon title="Twitter" Icon={<FaTwitter size={25} />} />
            </a>
          <InfoIcon title="Resume" Icon={<BsFillPersonLinesFill size={15} />} /> 
          </div>

          
        </div>
      </div>


<div className="mt-16 md:mt-0 p-4 bg-gray-300 rounded-lg shadow-gray-400 shadow-xl h-[600px]">
         {/*right */}
        <form>
          <div className="grid ">

        

          <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Name</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300"  type="text" name="name"/>  
          </div>
          <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Phone</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300"  type="number" name="phone"/>  
          </div>
          <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Email</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300"  type="email" name="email"/>  
          </div>
          <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Subject</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300"  type="text" name="subject"/>  
          </div>
              
          <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10" name="message"></textarea>
          </div>
          

          <button className="w-full p-4 font-bold black mt-4 hover:scale-90">
            Send Message
          </button>
          </div>
          
        </form>
      </div>
      </div>

     <div className="p-16">
      <Link href='#home'>
      
      <HiOutlineChevronDoubleUp className="bg-gray-400 m-auto rounded-full p-3 w-16 h-16  text-[#5651e5] cursor-pointer " size={30} />
      </Link>
      </div> 
    </div>
  );
}
