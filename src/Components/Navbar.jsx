import React from "react";
import { AiOutlineMail } from "react-icons/ai";
function Navbar() {
  return (
    <nav className="bg-white flex justify-between items-center py-8 sm:px-16 px-8 w-full">
      <h3 className="text-2xl text-blue-950 font-semibold hidden sm:block">
        Welcome to my portfolio
      </h3>
      <h3 className="block sm:hidden text-xl text-blue-950 font-semibold">
        Portfolio
      </h3>
      <div className="flex items-center gap-1  sm:mr-40 font-semibold">
        <AiOutlineMail className="sm:text-lg" />
        <h4 className="sm:text-base text-sm">masumahmed6763@gmail.com</h4>
      </div>
    </nav>
  );
}

export default Navbar;
