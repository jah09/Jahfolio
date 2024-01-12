import React from "react";
import { v4 as uuidv4 } from "uuid";
function workexperiences() {

  const myWorkExp = [
    {
      id: uuidv4(),
      companyName:"Willies Web Design",
      companyAddress: "Cebu City, 6000",
      position:"Mobile Developer",
      dateHired:"July 2023- Present",
      description:"Develop mobile application using Android Studio. Convert UI design from Figma into codes. And perform other tasks.",
      techStack:"Android Studio"
    },
    // {
    //   id: uuidv4(),
    //   companyName:"Test lang sa",
    //   companyAddress: "Cebu City, 6000",
    //   position:"Mobile Developer",
    //   dateHired:"July 2023- Present",
    //   description:"Develop mobile application using Android Studio. Convert UI design from Figma into codes. And perform other tasks.",
    //   techStack:"Android Studio"
    // }
  ];

  return myWorkExp;
}

export default workexperiences;
