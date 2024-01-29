import React, { useEffect, useRef } from "react";
import Experience from "../data/workexperiences";

import { motion, useInView, useAnimation } from "framer-motion";
import Certifications from "./Certifications";
const WorkExperience = () => {
  const myExperiences = Experience(); //assign the function to a variable

  //work experience
  const workExpRef = useRef(null);
  const isInView_workExp = useInView(workExpRef, { once: true }); //if mo enter sa viewport, mo execute once

  const workExpControls = useAnimation();
  useEffect(() => {
    if (isInView_workExp) {
      workExpControls.start("visible");
    }
  }, [isInView_workExp]);

  return (
    <div className="text-myfontcolor  container-lg mx-auto md:h-full dark:bg-backgroundcolor">
      <section id="workExperience " ref={workExpRef} className="mt-[10%] ">
        <motion.div
          className="p-8 mt-10 "
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          animate={workExpControls}
          initial="hidden"
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <h3 className="text-3xl font-robotomedium">
            Experience & Certifications
          </h3>
        </motion.div>

        <div className=" p-8  md:flex md:justify-around ">
          <div className=" md:w-[40%] md:h-full">
            {myExperiences.map((exp) => (
              <motion.div
                animate={workExpControls}
                className="bg-backgroundcolor hover:transition transition hover:-translate-y-1  hover:bg-secondarycolor border-secondarycolor border-2 rounded-md p-4 mt-2 md:w-[90%] animate glow delay-3"
                key={exp.id}
              >
                <div className=" items-center md:flex justify-between ">
                  <h1 className="text-2xl font-montserratmedium md:text-2xl">
                    {exp.position}
                  </h1>
                  <p className="font-montserratregular hidden md:inline-block">
                    {exp.dateHired}
                  </p>
                </div>
                <h1 className="font-montserratregular text-md">
                  {exp.companyName}
                </h1>
                <h1 className="font-montserratregular text-md">
                  {exp.companyAddress}
                </h1>
                <h1 className="font-montserratregular mt-2 text-md  tracking-wide leading-relaxed">
                  {exp.description}
                </h1>
              </motion.div>
            ))}
          </div>

          <Certifications />
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
