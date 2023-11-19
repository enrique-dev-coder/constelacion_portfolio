import React from "react";
import ConteslacionAnimatedTitle from "./ConteslacionAnimatedTitle";
import ImageRow from "./ImageRow";

const Hero = () => {
  return (
    <section className="w-full h-screen  bg-purpleSoft flex flex-col items-center  justify-center relative">
      <div className=" z-10 bg-purpleSoft">
        <ConteslacionAnimatedTitle />
      </div>
      {/*image rows*/}
      <div className="absolute top-0 z-0">
        <ImageRow />
      </div>
    </section>
  );
};

export default Hero;
