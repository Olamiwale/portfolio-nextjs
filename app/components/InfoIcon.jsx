import React from "react";

export default function InfoIcon({ title, Icon }) {
  return (
    <div className="group ">
      <div >
        <div className="flex flex-col justify-center items-center" >
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"> {Icon} </div>
          <p className="font-semibold opacity-0 group-hover:opacity-100">{title}</p>
        </div>
      </div>
    </div>
  );
}
