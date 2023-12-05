import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { InstaIcon, LinkIcon } from './Icons';
import { motion } from 'framer-motion';

interface WorkCardProps {
  title: string;
  instaLink: string;
  instaName: string;
  webLink: string;
  bgColor: string;
  logo: StaticImageData | string;
  celImg: StaticImageData | string;
  pcImg: StaticImageData | string;
  features: Array<string>;
  cellPhoneImgRight: Boolean;
}

const WorkCard = ({
  title,
  logo,
  celImg,
  pcImg,
  instaLink,
  instaName,
  webLink,
  features,
  bgColor,
  cellPhoneImgRight = false,
}: WorkCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={` rounded-md max-w-[1000px] my-10 p-3 mx-auto md:w-[80%] flex flex-col`}
    >
      {/*title*/}
      <div
        className={` flex items-center   mt-2 mb-6 justify-center   sm:flex-col sm:mt-0`}
      >
        <h2 className=" uppercase tracking-widest font-bold  text-7xl">
          {title}
        </h2>
      </div>
      {/*content*/}
      <div className={`grid  grid-cols-8  gap-8`}>
        <div
          className={`col-span-3 sm:col-span-8   rounded-3xl shadow-md p-4 bg-gradient-to-t  from-orange-400  to-orange-300 ${
            cellPhoneImgRight && 'order-2'
          } `}
        >
          <div className=" mx-auto">
            <Image src={celImg} alt="" className="w-full h-full sm:p-2" />
          </div>
        </div>

        <div className="col-span-5 flex flex-col justify-between sm:col-span-8">
          <div
            className={`shadow-md bg-gradient-to-l  from-orange-400  to-orange-300 rounded-3xl flex  justify-center items-center p-4`}
          >
            <Image src={pcImg} alt="" className="w-full  sm:hidden " />
          </div>
          <div className="w-full flex order-2 h-full">
            <div className="  flex flex-col justify-between">
              <div className="h-full flex items-center">
                {/*features*/}
                <ul className=" list-disc px-8 rounded-3xl  font-medium shadow-md py-3  text-xl bg-orange-100">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              {/*links container*/}
              <div className="flex items-center  justify-between ">
                {/*insta*/}
                <a href={instaLink} target="_blank" rel="noopener noreferrer">
                  <div
                    className="flex items-center gap-2  bg-gradient-to-r  from-orange-200  to-orange-300  shadow-md   rounded-3xl p-4
                  hover:from-orange-300 hover:to-orange-200 transition-all duration-500
                  "
                  >
                    <InstaIcon className=" fill-black" width={25} />
                    <p className=" text-xl font-semibold">@{instaName}</p>
                  </div>
                </a>
                {/*web*/}
                <a href={webLink} target="_blank" rel="noopener noreferrer">
                  <div
                    className="flex items-center gap-2  bg-gradient-to-r  from-orange-200  to-orange-300  shadow-md   rounded-3xl p-4
                  hover:from-orange-300 hover:to-orange-200 transition-all duration-500"
                  >
                    <LinkIcon className=" fill-black" width={30} />
                    <p className=" text-xl font-semibold  underline underline-offset-1">
                      {webLink}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
