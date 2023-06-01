import React from "react";

export default function InfoIcon({ title, Icon }) {
  return (
    <div className="group ">
      <div >
        <div className="flex flex-col justify-center items-center" >
          <div className="bg-gray-300 p-4 rounded-full shadow-xl hover:animate-bounce"> {Icon} </div>
          <p className="font-semibold opacity-0 group-hover:opacity-100">{title}</p>
        </div>
      </div>
    </div>
  );
}
