"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import DesktopMenu from "../menus/DesktopMenu";
import MobileMenu from "../menus/MobileMenu";
import { XIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "../utilities/toggleTheme";

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Header: React.FC = () => {
  const [menuOpenState, setMenuOpenState] = useState(false);
  const toggleMenu = () => {
    setMenuOpenState(!menuOpenState);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-[100vw] bg-[#AAD4FA]/90 text-black z-50 dark:bg-blue-800/80 dark:text-gray-100"
      >
        <div className="w-full px-8 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                  title="homepage-link"
                  href="/"
                  className="flex items-center py-4 px-2"
                >
                  <Logo />
                </motion.a>
              </div>
              {/* Primary Navbar items */}
              <div className="hidden md:flex items-center space-x-1">
                <DesktopMenu />
              </div>
            </div>
            {/* Mobile menu button */}
            {/* hide using md:hidden */}

            <div className="flex items-center">
              <div className="mr-4">
                <DarkModeToggle />
              </div>
              <motion.button
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
                title="menuToggle"
                onClick={() => toggleMenu()}
                className="outline-none mobile-menu-button mt-[-5px]"
              >
                <svg
                  className="w-6 h-6 text-black hover:text-purple-700 dark:text-slate-100 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 22 22"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpenState === true && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0"
            >
              <div
                className={`fixed w-[100vw] h-[100vh] top-0 bottom-0 left-0 right-0 bg-purple-700 text-white z-50`}
              >
                <div className="w-full">
                  <div className="px-2">
                    <div className="flex flex-col">
                      <div className="px-4 py-4 text-right">
                        <motion.button
                          animate={{
                            scale: [1, 2, 3, 2, 1],
                            rotate: [0, 30, 90, 180, 0],
                          }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          title="menuToggle"
                          onClick={() => toggleMenu()}
                          className="text-white"
                        >
                          <XIcon className="h-8 w-8" aria-hidden="true" />
                        </motion.button>
                      </div>
                      <div className="h-[85vh] flex justify-center items-center text-center">
                        <ul
                          className="flex flex-col justify-center items-center gap-4"
                          style={{ lineHeight: "0.85rem" }}
                        >
                          <MobileMenu />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {/* <div className="block h-[9vh]"></div> */}
    </>
  );
};

export default Header;
