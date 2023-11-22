import React from "react";
import Image from "next/image";
import { InstaIcon, LinkIcon } from "./Icons";
import TDWlogo from "../../public/assets/tdw.png";
import TDWinsta from "../../public/assets/projects/tdw_insta.jpg";
import { motion } from "framer-motion";

const WorkCardTDW = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-orange-100 max-w-[840px] my-10 mx-auto md:w-[80%] flex"
    >
      <div className=" w-1/2">
        <Image
          src={TDWinsta}
          alt="the dutch way instagram"
          className="w-full h-full"
        />
      </div>
      <div className=" w-1/2 px-4 py-1 flex flex-col justify-around">
        {/*title*/}
        <div className="flex items-center border-b  border-black">
          <Image src={TDWlogo} alt="" width={100} />
          <h2 className=" uppercase tracking-widest font-bold text-2xl">
            The Dutch Way
          </h2>
        </div>
        {/*features*/}
        <ul className=" list-disc px-4 py-1 text-lg">
          <li>Branding para profesor de cursos de holandés.</li>
          <li>La cuenta de instagram aumento a más de 6,000 seguidores.</li>
          <li>
            Diseño y desarrollo de página web, optimizada para dispositivo
            mobile.
          </li>
        </ul>
        {/*insta*/}
        <a
          href="https://www.instagram.com/thedutch.way/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2 my-2">
            <InstaIcon className=" fill-black" width={25} />
            <p className=" text-lg font-semibold">@thedutch.way</p>
          </div>
        </a>
        {/*web*/}
        <a
          href="https://thedutchways.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2 my-2">
            <LinkIcon className=" fill-black" width={30} />
            <p className=" text-lg font-semibold  underline underline-offset-1">
              https://thedutchways.com/
            </p>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default WorkCardTDW;
