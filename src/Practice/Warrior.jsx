import React from "react";
import ReactTyped from "react-typed";
const Warrior = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold p-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
          voluptatum.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with Lorem!
        </h1>
        <div className="flex justify-center items-center py-4">
          <p className="md:text-5xl sm:text-4xl text-xl ">
            Lorem ipsum dolor sit amet-{" "}
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl pl-2"
            strings={[" abra ka", " abra da", " abra bra"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          Lorem ipsum dolor sit amet.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-4 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Warrior;
