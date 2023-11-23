"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { InView } from "react-intersection-observer";

const ourProcess = [
  {
    id: 1,
    step: 1,
    title: "Plan",
    description:
      "We analyze your brand, customers, and market to create a clear plan to refine your brand message.",
  },
  {
    id: 2,
    step: 2,
    title: "Design",
    description:
      "We'll listen first then develop a custom solution that will help increase your user engagement.",
  },
  {
    id: 3,
    step: 3,
    title: "Refine",
    description:
      "We'll continue to manage your web presence and analyze collected usage data to ignite your brand.",
  },
];

const OurProcess: React.FC = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-6 dark:bg-gray-800 dark:text-gray-100"
      >
        <div className="pt-24 container mx-auto">
          <span className="block text-4xl font-black mb-4 text-center uppercase text-blue-500">
            What we do ?
          </span>
          <p className="block w-[80%] mx-auto text-md text-center text-zinc-700 dark:text-white">
            We build data driven and responsive websites and mobile apps
            essential in today&apos;s digital landscape for building a brand
            credibility, enhancing your customers experience, staying
            competitive, and driving business growth.
          </p>
          <h3 className="text-lg font-bold text-center dark:text-gray-50"></h3>
          <div className="grid gap-6 my-16 lg:grid-cols-3">
            {ourProcess.map((item, index) => (
              <InView key={item.id} triggerOnce={true}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    className="flex flex-col p-8 space-y-4 rounded-md bg-blue-700 dark:bg-gray-900"
                    initial={{ opacity: 0, y: "50vh" }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "50vh" }
                    }
                    transition={{
                      duration: 0.5,
                      delay: inView ? 0.3 * index : 0,
                    }}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full text-blue-600 bg-white dark:bg-blue-400 dark:text-white">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}.
                    </h3>
                    <p className="text-white">{item.description}.</p>
                  </motion.div>
                )}
              </InView>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default OurProcess;
