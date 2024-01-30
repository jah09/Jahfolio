import React, { useContext } from "react";
import HomeImage from "../assets/HomeImage.png";
import ReactTyped from "react-typed";
import SocmedLinks from "../data/socmedlinks";
import homeStyle from "../componentstyle/homeStyle.css";
import { AppContext } from "../App";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";
const Home = () => {
  const { showToastMessage } = useContext(AppContext); //acess the context from the AppContext in App.jsx

  //handle click for social media
  const handleClickSocialMedia = (link) => {
    // console.log("Onclick",link);
    //if link is not available
    if (link.url === "") {
      // window.alert("No link available.");
      showToastMessage();
    } else {
      window.open(link.url, "_blank", "noreferrer");
    }
  };

  return (
    <div className="text-myfontcolor  container-lg mx-auto  " id="home">
      <ToastContainer />
      <div className="p-6 md:flex md:items-center md:mt-10 dark:bg-backgroundcolor ">
        {/* <div className=" mx-auto flex justify-center imageContainer">
          <img src={HomeImage} alt="homeImage" className="w-80 h-80 rounded-full border-secondarycolor border-8 md:rounder-full md:border-8 md:w-80 md:h-80" />
        </div> */}
        <motion.div
          className="mx-auto flex justify-center md:w-[80%] lg:w-80 w-80 h-80"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.25 }}
        >
          <img
            src={HomeImage}
            alt="homeImage"
            className="md:w-80  md:h-80  w-80 h-80 rounded-full border-secondarycolor border-8 md:rounder-full md:border-8  object-fit:cover"
          />
        </motion.div>
        <motion.div
          className="my-2 md:p-8 mx-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.25 }}
        >
          <ReactTyped
            className="text-5xl font-montserratmedium"
            strings={["Hello, I'm  Jah!"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className="font-montserratregular text-xl   ">
            {" "}
            An up-and-coming web and mobile developer with ambitious goals.
          </p>
          <div className="py-3 flex">
            {SocmedLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => handleClickSocialMedia(link)}
                className="bg-secondarycolor p-1 w-8 mx-1  h-8 rounded-[6px] hover:shadow-sm hover:shadow-accentcolor hover:transition transition hover:-translate-y-1 duration-300 cursor-pointer"
              >
                <link.icon size={25} />
              </a>
            ))}
          </div>
          <div className=" py-3 flex  ">
            {/*  <div className="rounded-lg h-12 w-36  text-backgroundcolor items-center font-montserratmedium flex justify-around bg-primarycolor cursor-pointer transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110  duration-300 text-lg md:text-xl">
              <button className=" p-2 tracking-wide">Projects</button>
            
            </div> */}
            <ScrollLink
              className="rounded-lg h-12 w-36  text-backgroundcolor items-center font-montserratmedium flex justify-around bg-primarycolor cursor-pointer transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110  duration-300 text-lg md:text-xl "
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className=" p-2 tracking-wide">Projects</button>
            </ScrollLink>

            <ScrollLink 
            to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            className="rounded-lg h-12 w-36 text-myfontcolor items-center font-montserratmedium flex justify-around border border-primarycolor hover:bg-primarycolor hover:text-secondarycolor cursor-pointer transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110  duration-300 mx-6 text-lg md:text-xl ">
              <button className=" p-2 tracking-wide">Contact me</button>
              
            </ScrollLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
