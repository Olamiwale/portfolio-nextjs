import React from "react";
import Image from "next/image";

export default function Form() {
  return (
    <form className="w-full">
      <div className="grid ">      

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Name</label>
          <input
            className="custom-input"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Phone</label>
          <input
            className="custom-input"
            type="number"
            name="phone"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="custom-input"
            type="email"
            name="email"
          />
        </div>
       

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows="5"
            name="message"
          ></textarea>
        </div>

        <button className="custom-btn">
          Send Message
        </button>
      </div>
    </form>
  );
}
