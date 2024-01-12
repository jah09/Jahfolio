import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Lorem</h1>
        <p className="py-4">Lorem ipsum dolor sit amet.</p>
        <div className="flex justify-between md:w-[75%] my-6 ">
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30}/>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between ">
        <div>
           <h6 className="font-medium text-gray-400">Solution</h6>
            <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Market</li>
                <li  className="py-2 text-sm">Networking</li>
                <li  className="py-2 text-sm "> Engage</li>
            </ul>
        </div>
        <div>
           <h6 className="font-medium text-gray-400">Sports</h6>
            <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Docu</li>
                <li  className="py-2 text-sm">Guides</li>
                <li  className="py-2 text-sm "> Engage</li>
            </ul>
        </div>
        <div>
           <h6 className="font-medium text-gray-400">Solution</h6>
            <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Market</li>
                <li  className="py-2 text-sm">Networking</li>
                <li  className="py-2 text-sm "> Engage</li>
            </ul>
        </div>
        <div>
           <h6 className="font-medium text-gray-400">Abra</h6>
            <ul>
                <li className="py-2 text-sm">Analyticsv1</li>
                <li className="py-2 text-sm">Marketv1</li>
                <li  className="py-2 text-sm">Networkingv1</li>
                <li  className="py-2 text-sm "> Engagev1</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
