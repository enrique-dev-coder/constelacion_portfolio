import React from "react";

const CardTitle = ({ title }: { title: string }) => {
  return (
    <div
      className={` flex items-center   mt-2 mb-6 justify-center   sm:flex-col sm:mt-4 sm:mb-1 `}
    >
      <h2 className=" uppercase tracking-widest font-bold  text-7xl text-[#141E88] sm:text-3xl">
        {title}
      </h2>
    </div>
  );
};

export default CardTitle;
