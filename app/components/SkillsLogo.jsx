import React from "react";
import Image from "next/image";

export default function SkillsLogo({ title, logo }) {
  return (
    <div className="flex justify-center">
      <div className="shadow-gray-300 shadow-xl m-5 grid grid-cols-2 justify-between p-8 w-[200px] items-center rounded-lg ">
        <Image src={logo} width={40} height={30} alt="/" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}
