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
            I'm a frontend developer, currently expanding my skills to include backend development. I specialize in crafting engaging user experiences using technologies such as React.js, Next.js, Vue.js, HTML5, CSS3, and TailwindCSS. Additionally, I have proficiency in backend technologies like Node.js and Solidity. Throughout my career, I've completed a diverse range of projects spanning both web2 and web3 industries. My primary focus is on client satisfaction, and I take pride in delivering high-quality solutions tailored to their specific needs..
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
