import { v4 as uuidv4 } from 'uuid';
import html from '../assets/techUsedSVG/html.svg';
import css from '../assets/techUsedSVG/css.svg';
import javascript from '../assets/techUsedSVG/js.svg';
import reactnative from '../assets/techUsedSVG/reactnative.svg';
import reactjs from '../assets/techUsedSVG/reactjs.svg';
import csharp from  '../assets/techUsedSVG/csharp.svg';
import c from  '../assets/techUsedSVG/c.svg';
import xamarin from  '../assets/techUsedSVG/xamarin.svg';
import wordpress from  '../assets/techUsedSVG/wordpress.svg';
import tailwind from  '../assets/techUsedSVG/tailwind.svg';
import firebase from  '../assets/techUsedSVG/firebase.svg';
import git from  '../assets/techUsedSVG/git.svg';
import github from  '../assets/techUsedSVG/github.svg';
import androidstudio from  '../assets/techUsedSVG/androidstudio.svg';
import mysql from '../assets/techUsedSVG/mysql.svg';
import figma from '../assets/techUsedSVG/figma.svg';
function techused(){

 
    const technologiesUsed = [
        {
          id:uuidv4(),
          techName: "Html",
          techIcon: html,
          techLink:"https://www.w3schools.com/html/default.asp"
        },
        {
          id:uuidv4(),
          techName: "Css",
          techIcon: css,
          techLink:"https://www.w3schools.com/css/default.asp"
        },
        {
          id:uuidv4(),
          techName: "Javascript",
          techIcon: javascript,
          techLink: "https://www.w3schools.com/js/default.asp"
        },
        {
          id:uuidv4(),
          techName: "React Native",
          techIcon: reactnative,
           techLink: "https://reactnative.dev/docs/getting-started"
        },
        {
          id:uuidv4(),
          techName: "ReactJs",
          techIcon: reactjs,
          techLink: "https://react.dev/learn"
        },
        {
          id:uuidv4(),
          techName: "C#",
          techIcon: csharp,
          techLink: "https://www.w3schools.com/cs/index.php"
        },
        {
          id:uuidv4(),
          techName: "C",
          techIcon: c,
          techLink: "https://www.w3schools.com/c/index.php"
        },
        {
          id:uuidv4(),
          techName: "Xamarin",
          techIcon: xamarin,
          techLink: "https://learn.microsoft.com/en-us/xamarin/"
        },
        {
          id:uuidv4(),
          techName: "Wordpress",
          techIcon: wordpress,
          techLink: "https://wordpress.org/"
        },
        {
          id:uuidv4(),
          techName: "Mysql",
          techIcon: mysql,
          techLink: "https://dev.mysql.com/doc/"
        },
        {
          id:uuidv4(),
          techName: "Tailwind",
          techIcon: tailwind,
          techLink: "https://tailwindcss.com/"
        },
        {
          id:uuidv4(),
          techName: "Firebase",
          techIcon: firebase,
          techLink: "https://firebase.google.com/docs"
        },
        {
          id:uuidv4(),
          techName: "Git",
          techIcon: git,
          techLink: "https://git-scm.com/doc"
        },
        {
          id:uuidv4(),
          techName: "Github",
          techIcon: github,
          techLink: "https://docs.github.com/en"
        },
        {
          id:uuidv4(),
          techName: "Android Studio",
          techIcon: androidstudio,
          techLink: "https://developer.android.com/docs"
        },
        {
          id:uuidv4(),
          techName: "Figma",
          techIcon: figma,
          techLink: "https://help.figma.com/hc/en-us"
        },
      ];
      return technologiesUsed;
      console.log("line 26",technologiesUsed);
    
}

export default techused;
