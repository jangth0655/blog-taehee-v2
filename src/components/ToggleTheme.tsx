"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      setTheme("dark");
    }
  }, [setTheme, isMounted]);

  const toggleDarkMode = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      onClick={toggleDarkMode}
      className="absolute flex items-center right-0 cursor-pointer"
    >
      {theme === "light" ? (
        <div>
          <HiMoon className="text-2xl" />
        </div>
      ) : (
        <div className="text-white">
          <HiSun className="text-2xl" />
        </div>
      )}
    </div>
  );
}
