import React from 'react';
import Image from 'next/image';
import { InstaIcon, LinkIcon } from './Icons';
import TDWlogo from '../../public/assets/tdw.png';
import TDWPC from '../../public/assets/projects/TDW_PC.png';
import TDWcel from '../../public/assets/projects/TWD_cel.png';
import { motion } from 'framer-motion';

const WorkCardTDW = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-orange-100  rounded-md shadow-sm shadow-slate-100 max-w-[1000px] my-10 p-3 mx-auto md:w-[80%] flex flex-col"
    >
      {/*title*/}
      <div className="flex items-center   mt-2 mb-4 justify-center border-b  border-black sm:flex-col sm:mt-0">
        <Image src={TDWlogo} alt="" width={100} />
        <h2 className=" uppercase tracking-widest font-bold text-2xl">
          The Dutch Way
        </h2>
      </div>
      <div className="grid  grid-cols-8 gap-4">
        <div className=" col-span-3 sm:col-span-8">
          <div className=" mx-auto">
            <Image src={TDWcel} alt="" className="w-full h-full sm:p-2" />
          </div>
        </div>

        <div className="col-span-5 flex flex-col sm:col-span-8">
          <Image src={TDWPC} alt="" className="w-full  sm:hidden " />
          <div className="w-full flex order-2 ">
            <div className="  px-4 py-1 flex flex-col justify-around">
              {/*features*/}
              <ul className=" list-disc px-4 py-1 text-lg">
                <li>Branding para profesor de cursos de holandés.</li>
                <li>
                  La cuenta de instagram aumento a más de 6,000 seguidores.
                </li>
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCardTDW;
