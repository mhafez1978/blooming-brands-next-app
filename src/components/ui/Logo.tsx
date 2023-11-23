import React from "react";
import { Alegreya } from "next/font/google";
import { Alegreya_Sans } from "next/font/google";
import "./logo.css";

const alegreya = Alegreya({ subsets: ["latin"], weight: "800" });
const alegreya_sans = Alegreya_Sans({ subsets: ["latin"], weight: "800" });

const Logo: React.FC = () => {
  return (
    <div
      className={`${alegreya.className} flex flex-row justify-center items-center text-2xl text-blue-600 dark:text-white`}
    >
      <span>
        <img src="./images/logo.png" alt="logo" width="40px" className="mr-2" />
      </span>
      {/* "text-purple-700 dark:text-slate-100 neon-text neon-text-pulse2" */}
      <span className="">b</span>
      <span className="">l</span>
      <span className="">o</span>
      <span className="">o</span>
      <span className="">m</span>
      <span className="">i</span>
      <span className="">n</span>
      <span className="">g</span>
      <span className="w-[8px]"></span>
      <span className="">b</span>
      <span className="">r</span>
      <span className="">a</span>
      <span className="">n</span>
      <span className="">d</span>
      <span className="">s</span>
    </div>
  );
};

export default Logo;
