"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={isInView ? { opacity: 0, y: 100 } : { opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={
        isInView ? { duration: 0.5, delay: 0.3 } : { duration: 0.5, delay: 0.3 }
      }
      className="bg-white text-black dark:bg-gray-900 dark:text-slate-100"
    >
      <div className="max-w-6xl mx-auto gap-2 py-32 flex flex-row">
        <div className="w-1/3 rounded-md overflow-hidden pl-32">
          <motion.img
            ref={ref}
            initial={{ opacity: 0, x: "-100vw" }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100vw" }
            }
            transition={
              isInView
                ? { duration: 1, delay: 0.3 }
                : { duration: 1, delay: 0.3 }
            }
            src="https://webpedel.dk/wp-content/uploads/2021/03/Group.svg"
            alt=""
            width={500}
          />
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: "100vw" }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "100vw" }}
          transition={
            isInView ? { duration: 1, delay: 0.3 } : { duration: 1, delay: 0.3 }
          }
          className="w-2/3"
        >
          <div className="flex flex-col px-8 pt-10">
            <p className="text-4xl text-slate-900 dark:text-slate-100 font-semibold leading-1 -mb-2">
              Monthly Markerting Plans Focused On Helping Your Business Bloom.
            </p>
          </div>
          <div className="flex flex-col py-4 px-8 text-slate-500 dark:text-slate-300 text-sm tracking-tighter">
            <p className="mb-2">
              Blooming Brands delivers sleek web design and robust development
              solutions, crafted to empower your business&apos;s online
              presence. We blend affordability with custom expertise, ensuring
              every digital interaction is impactful and client-focused.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="w-[50%] bg-blue-600 text-white rounded-md py-4 px-8 mt-4 hover:bg-green-600"
            >
              Let&apos;s Talk
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
