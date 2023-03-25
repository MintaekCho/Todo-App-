import React from "react";
import { useState } from "react";
import { TiAdjustBrightness } from "react-icons/ti";

export default function Nav() {

  return (
    <div className="w-full h-[15%] bg-indigo-900 rounded-t-[inherit] border-b-2 border-gray-300 flex items-center justify-between p-6">
      <button className='text-[2rem] text-gray-100'>
        <TiAdjustBrightness />
      </button>
      <div className="flex items-center justify-center">
        <button className="m-4 text-gray-100 font-bold text-[1em]">All</button>
        <button className="m-4 text-gray-100 font-bold text-[1em]">Active</button>
        <button className="m-4 text-gray-100 font-bold text-[1em]">Completed</button>
      </div>
    </div>
  );
}
