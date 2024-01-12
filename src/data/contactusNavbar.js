import React from "react";
import {  BsLinkedin, BsGithub } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

const contactus = () => {
  const contact = [
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: BsLinkedin,
      url: "https://www.linkedin.com/in/jeahael-suhot-268314280"
    },
    {
        id: uuidv4(),
        name: "Github",
        icon: BsGithub,
        url: "https://github.com/jah09",
      },

      /* 
      
      
       {
      id: unique_id,
      url: "https://www.linkedin.com/in/jeahael-suhot-268314280",
      icon: BsLinkedin,
    },
    {
      id: unique_id,
      url: "https://github.com/jah09",
      icon: BsGithub,
    },*/
  ];
  return contact;
};

export default contactus;
