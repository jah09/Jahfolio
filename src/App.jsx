import Warrior from "./Practice/Warrior";
import Anal from "./Practice/Anal";
import NewsLetter from "./Practice/NewsLetter";
import Cards from "./Practice/Cards";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from './components/ScrollToTop';
import TechnologyUsed from "./components/TechnologyUsed";
import WorkExperience from "./components/WorkExperience";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AppContext=createContext();
function App() {
    //show the toast message
  const showToastMessage = () => {
    toast.warning("No link available!", {
      position: toast.POSITION.TOP_RIGHT,
      className:"toast-message",
      autoClose:1000
    });
  };

  return (
    
    <div className="dark:bg-backgroundcolor">
      {/* <h1 className="text-3xl font-bold underline">Hello worlds!</h1> */}
      {/* <h1 className="text-4xl text-blue-600 font-bold underline">Hello world</h1> */}
      {/* practice */}
      {/* <Navbar />
      <Warrior />
      <Anal />
      <NewsLetter />
      <Cards />
      <Footer /> */}
      <AppContext.Provider value={{showToastMessage}}> 
      <Router>
        {/* <ScrollToTop/> */}
        <Navbar />
        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Home />
        <About/>
        <TechnologyUsed/>
        <WorkExperience/>
        <Projects/>
        <Contact/>
       
        {/* <Footer/> */}
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
