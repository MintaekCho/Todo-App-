import { TiAdjustBrightness } from "react-icons/ti";
import { BsMoonFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="w-full h-[15%] bg-gray-400 dark:bg-slate-900 rounded-t-[inherit] border-b-2 border-gray-300 flex items-center justify-between p-6 ">
      <button className="text-[2rem] text-gray-100" onClick={toggleDarkMode}>
        {darkMode ? <BsMoonFill /> : <TiAdjustBrightness />}
      </button>
      <ul className="flex items-center justify-center">
        {filters.map((item, key) => (
          <li key={key}>
            <button
              className={
                filter !== item
                  ? "m-4 dark:text-[#f16203] font-bold text-[1em] opacity-60"
                  : 'm-4 dark:text-[#f16203] opacity-100 font-bold text-[1.1em] after:block after:content-[""]  after:border-[2px] after:border-red after:mt-1'
              }
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
