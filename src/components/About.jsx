import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import AboutMeImage from "../assets/AboutMeImage.png";
import Button from "./Button";

import MyResumePdf from "../resume/Suhot_Resume.pdf";

import aboutStyle from "../componentstyle/aboutStyle.css";

import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  //function to handle download of PDf
  const handleDownloadPdf = () => {
    window.open(MyResumePdf);
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
  const certRef = useRef(null);
  const isInView_Cert = useInView(certRef, { once: true });
  const certControls = useAnimation();
  useEffect(() => {
    if (isInView_Cert) {
      certControls.start("visible");
    }
  }, [isInView_Cert]);
  //
  return (
    <div
      className="text-myfontcolor  container-lg mx-auto md:h-full dark:bg-backgroundcolor "
      id="about"
    >
      {/* Main about */}
      <section ref={aboutMeRef}>
        <motion.div
          className="p-8 mt-[15%] "
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={aboutmeControls}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <h1 className="text-3xl font-robotomedium ">About me</h1>
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
    </div>
  );
};

export default About;
