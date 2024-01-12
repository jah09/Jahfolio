import React from "react";
import myPortfolioLogo from "../assets/myportfolio_logo192.png";
import resources from "../data/resources";
import contactus from "../data/contactusNavbar";
const Footer = () => {
  //assign the function to a new variable
  const myResources = resources();
  const contactUs = contactus();
  return (
    <div className="text-myfontcolor  border-t-2  border-secondarycolor mt-12  p-4">
      <div className="grid grid-cols-1 md:grid-cols-3  "> 
      <div className=" flex  p-1">
        <h1 className="text-2xl font-montserratmedium">Jafolio</h1>

        <img
          src={myPortfolioLogo}
          alt="myportfoliologo"
          className="h-8 w-8 mx-2"
        />
      </div>
      {/* Resources  I use*/}
      <div className=" p-1 my-4 md:my-0">
        <h1 className="text-lg font-montserratmedium"> RESOURCES</h1>

        {myResources.map((resource) => (
          <a
          key={resource.id}
          onClick={()=>window.open(resource.resourcesLink,'_blank', 'noreferrer')}
            className=" w-28 py-1 flex flex-col  text-md font-montserratregular hover:border-b-2 hover:border-accentcolor hover:max-w-fit cursor-pointer"
          >
            {resource.resourcesName}
          </a>
        ))}
      </div>
      {/* Contact us  */}
      <div className="  p-1">
        <h1 className="text-lg font-montserratmedium">CONTACT US</h1>
        <div className="">
          {contactUs.map((contact) => ( 
            <a
            key={contact.id}
              className="flex items-center py-1  w-28 cursor-pointer"
              onClick={()=>window.open(contact.url,'_blank', 'noreferrer')}
             // href={()=>{window.open(contact.url,'_blank', 'noreferrer')}}
            >
              <contact.icon size={20} className="" />
              <h1 className="text-md mx-2 font-montserratregular hover:border-b-2 hover:border-accentcolor">
                {contact.name}{" "}
              </h1>
            </a>
          ))}
        </div>
      </div>
      </div>

      {/* Copy right*/}
      <div className=" p-1 mt-4">
        <hr className="border-secondarycolor md:w-96 mx-auto"/>
        <div className="p-1 flex justify-center mt-2 "> 
          <h1 className="font-montserratsemibold">© 2023 - Jafolio. All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
