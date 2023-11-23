"use client";
import React from "react";
import MyAppPages from "../objects/AppPages";
import { Nunito } from "next/font/google";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";

import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "800"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["200", "400", "800"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "500"] });

const DesktopMenu = () => {
  return (
    <div>
      <ul className="w-[30vw] mx-auto flex flex-row gap-4">
        {MyAppPages.map((page) => (
          <li key={page.pageId}>
            <motion.a
              whileHover={{ scale: "120%" }}
              whileTap={{ scale: "120%" }}
              href={page.pageUrl}
              className={`${roboto.className} z-50 text-sm/[20px] font-medium text-zinc-900 hover:text-blue-600 dark:text-white dark:hover:border-b-2 dark:hover:border-white`}
            >
              {page.pageName}
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopMenu;
