import React from "react";
import { TiAdjustBrightness } from "react-icons/ti";

export default function Header({ filters, onFilterChange }) {
  return (
    <header className="w-full h-[15%] bg-indigo-900 rounded-t-[inherit] border-b-2 border-gray-300 flex items-center justify-between p-6">
      <button className="text-[2rem] text-gray-100">
        <TiAdjustBrightness />
      </button>
      <ul className="flex items-center justify-center">
        {filters.map((item, key) => (
          <li key={key}>
            <button
              className="m-4 text-gray-100 font-bold text-[1em]"
              onClick={() => onFilterChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
