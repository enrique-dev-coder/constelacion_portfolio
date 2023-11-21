"use client";
import React, { useRef, useEffect, useState } from "react";
import ConteslacionAnimatedTitle from "./ConteslacionAnimatedTitle";
import Circle from "../../public/assets/circle.svg";
import ImageRowSection from "./ImageRow";
import ScrollInfo from "./ScrollInfo";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import WorkCard from "./WorkCard";

const Hero = () => {
  const [topPosition, setTopPosition] = useState(100);
  const controls = useAnimation();

  const handleWheel = (event: React.WheelEvent) => {
    const factor = 0.9;
    setTopPosition((prevPosition) =>
      Math.min(100, Math.max(0, prevPosition - event.deltaY * factor))
    );
  };

  useEffect(() => {
    controls.start({ top: `${topPosition}%` });
  }, [controls, topPosition]);

  return (
    <section
      className="w-screen h-screen bg-purpleSoft flex flex-col items-center overflow-hidden justify-center relative"
      onWheel={handleWheel}
    >
      {/*titulo animado*/}
      <div className="z-10 relative">
        <Image alt="" src={Circle} className="bg-red absolute z-[5] -top-4" />
        <ConteslacionAnimatedTitle />
      </div>
      <ScrollInfo />
      <ImageRowSection />
      {/* Fondo animado */}
      <motion.div
        initial={{ top: "100%" }}
        animate={controls}
        className="absolute left-0 right-0 bottom-0 w-screen h-screen shadow-lg   bg-blueMain z-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-7xl font-medium text-center uppercase text-pink-100 tracking-widest mt-4"
        >
          Nuestro Trabajo
        </motion.h1>
        <WorkCard />
      </motion.div>
    </section>
  );
};

export default Hero;
