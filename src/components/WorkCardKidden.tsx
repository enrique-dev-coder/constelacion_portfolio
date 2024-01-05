import React from 'react';
import Image from 'next/image';
import Wrapper from './WorkCardComponents/Wrapper';
import LinkContainer from './WorkCardComponents/LinkContainer';
import CardTitle from './WorkCardComponents/CardTitle';
import KiddenPc from '../../public/assets/projects/Kidden_pc.png';
import KiddenCel from '../../public/assets/projects/Kidden_cel.png';

const WorkCard = () => {
  return (
    <Wrapper>
      {/*title*/}
      <CardTitle title="Kidden" />

      {/*content*/}
      <div className={`grid  grid-cols-8  gap-8 sm:gap-2`}>
        <div
          className={`col-span-3 sm:col-span-8   rounded-3xl shadow-md p-4 bg-gradient-to-t  from-blue-700  to-blue-500 order-2 sm:order-1 `}
        >
          <div className=" mx-auto">
            <Image src={KiddenCel} alt="" className="w-full h-full " />
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-y-4 justify-between sm:col-span-8 sm:order-2">
          <div className="w-full flex h-full">
            <div className="  flex flex-col justify-between gap-y-4">
              <div className="h-full flex items-center rounded-3xl shadow-md  bg-blueMain ">
                {/*features*/}
                <p className="text-blue-100 font-medium px-4 py-2 sm:text-sm sm:font-normal ">
                  De manera mensual, seleccionamos y creamos contenido atractivo
                  para Facebook con el objetivo de informar y educar a mamás y
                  familias. A través de esta plataforma, buscamos proporcionar
                  información valiosa y recursos a nuestra audiencia objetivo,
                  fomentando un sentido de comunidad y apoyo. Además, nos
                  encargamos de desarrollar su página web, asegurándonos de que
                  muestre de manera efectiva sus servicios y permita a los
                  clientes acceder fácilmente a información y programar visitas.
                </p>
              </div>
              {/*links container*/}

              <LinkContainer
                bgColor="from-blue-700  to-blue-500 hover:from-blue-500 hover:to-blue-700"
                instaLink="https://www.instagram.com/kidden_dental/"
                instaName="kidden_dental"
                webLink="https://kidden.com.mx/"
                IconColor="fill-blue-100"
                TextColor="text-blue-100"
              />
            </div>
          </div>
          <div
            className={`shadow-md bg-gradient-to-l  from-blue-700  to-blue-500 order-2 rounded-3xl flex  justify-center items-center p-4 sm:hidden`}
          >
            <Image src={KiddenPc} alt="" className="w-full  sm:hidden " />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WorkCard;
