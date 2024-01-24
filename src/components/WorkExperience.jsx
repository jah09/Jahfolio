import React, { useEffect, useRef } from "react";
import Experience from "../data/workexperiences";
import Certification from "../data/certificationData";
import { motion, useInView, useAnimation } from "framer-motion";
import Certifications from "./Certifications";
const WorkExperience = () => {
  const myExperiences = Experience(); //assign the function to a variable
  const myCertification = Certification();
  //handle click of the image in certification
  const handleClickImage = (item) => {
    window.open(item.certificationImage, "_blank", "noreferrer");
  };
  //work experience
  const workExpRef = useRef(null);
  const isInView_workExp = useInView(workExpRef, { once: true }); //if mo enter sa viewport, mo execute once

  const workExpControls = useAnimation();
  useEffect(() => {
    if (isInView_workExp) {
      workExpControls.start("visible");
    }
  }, [isInView_workExp]);

  //certifications
  const certRef = useRef(null);
  const isInView_Cert = useInView(certRef, { once: true });
  const certControls = useAnimation();
  useEffect(() => {
    if (isInView_Cert) {
      certControls.start("visible");
    }
  }, [isInView_Cert]);
  //dark:bg-backgroundcolor
  return (
    <div className="text-myfontcolor  container-lg mx-auto md:h-full ">
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
          <Certifications/>
          {/* <div
            className=" md:h-full  md:w-[60%] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2  max-md:grid-cols-2"
          
          >
            {myCertification.map((item) => (
              <motion.div
              ref={certRef}
                className="bg-backgroundcolor cursor-pointer hover:transition transition hover:-translate-y-1  hover:bg-secondarycolor border-secondarycolor border-2 rounded-md p-4 md:mx-auto mt-2 animate glow delay-3"
                animate={certControls}
                initial="hidden"
                transition={{ duration: 2.5, ease: "easeInOut" }}
              >
                <a onClick={() => handleClickImage(item)}>
                  <img
                    src={item.certificationImage}
                    className=" transition-all duration-500 transform hover:scale-[104%] rounded-md"
                  />
                </a>

                <h1 className="mt-2 font-montserratmedium text-lg md:text-xl md:text-center ">
                  {item.certificationName}
                </h1>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
