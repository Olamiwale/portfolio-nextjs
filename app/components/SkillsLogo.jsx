import React from "react";
import Image from "next/image";

export default function SkillsLogo({ title, logo }) {
  return (
    <div className="flex justify-center">
      <div 
      className="custom-skill">
        <Image src={logo} width={30} height={30} alt="/" />
        <h3 className="text-[10px] font-semibold ">{title}</h3>
      </div>
    </div>
  );
}
