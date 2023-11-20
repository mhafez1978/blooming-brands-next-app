"use client";
import React from "react";
import MyAppPages from "../objects/AppPages";
import { Nunito } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "800"] });

const DesktopMenu = () => {
  return (
    <div>
      <ul className="w-[30vw] mx-auto flex flex-row gap-4 text-slate-50">
        {MyAppPages.map((page) => (
          <li key={page.pageId}>
            <a
              href={page.pageUrl}
              className={`${poppins.className} text-sm/[18px] font-medium text-zinc-700 hover:text-purple-800 uppercase dark:text-slate-100`}
            >
              {page.pageName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopMenu;
