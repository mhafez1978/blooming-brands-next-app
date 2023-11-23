"use client";
import React from "react";
import { motion } from "framer-motion";
import MyModal from "../objects/MyModal";

const Hero: React.FC = () => {
  return (
    <div className="w-[100vw] h-[40vh] border-2 border-emerald-900">
      <div className="container mx-auto border-2 border-black">
        <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 dark:shadow-2xl">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.9"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="pt-[8vh] w-1/2 h-[40vh] border-2 borer-black">
            <h1 className="text-sm text-violet-700 dark:text-slate-100">
              Web Design &amp; Online Marketing
            </h1>
            <h2 className="text-8xl pt-6 font-bold text-slate-900 dark:text-white sm:text-4xl">
              We help unleash your business potential online
            </h2>
            <p className="mt-6 text-lg leading-8 tracking-tight text-gray-700 dark:text-gray-300">
              Our data driven full stack web applications and our monthly online
              marketing plans we&apos;ll help you grow your business online.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <MyModal />
              <a
                href="#about"
                className="text-sm font-semibold leading-6 text-gray-700 dark:text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative top-0 bottom-0">
            <img
              className="absolute bottom-14 top-14 w-[43rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="./images/hero-image01.jpg"
              alt="New App Screenshot"
              width={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
