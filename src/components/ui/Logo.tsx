import React from "react";
import { Alegreya } from "next/font/google";
import { Alegreya_Sans } from "next/font/google";
import "./logo.css";
const alegreya = Alegreya({ subsets: ["latin"], weight: "800" });
const alegreya_sans = Alegreya_Sans({ subsets: ["latin"], weight: "800" });
const Logo = () => {
  return (
    <div
      className={`${alegreya.className} flex flex-row justify-center items-center text-slate-50 text-2xl`}
    >
      <span>
        <img src="./images/logo.png" alt="logo" width="40px" className="mr-2" />
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse">
        b
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse2">
        l
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse3">
        o
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse4">
        o
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse5">
        m
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse6">
        i
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse7">
        n
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse8">
        g
      </span>
      <span className="w-[8px]"></span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse9">
        b
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse10">
        r
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse11">
        a
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse12">
        n
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse13">
        d
      </span>
      <span className="text-purple-700 dark:text-slate-100 neon-text neon-text-pulse14">
        s
      </span>
    </div>
  );
};

export default Logo;
