"use client";
import ConteslacionAnimatedTitle from "./ConteslacionAnimatedTitle";
import Circle from "../../public/assets/circle.svg";
import ScrollInfo from "./ScrollInfo";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-screen h-screen bg-purpleSoft flex flex-col items-center overflow-hidden justify-center relative">
      {/*Introduction with animation*/}
      <div className="z-10 relative">
        <Image alt="" src={Circle} className="bg-red absolute z-[5] -top-4" />
        <ConteslacionAnimatedTitle />
      </div>
      <ScrollInfo />
    </section>
  );
};

export default Hero;
