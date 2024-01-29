import React, { useRef, useEffect } from "react";
import Certification from "../data/certificationData";
import { motion, useInView, useAnimation } from "framer-motion";
import certificationStyles from "../componentstyle/certificationStyle.css";
const Certifications = () => {
  const myCertification = Certification();
  const handleClickImage = (item) => {
    window.open(item.certificationImage, "_blank", "noreferrer");
  };
  const certRef = useRef(null);
  const isInView_Cert = useInView(certRef, { once: true });
  const certControls = useAnimation();
  useEffect(() => {
    if (isInView_Cert) {
      certControls.start("visible");
    }
  }, [isInView_Cert]);
  return (
    <div className="   md:h-full  md:w-[60%] ">
      <section
        ref={certRef}
        className=" grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2  max-md:grid-cols-2"
      >
        {myCertification.map((item) => (
          <motion.div
            className="bg-backgroundcolor cursor-pointer hover:transition transition hover:-translate-y-1  hover:bg-secondarycolor border-secondarycolor border-2 rounded-md p-4 md:mx-auto mt-2 animate glow delay-3"
            key={item.id}
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

            <h1 className="mt-2 font-montserratmedium max-sm:text-md max-sm:text-center text-lg md:text-xl md:text-center max-md:text-center lg:text-center">
              {item.certificationName}
            </h1>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Certifications;
