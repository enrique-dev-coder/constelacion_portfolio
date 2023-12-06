import React from 'react';
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
} from './ConstelacionLetters';
const ConteslacionAnimatedTitle = () => {
  return (
    <div className="z-10 relative sm:hidden">
      <HalfCircle1 className="ml-[140px] z-10" />
      <div className="flex">
        <C className="mr-[23px] z-10  " />
        <O className="mr-[23px] mb-[50px] -translate-y-2 z-10 " />
        <N className="mr-[23px] mb-[20px] z-10  " />
        <S className="mr-[23px] z-10 " />
        <T className="mr-[23px] mt-[60px] z-10  " />
        <E className="mr-[23px] mt-[80px] z-10  " />
        <L className="mr-[23px] mt-[30px] z-10 " />
        <A className="mr-[23px] z-10 " />
        <C2 className="mr-[23px] mt-[30px] z-10  " />
        <I className="mr-[23px] mt-[40px] z-10  " />
        <div className="flex flex-col items-center">
          <Acento className="mb-[10px] z-10 " />
          <O2 className="mr-[23px] mb-[20px] z-10 " />
        </div>
        <N2 className="mr-[23px] mt-[20px] z-10 " />
      </div>
      <HalfCircle2 className="ml-[50px] -mt-[54px] z-10 " />
    </div>
  );
};

export default ConteslacionAnimatedTitle;
