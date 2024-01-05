import React from 'react';

const ContactUsBanner = () => {
  return (
    <div className=" bg-purple-800 py-10 h-[50vh] flex flex-col justify-center md:h-auto">
      <p className=" text-center text-purpleSoft font-medium text-8xl sm:text-4xl">
        Quieres trabajar con nosotros?
      </p>
      <div className="flex justify-center">
        <button
          className="  shadow-md bg-purpleSoft text-purple-900 font-semibold  text-5xl rounded-xl px-4 py-2 my-4
        sm:text-2xl
        "
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
};

export default ContactUsBanner;
