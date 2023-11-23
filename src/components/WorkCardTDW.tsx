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
}: WorkCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${bgColor} rounded-md shadow-sm shadow-slate-100 max-w-[1000px] my-10 p-3 mx-auto md:w-[80%] flex flex-col`}
    >
      {/*title*/}
      <div className="flex items-center   mt-2 mb-4 justify-center border-b  border-black sm:flex-col sm:mt-0">
        <Image src={logo} alt="" width={100} />
        <h2 className=" uppercase tracking-widest font-bold text-2xl">
          {title}
        </h2>
      </div>
      <div className="grid  grid-cols-8 gap-4">
        <div className=" col-span-3 sm:col-span-8">
          <div className=" mx-auto">
            <Image src={celImg} alt="" className="w-full h-full sm:p-2" />
          </div>
        </div>

        <div className="col-span-5 flex flex-col sm:col-span-8">
          <Image src={pcImg} alt="" className="w-full  sm:hidden " />
          <div className="w-full flex order-2 ">
            <div className="  px-4 py-1 flex flex-col justify-around">
              {/*features*/}
              <ul className=" list-disc px-4 py-1 text-lg">
                {features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {/*insta*/}
              <a href={instaLink} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-2 my-2">
                  <InstaIcon className=" fill-black" width={25} />
                  <p className=" text-lg font-semibold">@{instaName}</p>
                </div>
              </a>
              {/*web*/}
              <a href={webLink} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-2 my-2">
                  <LinkIcon className=" fill-black" width={30} />
                  <p className=" text-lg font-semibold  underline underline-offset-1">
                    {webLink}
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

export default WorkCard;
