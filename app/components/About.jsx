import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="pt-[80px">
      <div className="p-8">
        <div className="md:grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <p className="font-bold text-3xl">About</p>
            <h2 className="py-4 font-semibold text-xl">Who I Am?</h2>
            <p className="md:text-xl">
              I'm a full stack and blockchain developer with more than 8
              years of experience. I specialize in front-end and back-end
              development, working with React.js, Next.js, Vue.js, HTML5, CSS3,
              TailwindCSS, Node.js, Solidity I've successfully completed various
              types of projects in the fields of web2 and web3 industries.
              Client satisfaction is my top priority, and I pride myself on
              delivering high-quality solutions that meet their unique
              requirements.
            </p>

            <button className="custom-btn">
            <Link href="/#projects">Check out some of my latest projects</Link>

            </button>
          </div>

          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              src="/about.jpg"
              width={300}
              height={30}
              alt="About-Image"
              className="shadow-xl rounded-md py-4 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
