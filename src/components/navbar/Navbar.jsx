import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarclassName, setNavbarclassName] = useState("navbar navbar-expand-lg navbar-light");

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  // const handleScroll = () => {
  //   if (window.pageYOffset > 300) {
  //     setNavbarclassName("navbar navbar-expand-lg navbar-light fixed-top");
  //   } else {
  //     setNavbarclassName("navbar navbar-expand-lg navbar-light");
  //   };
  // };

  const handleToggle = () => {
  setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
  setIsOpen(false);
  };

  return (
    <nav className= {navbarclassName}>

      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <button className="navbar-toggler bg-transparent" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" type="button" onClick={handleToggle}>

         <span className="navbar-toggler-icon"></span>
         
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>

          <ul className="navbar-nav ms-auto gap-lg-5 d-sm-flex justify-content-sm-center align-items-sm-center">

            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/" 
              onClick={handleLinkClick}>Home</Link>
            </li>

            <li className="nav-item dropdown">

              <Link className="nav-link dropdown-toggle text-white" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </Link>

              <ul className="dropdown-menu bg-transparent" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item text-white" to="CyberSecurity" onClick={handleLinkClick}>Cyber Security</Link></li>
                <li><Link className="dropdown-item text-white" to="DigitalForensics" onClick={handleLinkClick}>Digital Forensics</Link></li>
              </ul>

            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/AboutUs" onClick={handleLinkClick}>About Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/ContactUs" onClick={handleLinkClick}>Contact Us</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
