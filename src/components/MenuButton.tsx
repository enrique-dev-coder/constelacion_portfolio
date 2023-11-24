import React from "react";

const MenuButton = () => {
  return (
    <div className="fixed top-0 left-0 w-12 h-12 bg-blueMain overflow-hidden flex flex-col justify-center gap-1 z-50 rounded-full ml-4 mt-4">
      <div className="h-1 w-[70%] mx-auto bg-pink-100 rounded-lg" />
      <div className="h-1 w-[70%] mx-auto bg-pink-100 rounded-lg" />
      <div className="h-1 w-[70%] mx-auto bg-pink-100 rounded-lg" />
    </div>
  );
};

export default MenuButton;
