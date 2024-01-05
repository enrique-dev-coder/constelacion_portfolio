import React from "react";

const ContactUsBanner = () => {
  return (
    <div className=" bg-violet-200  py-20 h-screen flex flex-col justify-center md:h-auto">
      <p
        className="w-1/2 m-auto  text-center  text-purpleSoft  text-8xl sm:text-4xl
        bg-gradient-to-r   from-purple-700 to-fuchsia-700 
        text-transparent bg-clip-text
      
      "
      >
        ¿Colaboramos para impulsar tu proyecto?{" "}
      </p>
      <div className="flex justify-center">
        <button
          className="  shadow-md border-2 border-purple-900 text-purple-900 font-light  text-8xl rounded-full p-6 my-4
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
