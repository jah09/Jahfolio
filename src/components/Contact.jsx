import React ,{useRef,useEffect,useState} from "react";
import contactusFunction from "../data/contactusFunc";
import contactMeNew from "../assets/contactMeNew.png";


import Footer from '../shared/Footer';

import { motion, useInView, useAnimation } from "framer-motion";

const Contact = () => {
  const myContactDetails = contactusFunction();



  //handle click the contact email
  const handleContact=(contactDetail)=>{
 // console.log(1,contactDetail.name)
    if(contactDetail.name===myContactDetails[0].name){
      //console.log("the email is ",contactDetail.name)
      //open a new window for email 
      window.location = 'mailto:jlsuhot@gmail.com?subject=Contact from portfolio'
    }
 
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls=useAnimation();
 
  useEffect(() => {
    if (isInView) {
    mainControls.start("visible");
   
    }
  }, [isInView]);
  return (
    <div ref={ref} className="text-myfontcolor  container-lg mx-auto dark:bg-backgroundcolor" id="contact">
     
        <motion.div className="p-8 mt-10"
           variants={{
            hidden: { opacity: 0, x:-20 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 2.5, ease: "easeInOut" }}>
          <h1 className="text-3xl font-robotomedium mt-10">Get in touch</h1>
        </motion.div>

        <div className="p-8  md:flex md:justify-evenly  ">
          <motion.div className=""
            variants={{
              hidden: { opacity: 0, x:-20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <div className="">
              <img
                src={contactMeNew}
                alt="contactMeImage"
                className="w-80 h-80 md:w-[85%] md:h-[90%]"
              />
            </div>
           
          </motion.div>
          {/* form */}
          <motion.div className=" p-2 md:w-1/2 md:p-8 md:mt-4"
            variants={{
              hidden: { opacity: 0, x:20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            {/* <form className=" rounded-md md:w-[100%] md:h-[100%] md:mx-2 border-secondarycolor border-2">
              <div className="p-4 ">
                <h1 className="text-2xl font-montserratmedium">
                  We're ready to say Hello!
                </h1>{" "}
              </div>
              <div className="p-4  ">
               
                <div className="py-2 md:py-4">
                  <input
                    className="rounded-md md:h-12 h-10 w-full px-2 text-md font-montserratregular bg-backgroundcolor ring-1 ring-secondarycolor focus:ring-2 hover:shadow-md hover:shadow-secondarycolor"
                    placeholder="Enter your name"
                    id="inputName"
                  />
                </div>
               
                <div className="py-2 md:py-4">
                  <input
                    className="rounded-md h-10 md:h-12 w-full px-2 font-montserratregular bg-backgroundcolor ring-1 ring-secondarycolor focus:ring-2 hover:shadow-md hover:shadow-secondarycolor"
                    placeholder="Enter your email"
                    id="inputEmail"
                  />
                </div>
               
                <div className="py-2 md:py-4">
                  <textarea
                    className="rounded-md h-24 md:h-28  w-full px-2 font-montserratregular bg-backgroundcolor ring-1 ring-secondarycolor focus:ring-2 hover:shadow-md hover:shadow-secondarycolor"
                    placeholder="Enter your message"
                    id="inputEmail"
                  />
                </div>
                <div className="  py-2">
                  <button className=" p-2  bg-primarycolor text-xl w-full font-montserratmedium text-backgroundcolor rounded-md flex justify-center hover:shadow-sm hover:shadow-primarycolor  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300" onClick={handleSubmit}>
                    Submit
                    <span className="  ">
                      <img src={sendSvg} alt="" className="px-2 justify-end " />
                    </span>
                  </button>
                </div>
              </div>
            </form> */}
            <h1 className="text-2xl font-semibold font-montserratregular">Want to get in touch? I'd love to hear from you. Here's how you can reach me.</h1>
             <div className="p-2 mt-4">
              {myContactDetails.map((contactDetail) => (
                <div className="   flex p-2   " key={contactDetail.id}>
                  <div className=" ">
                    <contactDetail.icon size={30} className="" />
                  </div>
                  <div className="  ">
                    <h1 className="px-2 font-montserratregular text-lg md:text-xl cursor-pointer" onClick={()=>handleContact(contactDetail)}>
                      {contactDetail.name}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
     
       <Footer/>
    </div>
  );
};

export default Contact;
