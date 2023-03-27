import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

// 브라우저 재접속 혹은 새로고침시 마지막 브라우저 상태가 다크모드였는지 확인


export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      setDarkMode((darkmode) => !darkMode);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode((darkmode) => !darkMode);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode((darkmode) => !darkMode);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
