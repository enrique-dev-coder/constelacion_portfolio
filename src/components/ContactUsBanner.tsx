import React from "react";
import { InstaIcon } from "./Icons";

const ContactUsBanner = () => {
  return (
    <div className=" bg-violet-200 max-w-[1200px] m-auto  py-10  h-screen flex flex-col justify-between md:h-auto">
      <div className="flex flex-col   gap-y-10  h-full">
        <p
          className=" mx-auto    text-center  text-purpleSoft  text-8xl sm:text-4xl
        bg-gradient-to-r   from-blue-800 to-fuchsia-900 
        text-transparent bg-clip-text
      
      "
        >
          ¿Colaboramos para impulsar tu proyecto?{" "}
        </p>
        <div className="flex justify-center">
          <button className="  shadow-md border-2 border-purple-900 text-purple-900 font-light  text-8xl rounded-full p-6 sm:text-2xl">
            <a
              href="https://constelaciondigital.com.mx/contacto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
            </a>
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="  border-2 border-purple-900  rounded-full p-2 text-lg">
          <a
            href="https://www.instagram.com/constelacion.digital/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 "
          >
            <InstaIcon className="" width={20} />
            https://www.instagram.com/constelacion.digital/
          </a>
        </button>
        <button className="  border-2 border-purple-900  rounded-full p-2 flex items-center gap-2 text-lg">
          <a
            href="https://api.whatsapp.com/send?phone=5218442464782&text=%C2%BFColaboramos%20para%20impulsar%20tu%20proyecto%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            +52 1 844 246 4782{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default ContactUsBanner;
