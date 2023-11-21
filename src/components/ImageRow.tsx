"use client";
import React, { useState, useEffect } from "react";
import kidden from "../../public/assets/KIDDEN.webp";
import RTF from "../../public/assets/RTF.png";
import TDW from "../../public/assets/tdw.png";
import TUCSA from "../../public/assets/tucsa.png";
import SOLE from "../../public/assets/sole.png";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export type ImageMap = {
  [key: string]: {
    id: number;
    name: string;
    img: string | StaticImageData;
    className?: string;
  };
};

export type ImageKeys = "kidden" | "RTF" | "TDW" | "TUCSA" | "SOLE";

const Data: ImageMap = {
  kidden: {
    id: 1,
    name: "kidden",
    img: kidden,
    className: "bg-pink-950",
  },
  RTF: {
    id: 2,
    name: "Road to fit",
    img: RTF,
    className: "bg-black rounded-full",
  },
  TDW: {
    id: 3,
    name: "The Dutch Way",
    img: TDW,
    className: "bg-orange-400 rounded-full ",
  },
  TUCSA: {
    id: 4,
    name: "TUCSA",
    img: TUCSA,
    className: "bg-blue-950  rounded-md ",
  },
  SOLE: { id: 5, name: "SOLE", img: SOLE, className: "bg-white rounded-2xl " },
};

const ImageRow = ({ images }: { images: ImageKeys[] }) => {
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowImg(true);
    }, 3000);
  }, []);

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
        <Image
          alt={alt}
          className={`${className} w-[80%]  
          transition-all  ease-linear duration-1000
          ${!showImg ? "opacity-0" : "opacity-80"}  `}
          src={img}
        />
      </div>
    );
  };

  return (
    <div className="flex  whitespace-nowrap">
      {images.map((item, i) => (
        <ImageItem
          className={Data[item].className}
          key={`${Data[item].id + i}`}
          img={Data[item].img}
          alt={Data[item].name}
        />
      ))}
    </div>
  );
};

const ImageRowSection = () => {
  return (
    <div className="absolute top-0 z-0">
      <ImageRow
        images={[
          "kidden",
          "RTF",
          "SOLE",
          "TDW",
          "TUCSA",
          "kidden",
          "RTF",
          "TUCSA",
        ]}
      />
      <ImageRow
        images={[
          "TUCSA",

          "TDW",
          "kidden",
          "SOLE",
          "kidden",
          "RTF",

          "TDW",
          "TUCSA",
        ]}
      />
      <ImageRow
        images={[
          "SOLE",
          "TUCSA",
          "TDW",
          "kidden",
          "RTF",
          "TUCSA",
          "RTF",
          "TUCSA",
          "SOLE",
        ]}
      />
      <ImageRow
        images={[
          "kidden",
          "RTF",
          "SOLE",
          "TDW",
          "TUCSA",
          "kidden",
          "RTF",
          "TUCSA",
          "SOLE",
        ]}
      />
      <ImageRow
        images={[
          "TUCSA",

          "TDW",
          "kidden",
          "SOLE",
          "kidden",
          "RTF",

          "TDW",
          "TUCSA",
        ]}
      />
    </div>
  );
};

export default ImageRowSection;
