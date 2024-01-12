import React from "react";
import {FaMapLocationDot,FaPhoneVolume} from 'react-icons/fa6'
import { v4 as uuidv4 } from "uuid";
import { MdEmail } from "react-icons/md";
function contactusFunction() {
  const myContact = [
    {
      id: uuidv4(),
      icon: MdEmail,
      name: "jlsuhot@gmail.com",
    },
    {
      id: uuidv4(),
      icon: FaPhoneVolume,
      name: "0907-508-7284",
    },
   
    {
      id: uuidv4(),
      icon: FaMapLocationDot,
      name: "Cebu City, 6000",
    },
    
   
  ];

  return myContact;
}

export default contactusFunction;
