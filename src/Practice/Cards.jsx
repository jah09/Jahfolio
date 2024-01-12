import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="font-bold text-2xl text-center py-8">Single User</h2>
          <p className="font-bold text-center text-4xl">$100</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">200 GB Storage</p>
            <p className="py-2 border-b mx-8">2300 GB Storage</p>
            <p className="py-2 border-b mx-8">100 GB Storage</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-5 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
        {/* 2nd */}
        <div className="w-full border bg-gray-100  shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
          <img
            src={Double}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
          />
          <h2 className="font-bold text-2xl text-center py-8">Single User</h2>
          <p className="font-bold text-center text-4xl">$100</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">200 GB Storage</p>
            <p className="py-2 border-b mx-8">2300 GB Storage</p>
            <p className="py-2 border-b mx-8">100 GB Storage</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-medium my-5 mx-auto py-3 text-[#00df9a]">
            Start Trial
          </button>
        </div>
        {/* 3rd */}
        <div className="w-full border  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="font-bold text-2xl text-center py-8">Single User</h2>
          <p className="font-bold text-center text-4xl">$100</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">200 GB Storage</p>
            <p className="py-2 border-b mx-8">2300 GB Storage</p>
            <p className="py-2 border-b mx-8">100 GB Storage</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-5 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>

      {/* 2nd  */}
    </div>
  );
};

export default Cards;
