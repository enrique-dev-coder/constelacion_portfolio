'use client';
import React from 'react';
import { ScrollWheelIcon } from './Icons';
import { motion } from 'framer-motion';
const ScrollInfo = () => {
  return (
    <motion.div
      className="w-[164px] h-[164px]  translate-y-10 bg-blueStrong z-10 rounded-full flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <p
        className="tracking-wide font-medium text-4xl text-purpleSoft
     "
      >
        Scroll
      </p>

      <ScrollWheelIcon className=" fill-purpleSoft mt-4 animate-bounce" />
    </motion.div>
  );
};

export default ScrollInfo;
