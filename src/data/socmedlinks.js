import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import {BsTwitter,BsLinkedin,BsGithub} from 'react-icons/bs';

const socmedlinks  = [
    
    {
      id:uuidv4(),
      url: "https://www.linkedin.com/in/jeahael-suhot-268314280",
      icon: BsLinkedin,
    },
    {
      id:uuidv4(),
      url: "https://github.com/jah09",
      icon: BsGithub,
    },
  ];

export default socmedlinks
