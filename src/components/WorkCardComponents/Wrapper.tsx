import React from 'react';
import { motion } from 'framer-motion';
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={` rounded-md max-w-[1000px] my-10 p-3 mx-auto md:w-[80%]  flex flex-col sm:my-3 sm:p-0 sm:w-[90%]`}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
