"use client";
import { once } from "events";
import MyModal from "../objects/MyModal";
import { motion } from "framer-motion";

const HeaderCta = () => {
  return (
    <header className="relative top-0 h-[100vh] bg-[url('/images/rocket-bg-without-rocket.png')] bg-cover bg-no-repeat">
      <motion.img
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4, delay: 0.5 }}
        viewport={{ once: true }}
        src="./images/rocket-white-cloud-layer.png"
        alt="rocket"
        className="absolute top-[3vh] left-0 right-0 object-cover w-full h-full z-40"
      />
      <motion.img
        initial={{ opacity: 0, top: -400 }}
        animate={{ opacity: 1, top: 220 }}
        transition={{ duration: 6, delay: 1 }}
        viewport={{ once: true }}
        src="./images/astronaut.png"
        alt="astronaut"
        className="absolute w-[100px] h-[100px] top-[10vh] left-[60vw] z-40"
      />
      <motion.img
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        viewport={{ once: true }}
        src="./images/astronaut.png"
        alt="astronaut"
        className="absolute w-[90px] h-[90px] top-[19vh] left-[70.5vw] z-40"
      />
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-24 pl-12 pb-20"
            >
              <h1 className="text-sm font-semibold text-violet-700 dark:text-zinc-900">
                Web Design &amp; Online Marketing
              </h1>
              <h2 className="text-4xl pt-4 font-black text-slate-900 dark:text-zinc-900">
                We help unleash your business potential online
              </h2>
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-700">
                Our data driven full stack web applications and our monthly
                online marketing plans we&apos;ll help you grow your business
                online.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-4 lg:justify-start">
                <MyModal />
                <a
                  href="#about"
                  className="text-sm font-semibold leading-6 text-gray-700 dark:text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCta;
