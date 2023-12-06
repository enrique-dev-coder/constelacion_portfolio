import React from 'react';
import Image from 'next/image';
import { InstaIcon, LinkIcon } from './Icons';
import { motion } from 'framer-motion';
import natturaPc from '../../public/assets/projects/Nattura_PC.png';
import natturaCel from '../../public/assets/projects/natura_cel.png';

const WorkCardNaturaMty = () => {
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
          Natturamty
        </h2>
      </div>

      {/*content*/}
      <div className={`grid  grid-cols-8  gap-8`}>
        <div
          className={`col-span-3 sm:col-span-8   rounded-3xl shadow-md p-4 bg-gradient-to-t  from-pink-400  to-pink-300  `}
        >
          <div className=" mx-auto">
            <Image src={natturaCel} alt="" className="w-full h-full sm:p-2" />
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-y-4 justify-between sm:col-span-8">
          <div
            className={`shadow-md bg-gradient-to-l  from-pink-400  to-pink-300  rounded-3xl flex  justify-center items-center p-4`}
          >
            <Image src={natturaPc} alt="" className="w-full  sm:hidden " />
          </div>
          <div className="w-full flex h-full">
            <div className="w-full  flex flex-col justify-between gap-y-4">
              <div className="h-full flex items-center rounded-3xl shadow-md  bg-pink-300">
                {/*features*/}
                <ul className=" list-disc px-8 font-semibold text-gray-800">
                  <li>
                    {' '}
                    Desarrollo y diseño de tienda online con mas de 200
                    productos.
                  </li>

                  <li>
                    {' '}
                    Tienda online adaptable a tamaños de dispositivos móbiles.
                  </li>
                  <li>Campañas de marketing y redes sociales.</li>
                  <li>
                    Ecommerce preparado para recibir pedidos, registar clientes,
                    enviar emails ,crear cupones y códigos de regalo.
                  </li>
                  <li>
                    Capacitación al personal para el uso adecuado de la tienda
                    como subir productos nuevos, precios en ofertas y leer los
                    pedidos.
                  </li>
                </ul>
              </div>
              {/*links container*/}
              <div className="flex items-center  justify-between ">
                {/*insta*/}
                <a
                  href="https://www.instagram.com/solebeaute.beautysupply/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="flex items-center gap-2  bg-gradient-to-r  from-pink-400  to-pink-300 shadow-md   rounded-3xl p-4
                    hover:from-pink-300 hover:to-pink-400 transition-all duration-500
                  "
                  >
                    <InstaIcon className=" fill-black" width={25} />
                    <p className="  font-semibold  text-gray-800">
                      @solebeaute.beautysupply
                    </p>
                  </div>
                </a>
                {/*web*/}
                <a
                  href="https://natturamty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="flex items-center gap-2  bg-gradient-to-r  from-pink-400  to-pink-300 shadow-md   rounded-3xl p-4
                    hover:from-pink-300 hover:to-pink-400 transition-all duration-500"
                  >
                    <LinkIcon className=" fill-black" width={30} />
                    <p className="  font-semibold  underline underline-offset-1 text-gray-800">
                      https://natturamty.com/
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCardNaturaMty;
