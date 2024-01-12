import React from "react";
import { v4 as uuid } from "uuid";
import stillWorkingImage from "../assets/workInProgress.png";
import dailyRoutineImage from '../assets/projectsImage/dailyRoutineBudd.jpg';
import jalidaland from '../assets/projectsImage/jalidaland.jpg';
import movieWavezImage from '../assets/projectsImage/MovieWavez_Home_Activity.png'
import tubigLogin from '../assets/projectsImage/tubigloginimage.png';
import garboogleLoginImage from '../assets/projectsImage/Garboogle_Login_Activity.png';
import newSurgeImage from '../assets/projectsImage/Newsurge_LandingActivity.png'
import dailyAgendaImage from '../assets/projectsImage/DailyAgenda_Login_Activity.png';
function projects() {
  // id:unique_id,
  const projects = [
    {
      id: uuid(),
      description:
      "Capstone Project. Many features for this project. Click Github to see more details about the project. ",
      techStack: [
        {
          id: uuid(),
          techName: "React Native",
        },
        {
          id: uuid(),
          techName: "Css",
        },
        {
          id: uuid(),
          techName: "Firebase",
        },
        {
          id: uuid(),
          techName: "GCP",
        },
      ],
      image: tubigLogin,
      projectName: "2big Web and Mobile App",
      githubRepo: "https://github.com/jah09/2bigCustomerReporn",
      liveDemo: "",
    },
    {
      id: uuid(),
      description:
        "Personal project. Just like a ToDo list, that can add daily routine. Edit the item and can delete. Understanding also the react hooks.",
      techStack: [
        {
          id: uuid(),
          techName: "ReactJs",
        },
        {
          id: uuid(),
          techName: "Tailwind Css",
        },
      ],
      image: dailyRoutineImage,
      projectName: "Daily Routine Budd",
      githubRepo: "https://github.com/jah09/dailyroutinebud",
      liveDemo: "https://jah09.github.io/dailyroutinebud/",
    },
    {
      id: uuid(),
      description:
        "Personal project. Search your favorite movie. Also, a practice in how to use fetch in React. Understand the response from the API.",
      techStack: [
        {
          id: uuid(),
          techName: "ReactJs",
        },
        {
          id: uuid(),
          techName: "Css",
        },
      ],
      image: jalidaland,
      projectName: "JalidaLand",
      githubRepo: "https://github.com/jah09/jalida",
      liveDemo: "https://jah09.github.io/jalida/",
    },
    
    {
      id: uuid(),
      description:
        "Personal project. Search your favorite movie  and get the result. Understand the retrofit/REST API using Android Studio.",
      techStack: [
        {
          id: uuid(),
          techName: "Android Studio",
        },
        {
          id: uuid(),
          techName: "Firebase",
        },
        {
          id: uuid(),
          techName: "Java",
        },
        {
          id: uuid(),
          techName: "Retrofit",
        },
      ],
      
      image: movieWavezImage,
      projectName: "MovieWavez",
      githubRepo: "https://github.com/jah09/movie_wavez",
      liveDemo: "",
    },
    {
      id: uuid(),
      description:
        "Personal project. Basic functionality Create,Read,Update and Delete about garbage article.",
      techStack: [
        {
          id: uuid(),
          techName: "Android Studio",
        },
        {
          id: uuid(),
          techName: "Firebase",
        },
        {
          id: uuid(),
          techName: "Java",
        },
       
      ],
      
      image: garboogleLoginImage,
      projectName: "Garboogle",
      githubRepo: "https://github.com/jah09/Garboogle",
      liveDemo: "",
    },
    {
      id: uuid(),
      description:
        "Personal project. Search news, and get the result. Understand the REST API/Retrofit using Android Studio.",
      techStack: [
        {
          id: uuid(),
          techName: "Android Studio",
        },
        {
          id: uuid(),
          techName: "Firebase",
        },
        {
          id: uuid(),
          techName: "Java",
        },
        {
          id: uuid(),
          techName: "Retrofit",
        },
       
      ],
      
      image: newSurgeImage,
      projectName: "NewsSurge360",
      githubRepo: "https://github.com/jah09/news_surge360",
      liveDemo: "",
    },
    {
      id: uuid(),
      description:
        "Personal project. ToDo list, can create, read, update and delete your To Do items.",
      techStack: [
        {
          id: uuid(),
          techName: "Android Studio",
        },
        {
          id: uuid(),
          techName: "Firebase",
        },
        
        {
          id: uuid(),
          techName: "Firebase Storage",
        },
       
       
      ],
      
      image: dailyAgendaImage,
      projectName: "Daily Agenda",
      githubRepo: "https://github.com/jah09/daily-agenda",
      liveDemo: "",
    },
  ];
  return projects;
}

export default projects;
