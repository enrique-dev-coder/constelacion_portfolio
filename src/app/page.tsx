'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import Hero from '@/components/Hero';
import MenuButton from '@/components/MenuButton';
import WorkCard from '@/components/WorkCardTDW';
import WorkCardKidden from '@/components/WorkCardKidden';
// image imports
import TDWlogo from '../../public/assets/tdw.png';
import TDWcel from '../../public/assets/projects/TWD_cel.png';
import TDWPC from '../../public/assets/projects/TDW_PC.png';

export default function Home() {
  // hook used for register the scrollY value
  const [topPosition, setTopPosition] = useState(100);
  const controls = useAnimation();

  const handleWheelSectionInit = (event: React.WheelEvent) => {
    const factor = 0.5;
    setTopPosition((prevPosition) =>
      Math.min(100, Math.max(0, prevPosition - event.deltaY * factor))
    );
  };

  useEffect(() => {
    controls.start({ top: `${topPosition}%` });
  }, [controls, topPosition]);

  return (
    <main
      className="overflow-x-hidden relative"
      onWheel={(e) => handleWheelSectionInit(e)}
    >
      <MenuButton />
      <Hero />
      <motion.div
        className="w-full bg-indigo-200 absolute z-30"
        initial={{ top: '100%' }}
        animate={controls}
      >
        <section className=" mx-auto py-10  ">
          <div className="flex  justify-center">
            <h1
              className="
             text-9xl font-medium my-8 py-1 border-y-2 tracking-widest uppercase  border-y-blueMain   
            bg-gradient-to-r   from-purple-800 to-fuchsia-900 
            inline-block text-transparent bg-clip-text
            md:text-6xl sm:text-5xl "
            >
              Nuestro{<br />} Trabajo
            </h1>
          </div>
          {/*work cards*/}
          <WorkCard
            title="The Dutch Way"
            logo={TDWlogo}
            celImg={TDWcel}
            pcImg={TDWPC}
            instaLink="https://thedutchways.com/"
            instaName="thedutch.way"
            webLink="https://thedutchways.com/"
            features={[
              'Branding para profesor de cursos de holandés.',
              'La cuenta de instagram aumento a más de 6,000 seguidores.',
              'Diseño y desarrollo de página web, optimizada para dispositivo mobiles.',
            ]}
            bgColor="bg-orange-400"
            cellPhoneImgRight={false}
          />
          <WorkCardKidden />
        </section>
      </motion.div>
    </main>
  );
}
