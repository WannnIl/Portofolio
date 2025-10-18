import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Materi from "../components/Materi";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ThemeWrapper from "../components/ThemeWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#08101a] dark:via-[#071428] dark:to-[#00030a] text-gray-800 dark:text-slate-200 font-mono transition-colors duration-500">
      <Header />
      <ThemeWrapper />
      <About />
      <Projects />
      <Materi />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
