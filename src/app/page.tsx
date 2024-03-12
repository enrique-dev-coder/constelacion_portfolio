"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SideMenu from "@/components/SideMenu";
import WorkCard from "@/components/WorkCardTDW";
import WorkCardKidden from "@/components/WorkCardKidden";
import WorkCardNaturaMty from "@/components/WorkCardNaturaMTY";
import ContactUsBanner from "@/components/ContactUsBanner";
// image imports
import TDWlogo from "../../public/assets/tdw.png";
import TDWcel from "../../public/assets/projects/TWD_cel.png";
import TDWPC from "../../public/assets/projects/TDW_PC.png";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden relative">
        <SideMenu />
        <motion.div>
          <section className=" mx-auto py-10 bg-[#fafaf9]  ">
            <div className="flex  justify-center">
              <h1
                className={`
                ${josefin.className}
                text-8xl font-medium mt-4  py-1   uppercase   
                gradient_title            
                inline-block text-transparent bg-clip-text
                md:text-6xl md:text-center sm:text-5xl  sm:mt-6
                `}
              >
                Casos de Éxito
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
                "Branding para profesor de cursos de holandés.",
                "La cuenta de instagram aumento a más de 6,000 seguidores.",
                "Diseño y desarrollo de página web, optimizada para dispositivos móviles.",
              ]}
              bgColor="bg-orange-400"
              cellPhoneImgRight={false}
            />
            <WorkCardKidden />
            <WorkCardNaturaMty />
          </section>
          <ContactUsBanner />
        </motion.div>
      </main>
    </>
  );
}
