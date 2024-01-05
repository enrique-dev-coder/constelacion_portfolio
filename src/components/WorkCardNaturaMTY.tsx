import React from "react";
import Image from "next/image";
import { InstaIcon, LinkIcon } from "./Icons";
import { motion } from "framer-motion";
import Wrapper from "./WorkCardComponents/Wrapper";
import CardTitle from "./WorkCardComponents/CardTitle";
import LinkContainer from "./WorkCardComponents/LinkContainer";
import natturaPc from "../../public/assets/projects/Nattura_PC.png";
import natturaCel from "../../public/assets/projects/natura_cel.png";

const WorkCardNaturaMty = () => {
  return (
    <Wrapper>
      {/*title*/}

      <CardTitle title="Natturamty" />
      {/*content*/}
      <div className={`grid  grid-cols-8  gap-8 sm:gap-2 `}>
        <div
          className={`col-span-3 sm:col-span-8   rounded-3xl shadow-md p-4 bg-gradient-to-t  from-pink-400  to-pink-300  `}
        >
          <div className=" mx-auto">
            <Image src={natturaCel} alt="" className="w-full h-full " />
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-y-4 justify-between sm:col-span-8">
          <div
            className={`shadow-md bg-gradient-to-l  from-pink-400  to-pink-300  rounded-3xl flex  justify-center items-center p-4 sm:hidden`}
          >
            <Image src={natturaPc} alt="" className="w-full  sm:hidden " />
          </div>
          <div className="w-full flex h-full">
            <div className="w-full  flex flex-col justify-between gap-y-4">
              <div className="h-full flex items-center rounded-3xl shadow-md  bg-pink-300">
                {/*features*/}
                <ul className=" list-disc px-8 font-semibold text-gray-800 sm:text-sm sm:px-0 sm:pl-6 sm:py-2">
                  <li>
                    {" "}
                    Desarrollo y diseño de tienda online con mas de 200
                    productos.
                  </li>

                  <li>
                    {" "}
                    Tienda online adaptable a tamaños de dispositivos móviles.
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

              <LinkContainer
                bgColor="from-pink-400  to-pink-300  hover:from-pink-300 hover:to-pink-400"
                instaLink="https://www.instagram.com/solebeaute.beautysupply/"
                instaName="https://natturamty.com/"
                webLink="https://natturamty.com/"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WorkCardNaturaMty;
