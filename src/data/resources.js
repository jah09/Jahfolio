import React from "react";
import { v4 as uuidv4 } from 'uuid';
const resources = () => {
  const resources = [{
    id:uuidv4(),
    resourcesName:"React Js",
    resourcesLink:"https://react.dev/"
  },{
    id:uuidv4(),
    resourcesName:"Tailwind CSS",
    resourcesLink:"https://tailwindcss.com/"
  }

];
  return resources;
};

export default resources;
