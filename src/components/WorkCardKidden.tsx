import React from 'react';
import Image from 'next/image';
import { InstaIcon, LinkIcon } from './Icons';
import { motion } from 'framer-motion';
import KiddenPc from '../../public/assets/projects/Kidden_pc.png';
import KiddenCel from '../../public/assets/projects/Kidden_cel.png';

const WorkCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={` rounded-md max-w-[1000px] my-10 p-3 mx-auto md:w-[80%] flex flex-col`}
    >
      {/*title*/}
      <div
        className={` flex items-center   mt-2 mb-6 justify-center   sm:flex-col sm:mt-0`}
      >
        <h2 className=" uppercase tracking-widest font-bold  text-7xl text-purple-950">
          Kidden
        </h2>
      </div>

      {/*content*/}
      <div className={`grid  grid-cols-8  gap-8`}>
        <div
          className={`col-span-3 sm:col-span-8   rounded-3xl shadow-md p-4 bg-gradient-to-t  from-blue-700  to-blue-500 order-2 `}
        >
          <div className=" mx-auto">
            <Image src={KiddenCel} alt="" className="w-full h-full sm:p-2" />
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-y-4 justify-between sm:col-span-8">
          <div className="w-full flex h-full">
            <div className="  flex flex-col justify-between gap-y-4">
              <div className="h-full flex items-center rounded-3xl shadow-md  bg-blueMain ">
                {/*features*/}
                <p className="text-blue-100 font-medium px-4   py-2">
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
              <div className="flex items-center  justify-between ">
                {/*insta*/}
                <a
                  href="https://www.instagram.com/kidden_dental/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="flex items-center gap-2  bg-gradient-to-r  from-blue-700  to-blue-500 shadow-md   rounded-3xl p-4
                    hover:from-blue-500 hover:to-blue-700 transition-all duration-500
                  "
                  >
                    <InstaIcon className=" fill-blue-100" width={25} />
                    <p className=" text-xl font-semibold text-blue-100 ">
                      @kidden_dental
                    </p>
                  </div>
                </a>
                {/*web*/}
                <a
                  href="https://kidden.com.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="flex items-center gap-2  bg-gradient-to-r  from-blue-700  to-blue-500 shadow-md   rounded-3xl p-4
                  hover:from-blue-500 hover:to-blue-700 transition-all duration-500"
                  >
                    <LinkIcon className=" fill-blue-100" width={30} />
                    <p className=" text-xl font-semibold text-blue-100 underline underline-offset-1">
                      https://kidden.com.mx/
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`shadow-md bg-gradient-to-l  from-blue-700  to-blue-500 order-2 rounded-3xl flex  justify-center items-center p-4`}
          >
            <Image src={KiddenPc} alt="" className="w-full  sm:hidden " />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
