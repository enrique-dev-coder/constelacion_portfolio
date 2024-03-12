import React from "react";
import { InstaIcon } from "./Icons";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });

const ContactUsBanner = () => {
  return (
    <div className="  max-w-[1200px] m-auto  py-10  h-screen flex flex-col justify-between md:h-auto">
      <div className="flex flex-col   gap-y-10  h-full">
        <p
          className={`
          ${josefin.className}
          mx-auto text-center text-8xl font-medium sm:text-3xl 
          gradient_title            
          sm:px-2 text-transparent bg-clip-text
          `}
        >
          ¿Colaboramos para impulsar tu proyecto?{" "}
        </p>
        <div className="flex justify-center ">
          <button
            className=" bg-[#141E88] shadow-md  text-[#F4DBDF] font-light  text-4xl rounded-full p-4 
          sm:text-2xl sm:w-full sm:p-2 sm:mx-2 sm:mb-2 sm:shadow-none"
          >
            <a
              href="https://somosasteria.com/contacto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
            </a>
          </button>
        </div>
      </div>
      <div className="flex justify-between sm:flex-col sm:gap-2">
        <button className=" bg-[#141E88] shadow-md  text-[#F4DBDF]  rounded-full p-2 text-lg sm:text-xl sm:p-2 sm:mx-2">
          <a
            href="https://www.instagram.com/asteria.estudiocreativo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:justify-center "
          >
            <InstaIcon className="" width={20} />
            asteria.estudiocreativo
          </a>
        </button>
        <button
          className=" bg-[#141E88] shadow-md  text-[#F4DBDF] rounded-full p-2 flex items-center gap-2 text-lg
        sm:text-xl sm:p-2 sm:mx-2"
        >
          <a
            href="https://wa.me/8442464782"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:flex  sm:justify-center sm:w-full "
          >
            <p>+52 1 844 246 4782</p>
          </a>
        </button>
      </div>
    </div>
  );
};

export default ContactUsBanner;
