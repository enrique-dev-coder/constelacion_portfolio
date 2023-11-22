import React from "react";
import Image from "next/image";
import { InstaIcon, LinkIcon } from "./Icons";
import KiddenLogo from "../../public/assets/KIDDEN.webp";
import KiddenPic from "../../public/assets/projects/Kidden.png";
import KiddenInsta from "../../public/assets/projects/kiddenInsta.jpg";
import { motion } from "framer-motion";
// changed img name
const WorkCardKidden = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-white max-w-[840px] my-10 mx-auto md:w-[80%] flex flex-col"
    >
      <div className="w-full">
        <Image
          src={KiddenPic}
          alt="the dutch way instagram"
          className="w-full h-full"
        />
      </div>
      <div className="flex">
        <div className=" w-1/2 px-4 py-1 flex flex-col justify-around">
          {/*title*/}
          <div className="flex flex-col my-2 py-1 items-center justify-center border-b  border-black">
            <Image
              src={KiddenLogo}
              alt=""
              width={80}
              className="  bg-blueStrong rounded-full p-2"
            />
            <h2 className=" uppercase tracking-widest font-bold text-2xl">
              Kidden
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
        <div className="w-1/2">
          <Image
            src={KiddenInsta}
            alt="the dutch way instagram"
            className="w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCardKidden;
