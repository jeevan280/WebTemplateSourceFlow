'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import ImageSVG from '@/svg/image';

const Banner: FC = () => {
  const buttonStyle =
    'bg-yellow-400 px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-yellow-300';

  return (
    <section className="relative overflow-hidden bg-[#064EA4] py-12 md:py-16 lg:py-24">
      <div
        className="absolute top-0 left-0 z-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#F99D76] sm:h-100 sm:w-100"
        aria-hidden="true"
      />

      <div
        className="absolute right-0 bottom-0 z-0 h-32 w-32 translate-x-1/3 translate-y-1/3 transform rounded-full bg-[#FCDF69] sm:h-100 sm:w-100"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 text-white lg:order-1">
          <p className="mb-3 text-base md:text-lg">Software Recruitment Specialists</p>
          <h1 className="mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Elevate your career
          </h1>

          <div className="mt-8 flex w-full max-w-md overflow-hidden rounded-lg bg-white text-black shadow-lg">
            <input
              type="text"
              placeholder="e.g networking"
              className="flex-1 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FCDF69]"
              aria-label="Search job title or keyword"
            />
            <button className={buttonStyle}>Search jobs</button>
          </div>
        </div>

        <motion.div
          className="order-1 flex justify-center lg:order-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ImageSVG className="h-auto w-full max-w-xs sm:max-w-sm lg:max-w-md" />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
