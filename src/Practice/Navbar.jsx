import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  console.log("line 5", nav);
  const handleNav = () => {
    console.log("line 7", nav);
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="w-full text-3xl font-bold text-primarycolor font-robotoregular">Lorem</h1>
      <ul className="hidden md:flex font-bold ">
        <li className="p-4"><a href="#">Home</a></li>
        <li className="p-4"><a href="/company">Company</a></li>
        <li className="p-4"><a href="/resources">Resources</a></li>
        <li className="p-4"><a href="/about">About</a></li>
        <li className="p-4"><a href="/contacts">Contacts</a></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Lorem</h1>
        <ul className="p-4 font-bold">
          <li className="p-4 border-b border-gray-600 hover:bg-gray-700 ">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-gray-700">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-gray-700">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-gray-700">
            About
          </li>
          <li className="p-4">Contacts1</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
