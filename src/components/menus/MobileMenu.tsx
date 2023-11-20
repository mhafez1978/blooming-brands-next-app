"use client";
import React from "react";
import MyAppPages from "../objects/AppPages";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "800"] });

const MobileMenu = () => {
  return (
    <>
      {MyAppPages.map((page) => (
        <li key={page.pageId}>
          <a href={page.pageUrl} className={`${poppins.className} text-6xl`}>
            {page.pageName}
          </a>
        </li>
      ))}
    </>
  );
};

export default MobileMenu;
