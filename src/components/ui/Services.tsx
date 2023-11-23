import React from "react";

const Services: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-sky-400 to-blue-800 dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-800">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-6xl text-white font-bold sm:text-4xl dark:text-gray-200">
              Our Services
            </h2>

            <p className="mt-4 text-md text-slate-100">
              Blooming Brands offers a comprehensive suite of services essential
              for every business, from web design and development to digital
              marketing. With a monthly tailored plans, we&apos;ll help your
              business bloom.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-gray-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-600 dark:bg-blue-600  dark:hover:bg-green-500 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 text-gray-300">
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-emerald-400 hover:ring-1 hover:ring-emerald-500 hover:text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3"></span>

              <h2 className="mt-2 font-bold">Web Design</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-emerald-400 hover:ring-1 hover:ring-emerald-500 hover:text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3"></span>

              <h2 className="mt-2 font-bold">E-Commerce</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-emerald-400 hover:ring-1 hover:ring-emerald-500 hover:text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3"></span>

              <h2 className="mt-2 font-bold">Branding</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-emerald-400 hover:ring-1 hover:ring-emerald-500 hover:text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3"></span>

              <h2 className="mt-2 font-bold">SEO</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-emerald-400 hover:ring-1 hover:ring-emerald-500 hover:text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3"></span>

              <h2 className="mt-2 font-bold">WordPress</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-emerald-400 hover:ring-1 hover:ring-emerald-500 hover:text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3"></span>

              <h2 className="mt-2 font-bold">Mobile Apps</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
