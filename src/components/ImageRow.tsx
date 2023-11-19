import React from "react";
import kidden from "../../public/assets/KIDDEN.webp";
import Image from "next/image";

const ImageRow = () => {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-2  flex justify-center items-center ">
        <Image alt="kidden logo" className="w-1/2 bg-black" src={kidden} />
      </div>
      <div className="col-span-2 bg-black">
        <Image alt="kidden logo" src={kidden} />
      </div>
      <div className="col-span-2 bg-black">
        <Image alt="kidden logo" src={kidden} />
      </div>
      <div className="col-span-2 bg-black">
        <Image alt="kidden logo" src={kidden} />
      </div>
      <div className="col-span-2 bg-black">
        <Image alt="kidden logo" src={kidden} />
      </div>
      <div className="col-span-2 bg-black">
        <Image alt="kidden logo" src={kidden} />
      </div>
    </div>
  );
};

export default ImageRow;
