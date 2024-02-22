import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectProps({ title, url, img }) {
  return (
    <div className="shadow-xl shadow-gray-400 rounded-md space-x-4">
      <Link href={url}>
        <div className="flex justify-center p-4  items-center group">
          <Image
            className="rounded-xl group-hover:opacity-10 h-[200px]"
            src={img}
            alt="/"
            width={500}
          />

          <div className="absolute text-white justify-center items-center flex flex-col gap-4 opacity-0 group-hover:opacity-100">
            <p className="font-bold text-xl text-red-500">{title}</p>
            <p className="bg-gray-600 p-2 px-4 rounded-md cursor-pointer text-red-500">
              More
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
