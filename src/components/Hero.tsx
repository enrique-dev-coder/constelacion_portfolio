'use client';
import ConteslacionAnimatedTitle from './ConteslacionAnimatedTitle';
import ScrollInfo from './ScrollInfo';
import Image from 'next/image';
import LogoForMobile from '../../public/assets/Logo.Principal_Sin.Fondo_1.png';

const Hero = () => {
  return (
    <section className="w-screen h-screen bg-purpleSoft flex flex-col items-center overflow-hidden justify-center relative">
      {/*Introduction with animation*/}
      <div className="z-10 relative ">
        <Image alt="" src={LogoForMobile} className="hidden px-4 sm:block" />
        <ConteslacionAnimatedTitle />
      </div>
      <ScrollInfo />
    </section>
  );
};

export default Hero;
