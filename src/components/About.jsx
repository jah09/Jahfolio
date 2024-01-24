import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import AboutMeImage from "../assets/AboutMeImage.png";
import Button from "./Button";
import TechnologiesUsed from "../data/techused";
import Experience from "../data/workexperiences";
import MyResumePdf from "../resume/Suhot_Resume.pdf";
import Certification from "../data/certificationData";
import aboutStyle from "../componentstyle/aboutStyle.css";

import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {

  const mySkills = TechnologiesUsed(); //assign the function to a variable
  const myExperiences = Experience(); //assign the function to a variable
  const myCertification = Certification();
  //function to handle download of PDf
  const handleDownloadPdf = () => {
    window.open(MyResumePdf);
  };

  const handleClickSocialMedia = (skill) => {
    window.open(skill.techLink);
  };

  //handle click of the image in certification
  const handleClickImage = (item) => {
    window.open(item.certificationImage, "_blank", "noreferrer");
  };

  //about me
  const aboutMeRef = useRef(null); //ref for about me

  const isInView_aboutme = useInView(aboutMeRef, { once: true });
  const aboutmeControls = useAnimation();
  useEffect(() => {
    if (isInView_aboutme) {
      aboutmeControls.start("visible");
    }
  }, [isInView_aboutme]);

  //technologies used
  const techUsedRef = useRef(null);
  const isInView_techUsed = useInView(techUsedRef, { once: true });
  const techUsedControls = useAnimation();
  useEffect(() => {
    if (isInView_techUsed) {
      techUsedControls.start("visible");
    }
  }, [isInView_techUsed]);

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
  const certRef=useRef(null);
  const isInView_Cert = useInView(certRef, { once: true });
  const certControls = useAnimation();
  useEffect(() => {
    if (isInView_Cert) {
      certControls.start("visible");
    }
  }, [isInView_Cert]);
  return (
    <div
      className="text-myfontcolor  container-lg mx-auto md:h-full dark:bg-backgroundcolor"
      id="about"
    >
      {/* Main about */}
      <section ref={aboutMeRef}>
        <motion.div
          className="p-8 mt-60"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={aboutmeControls}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <h1 className="text-3xl font-robotomedium lg:text-red-900">About me</h1>
        </motion.div>

        <motion.div
          className="p-8 md:flex "
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={aboutmeControls}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <div className="text-2xl font-montserratregular">
            I'm Jeahael Suhot, an aspiring web and mobile developer with a
            passion for learning in the field of information technology.
            Motivated by a strong desire to acquire new skills, I am dedicated
            to becoming a successful Software Engineer. My journey is fueled by
            unwavering determination and a commitment to expanding my knowledge
            through fresh challenges. I believe venturing into uncharted
            territories will provide invaluable insights, propelling me toward
            my aspirations in the field. I am an individual with relentless
            curiosity, ready to broaden my horizons.
          </div>
          <motion.div
            className=" my-2 flex justify-center md:mx-1 "
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={aboutmeControls}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <div className="bg-secondarycolor border rounded-full border-secondarycolor w-[300px] h-[300px] justify-center">
              <img
                src={AboutMeImage}
                alt="myimage"
                className="w-[280px] h-[280px] m-6"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className=" my-0 justify-center flex transition hover:translate-x-0"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          animate={aboutmeControls}
          initial="hidden"
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <Button onClick={handleDownloadPdf}>Download CV</Button>
        </motion.div>
      </section>

      {/* Skills/Technlogies I use */}
      <section
        id="technologyUsed "
        ref={techUsedRef}
        className=" h-full lg:h-[450px]  md:h-full"
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
              {/* {skill.techName} */}
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

      {/* Work Experience */}
      <section id="workExperience " ref={workExpRef} className="mt-40 ">
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
          <div className=" md:h-full  md:w-[60%] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2  max-md:grid-cols-2" ref={certRef}>
            {myCertification.map((item) => (
              <motion.div
             
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
