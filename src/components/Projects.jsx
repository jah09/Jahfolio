import React ,{useContext,useRef,useEffect,useState} from "react";
import MyProjects from "../data/projects";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import projectStyle from '../componentstyle/projectStyle.css';
import { AppContext } from "../App";
import {motion} from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';
const Projects = () => {
  const [animate, setAnimate] = useState(false);
  const {showToastMessage}=useContext(AppContext); //acess the context from the AppContext in App.jsx
  const projects = MyProjects();

  //handle click of live demo
  const handleClickLiveDemo = (project) => {
    
    if (project.liveDemo === "") {
     //window.alert("No link available.");
     showToastMessage();
    } else {
      window.open(project.liveDemo, "_blank", "noreferrer");
    }
  };

  //handle click of github repo
  const handleClickGithubRepo=(project)=>{
    if (project.githubRepo === "") {
      window.alert("No link available.");
    } else {
      window.open(project.githubRepo, "_blank", "noreferrer");
    }
  }
  //handle click the image
  const handleClickImage=(project)=>{
    window.open(project.image, "_blank", "noreferrer");
  }

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("Scrolling...");
      // console.log(sectionRef.current);
      // You can adjust the offset and duration as needed
      if (sectionRef.current && window.scrollY + window.innerHeight >= sectionRef.current.offsetTop-100) {
        setAnimate(true);
        // Trigger the animation when the section comes into view
        // Here, you can use Framer Motion's animate method or set a state to trigger animations
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className=" text-myfontcolor  container-lg mx-auto tracking-wide leading-relaxed dark:bg-backgroundcolor"
      id="project"
    >
      <motion.div className="p-8 mt-20  w-48"
        initial={{opacity:0, x:-20}}
       
        transition={{ duration: 2.5, ease: "easeInOut" }}
        animate={animate ? { opacity: 1, x: 0 } : {}}
        ref={sectionRef} 
      >
        <h1 className="text-3xl font-robotomedium ">Projects</h1>
      </motion.div>
      <div className="p-8 max-lg:grid-cols-4 grid grid-rows-4 grid-cols-1   max-md:grid-cols-1   gap-4 md:grid-cols-2 lg:grid-cols-3  md:grid-rows-1  sm:grid-cols-1">
        {projects.map((project) => (
          <motion.div
            className=" hover:transition transition hover:-translate-y-1 border-secondarycolor border-2 hover:bg-secondarycolor  md:w-[102%] sm:w-[85%] max-md:mx-auto max-sm:w-[95%]  p-4 rounded-md group animate glow delay-3  md:bg-red-900 lg:bg-green-900 max-sm:bg-blue-900 sm:border-green-400 "
            key={project.id}
           
          >
            <div className="flex justify-center   ">
              <a onClick={()=>handleClickImage(project)} className="cursor-pointer">
              <img
                src={project.image}
                alt="projectImage"
               
                className=" rounded-md w-full h-80 object-cover object-center  transition-all duration-500 transform hover:scale-[106%]"
              />
              </a>
            </div>
            <div className=" mt-8">
              <h1 className="font-montserratsemibold text-xl py-1">
                {project.projectName}
              </h1>
              <h1 className="text-md font-montserratregular py-1 ">
                {project.description}
              </h1>
            </div>

            <div className="mt-6  py-1">
              <div className="flex ">
                {project.techStack.map((proj) => (
                  <h1
                    className="bg-secondarycolor text-myfontcolor m-1 p-1 rounded-md text-sm font-montserratmedium group-hover:bg-backgroundcolor max-sm:text-sm md:text-center  max-sm:text-center sm:text-center"
                    key={proj.id}
                  >
                    {proj.techName}
                  </h1>
                ))}
              </div>

              {/* <div>
                   <h1 className="text-sm font-montserratregular ">{proj.techStack.}</h1>
                 </div> */}
            </div>
            <div className=" p-2 flex justify-end ">
              <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110 m-2 bg-secondarycolor p-1 rounded-md group-hover:bg-backgroundcolor">
                <a onClick={()=>handleClickGithubRepo(project)}>
                  <BsGithub size={25} />
                </a>
              </div>
              <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110   m-2 p-1 bg-secondarycolor rounded-md group-hover:bg-backgroundcolor">
                <a onClick={() => handleClickLiveDemo(project)}>
                  <BsArrowUpRight size={25} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
