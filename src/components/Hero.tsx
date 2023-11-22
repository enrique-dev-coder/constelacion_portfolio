"use client";
import React, { useEffect, useState } from "react";
import ConteslacionAnimatedTitle from "./ConteslacionAnimatedTitle";
import Circle from "../../public/assets/circle.svg";
import ImageRowSection from "./ImageRow";
import ScrollInfo from "./ScrollInfo";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import WorkCardTDW from "./WorkCardTDW";

const Hero = () => {
  const [topPosition1, setTopPosition1] = useState(100);
  const [topPosition2, setTopPosition2] = useState(200);
  const [topPosition3, setTopPosition3] = useState(300);
  const [topPosition4, setTopPosition4] = useState(400);
  const [topPosition5, setTopPosition5] = useState(500);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  const handleWheelSectionInit = (event: React.WheelEvent) => {
    const factor = 0.9;
    setTopPosition1((prevPosition) =>
      Math.min(100, Math.max(0, prevPosition - event.deltaY * factor))
    );
  };

  const handleWheelSection1 = (event: React.WheelEvent) => {
    const factor = 1.8;
    setTopPosition2((prevPosition) =>
      Math.min(200, Math.max(0, prevPosition - event.deltaY * factor))
    );
  };

  const handleWheelSectionFinal = (event: React.WheelEvent) => {
    const factor = 0.9;
    setTopPosition5((prevPosition) =>
      Math.min(100, Math.max(0, prevPosition - event.deltaY * factor))
    );
  };

  const handleWheelSection3 = (event: React.WheelEvent) => {
    const factor = 2.8;
    setTopPosition3((prevPosition) =>
      Math.min(300, Math.max(0, prevPosition - event.deltaY * factor))
    );
  };

  const handleWheelSection4 = (event: React.WheelEvent) => {
    const factor = 3.8;

    setTopPosition4((prevPosition) =>
      Math.min(400, Math.max(0, prevPosition - event.deltaY * factor))
    );
  };

  const handleWheelSection5 = (event: React.WheelEvent) => {
    const factor = 4.8;
    setTopPosition5((prevPosition) =>
      Math.min(500, Math.max(0, prevPosition - event.deltaY * factor))
    );
  };

  useEffect(() => {
    controls1.start({ top: `${topPosition1}%` });
  }, [controls1, topPosition1]);

  useEffect(() => {
    controls2.start({ top: `${topPosition2}%` });
  }, [controls2, topPosition2]);
  useEffect(() => {
    controls3.start({ top: `${topPosition3}%` });
  }, [controls3, topPosition3]);
  useEffect(() => {
    controls4.start({ top: `${topPosition4}%` });
    // Actualizar el estado isSection4AtTop
  }, [controls4, topPosition4]);
  useEffect(() => {
    controls5.start({ top: `${topPosition5}%` });
  }, [controls5, topPosition5]);

  return (
    <div className="w-screen h-screen scroll-smooth  overflow-hidden  relative">
      <section
        className="w-screen h-screen bg-purpleSoft flex flex-col items-center overflow-hidden justify-center relative"
        onWheel={(e) => handleWheelSectionInit(e)}
      >
        {/*Introduction with animation*/}
        <div className="z-10 relative">
          <Image alt="" src={Circle} className="bg-red absolute z-[5] -top-4" />
          <ConteslacionAnimatedTitle />
        </div>
        <ScrollInfo />
        <ImageRowSection />
        {/* Section 1 */}
        <motion.section
          initial={{ top: "100%" }}
          animate={controls1}
          onWheel={(e) => handleWheelSection1(e)}
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
          <div className=" overflow-y-auto w-full h-screen">
            <WorkCardTDW />
          </div>
        </motion.section>
      </section>
      {/* Sección 2 - animado */}
      <motion.section
        initial={{ top: "200%" }}
        animate={controls2}
        onWheel={handleWheelSection3}
        className="absolute left-0 right-0 bottom-0 w-screen h-screen  bg-purpleSoft z-30"
      ></motion.section>
      {/* Sección 3 - animado */}
      <motion.section
        initial={{ top: "300%" }}
        animate={controls3}
        onWheel={handleWheelSection4}
        className="absolute left-0 right-0 bottom-0 w-screen h-screen   bg-blueStrong z-40"
      >
        {/* Contenido de la segunda sección */}
      </motion.section>
      {/* Sección 4 - animado */}
      <motion.section
        initial={{ top: "400%" }}
        animate={controls4}
        onWheel={handleWheelSection5}
        className="absolute left-0 right-0 bottom-0 w-screen h-screen  bg-pinkBright z-50"
      >
        {/* Contenido de la segunda sección */}
      </motion.section>
      {/* Sección 5 - animado */}
      <motion.section
        initial={{ top: "500%" }}
        onWheel={handleWheelSectionFinal}
        animate={controls5}
        className="absolute left-0 right-0 bottom-0 w-screen h-screen   bg-purpleStrong z-[60]"
      >
        {/* Contenido de la segunda sección */}
      </motion.section>
    </div>
  );
};

export default Hero;
