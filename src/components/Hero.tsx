import React from 'react';
import ConteslacionAnimatedTitle from './ConteslacionAnimatedTitle';
import ImageRow from './ImageRow';
import ScrollInfo from './ScrollInfo';

const Hero = () => {
  return (
    <section className=" w-screen h-screen  bg-purpleSoft flex flex-col items-center overflow-hidden  justify-center relative">
      <div className=" z-10 bg-purpleSoft">
        <ConteslacionAnimatedTitle />
      </div>
      <ScrollInfo />
      {/*image rows*/}
      <div className="absolute top-0 z-0">
        <ImageRow
          images={[
            'kidden',
            'RTF',
            'SOLE',
            'TDW',
            'TUCSA',
            'kidden',
            'RTF',
            'TUCSA',
          ]}
        />
        <ImageRow
          images={[
            'TUCSA',

            'TDW',
            'kidden',
            'SOLE',
            'kidden',
            'RTF',

            'TDW',
            'TUCSA',
          ]}
        />
        <ImageRow
          images={[
            'SOLE',
            'TUCSA',
            'TDW',
            'kidden',
            'RTF',
            'TUCSA',
            'RTF',
            'TUCSA',
            'SOLE',
          ]}
        />
        <ImageRow
          images={[
            'kidden',
            'RTF',
            'SOLE',
            'TDW',
            'TUCSA',
            'kidden',
            'RTF',
            'TUCSA',
            'SOLE',
          ]}
        />
        <ImageRow
          images={[
            'TUCSA',

            'TDW',
            'kidden',
            'SOLE',
            'kidden',
            'RTF',

            'TDW',
            'TUCSA',
          ]}
        />
      </div>
    </section>
  );
};

export default Hero;
