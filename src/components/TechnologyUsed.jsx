import React, { useRef, useEffect } from "react";
import TechnologiesUsed from "../data/techused";

import { motion, useInView, useAnimation } from "framer-motion";
const TechnologyUsed = () => {
  const mySkills = TechnologiesUsed(); //assign the function to a variable

  const handleClickSocialMedia = (skill) => {
    window.open(skill.techLink);
  };

  const techUsedRef = useRef(null);
  const isInView_techUsed = useInView(techUsedRef, { once: true });
  const techUsedControls = useAnimation();
  useEffect(() => {
    if (isInView_techUsed) {
      techUsedControls.start("visible");
    }
  }, [isInView_techUsed]);
  //
  return (
    <div className="text-myfontcolor  container-lg mx-auto md:h-full dark:bg-backgroundcolor">
      <section
        id="technologyUsed "
        ref={techUsedRef}
        className=" h-full lg:h-[450px]  md:h-full "
      >
        <motion.div
          className="p-8 mt-20 "
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          animate={techUsedControls}
          initial="hidden"
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <h3 className="text-3xl font-robotomedium">Technologies I used</h3>
        </motion.div>
        <div className=" text-myfontcolor p-8 md:grid-cols-6 lg:grid-cols-8 max-md:grid-cols-4 gap-2 grid grid-rows-4 max-sm:grid-cols-3  md:gap-2   ">
          {mySkills.map((skill) => (
            <motion.div
              animate={techUsedControls}
              className="hover:transition transition hover:-translate-y-1  bg-backgroundcolor border-secondarycolor border-2 hover:bg-secondarycolor rounded-md p-4 flex  items-center flex-col duration-150 animate glow delay-3 w-28 h-36 "
              key={skill.id}
            >
              <div>
                <img src={skill.techIcon} alt="techUsedIcon" />
              </div>

              <div className="font-montserratregular text-lg md:text-xl font-bold  cursor-pointer mt-2 text-center ">
                <a onClick={() => handleClickSocialMedia(skill)}>
                  {skill.techName}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnologyUsed;
