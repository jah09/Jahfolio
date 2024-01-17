import React, { useEffect, useState } from "react";
import MyPortfolioLogo from "../assets/myportfolio_logo192.png";
import MyPortfolioLogo2 from "../assets/myportfolio_logo192_2.png";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FaCloudMoon } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const [isNavClick, setIsNavClickk] = useState(false);
  const handleNavClick = () => {
    setIsNavClickk(!isNavClick);
  };
  console.log("Navbar rendered");

  //dark mode
  const [darkMode, setDarkMode] = useState(true);

  //darkMode state will alternate between true and false.
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  useEffect(()=>{
    if(darkMode===true){
        document.documentElement.classList.add("dark");

    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[darkMode])
  /*   onClick={() =>
          window.alert("Light mode is not available for now. Thank you!")
        } */
  return (
    <div className="container-lg text-myfontcolor w-full h-20 mx-auto px-4 items-center  flex justify-between shadow-secondarycolor shadow-md sticky top-0 max-sm:bg-backgroundcolor  z-50 dark:bg-backgroundcolor bg-backgroundcolor ">
      <div className="w-full cursor-pointer">
        <a href="">
        <img
          src={MyPortfolioLogo}
          alt="myportfoliologo"
          className="h-14 w-14 "
        />
        </a>
       
      </div>
      <div
        className="text-myfontcolor p-2 mb-2 mx-4 cursor-pointer"
        onClick={toggleDarkMode}
      >
      
       {darkMode?  <BsFillCloudSunFill size={20} />:<FaCloudMoon size={20}/>}
      </div>

      <div className="tracking-wider text-myfontcolor font-bold md:flex hidden font-montserratsemibold cursor-pointer ">
        <ScrollLink
          to="home"
          className="p-4 navbarLink "
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
        >
          Home
        </ScrollLink>
        {/* old if-> about project contact */}
        <ScrollLink
          to="about"
          className="p-4 navbarLink"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="project"
          className="p-4 navbarLink"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Project
        </ScrollLink>
        <ScrollLink
          to="contact"
          className="p-4 navbarLink"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </ScrollLink>
      </div>
      <div onClick={handleNavClick} className="block md:hidden cursor-pointer">
        {isNavClick ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      {/* for mobile screen */}
      <div
        className={
          isNavClick
            ? "bg-secondarycolor p-4 fixed left-0 top-0 w-80 font-montserratsemibold h-full "
            : " fixed left-[-100%]"
        }
      >
        <div className="">
          <img
            src={MyPortfolioLogo2}
            alt="myportfoliologo"
            className="h-14 w-14 "
          />
        </div>
        <div className="flex flex-col my-11 tracking-wider cursor-pointer">
          <ScrollLink
            to="home"
            className="py-4 navbarLink navbarLinkMobile"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            className="py-4 navbarLink navbarLinkMobile "
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="project"
            className="py-4 navbarLink navbarLinkMobile "
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Project
          </ScrollLink>
          <ScrollLink
            to="contact"
            className="py-4 navbarLink navbarLinkMobile "
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </ScrollLink>
        </div>
        {/* <div className="flex flex-col my-11 tracking-wider">
          <Link to="/" className="py-4 navbarLinkMobile ">
            Home
          </Link>
          <Link to="/about" className="py-4  navbarLinkMobile ">
            About
          </Link>
          <Link to="/project" className="py-4  navbarLinkMobile ">
            Project
          </Link>
          <Link to="/contact" className="py-4 navbarLinkMobile ">
            Contact
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
