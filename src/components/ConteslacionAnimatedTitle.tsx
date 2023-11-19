import React from "react";
import {
  C,
  O,
  N,
  S,
  T,
  E,
  L,
  A,
  C2,
  I,
  O2,
  N2,
  HalfCircle1,
  HalfCircle2,
  Acento,
} from "./ConstelacionLetters";
const ConteslacionAnimatedTitle = () => {
  return (
    <>
      <HalfCircle1 className="ml-[140px]" />
      <div className="flex">
        <C className="mr-[23px]" />
        <O className="mr-[23px] mb-[50px] -translate-y-2" />
        <N className="mr-[23px] mb-[20px]" />
        <S className="mr-[23px]" />
        <T className="mr-[23px] mt-[60px] " />
        <E className="mr-[23px] mt-[80px] " />
        <L className="mr-[23px] mt-[30px]" />
        <A className="mr-[23px]" />
        <C2 className="mr-[23px] mt-[30px]" />
        <I className="mr-[23px] mt-[40px]" />
        <div className="flex flex-col items-center">
          <Acento className="mb-[10px]" />
          <O2 className="mr-[23px] mb-[20px]" />
        </div>
        <N2 className="mr-[23px] mt-[20px]" />
      </div>
      <HalfCircle2 className="ml-[50px] -mt-[54px]" />
    </>
  );
};

export default ConteslacionAnimatedTitle;
