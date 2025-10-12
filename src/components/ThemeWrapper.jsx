import React from "react";
import HeroDark from "./HeroDark";
import HeroLight from "./HeroLight";
import { useTheme } from "../context/ThemeContext";

export default function ThemeWrapper() {
  const { darkMode } = useTheme();

  return (
    <div className="relative min-h-screen transition duration-500 bg-white dark:bg-transparent">
      {/* Hero Sesuai Tema */}
      {darkMode ? <HeroDark /> : <HeroLight />}
    </div>
  );
}
