'use client';
import React from 'react';
import kidden from '../../public/assets/KIDDEN.webp';
import RTF from '../../public/assets/RTF.png';
import TDW from '../../public/assets/tdw.png';
import TUCSA from '../../public/assets/tucsa.png';
import SOLE from '../../public/assets/sole.png';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

export type ImageMap = {
  [key: string]: {
    id: number;
    name: string;
    img: string | StaticImageData;
    className?: string;
  };
};

const MotionImage = motion(Image);

export type ImageKeys = 'kidden' | 'RTF' | 'TDW' | 'TUCSA' | 'SOLE';

const Data: ImageMap = {
  kidden: {
    id: 1,
    name: 'kidden',
    img: kidden,
    className: 'bg-pink-950',
  },
  RTF: {
    id: 2,
    name: 'Road to fit',
    img: RTF,
    className: 'bg-black rounded-full',
  },
  TDW: {
    id: 3,
    name: 'The Dutch Way',
    img: TDW,
    className: 'bg-orange-400 rounded-full ',
  },
  TUCSA: {
    id: 4,
    name: 'TUCSA',
    img: TUCSA,
    className: 'bg-blue-950  rounded-md ',
  },
  SOLE: { id: 5, name: 'SOLE', img: SOLE, className: 'bg-white rounded-2xl ' },
};

const ImageRow = ({ images }: { images: ImageKeys[] }) => {
  const ImageItem = ({
    img,
    alt,
    className,
  }: {
    img: string | StaticImageData;
    alt: string;
    className?: string;
  }) => {
    return (
      <div className=" my-12 w-[200px] mx-12   flex justify-center items-center ">
        <MotionImage
          initial={{ opacity: 0, y: '50%' }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          alt={alt}
          className={`${className} w-[80%]  opacity-80 `}
          src={img}
        />
      </div>
    );
  };

  return (
    <div className="flex  whitespace-nowrap">
      {images.map((item) => (
        <ImageItem
          className={Data[item].className}
          key={Data[item].id}
          img={Data[item].img}
          alt={Data[item].name}
        />
      ))}
    </div>
  );
};

export default ImageRow;
