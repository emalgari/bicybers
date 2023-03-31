import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import Logo from "../../assets/Logo.png";

const Footer = () => {  
   
    return (
    <footer className="text-white py-5 px-2">
        <div className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-12 col-sm-3 mb-5 mb-sm-0">
                    <Link to="/"><img src={Logo} width="50%" alt="Logo" /></Link>
                </div>

                <div className="col-12 col-sm-3 mb-5 mb-sm-0" >
                    <h6 className="text-uppercase font-weight-bold">Quick Links</h6>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/CyberSecurity/">Cyber Security</Link></li>
                        <li><Link to="/DigitalForensics/">Digital Forensics</Link></li>
                        <li><Link to="/AboutUs/">About Us</Link></li>
                        <li><Link to="/ContactUs/">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="col-12 col-sm-5 mb-5 mb-sm-0 fs-6">
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <p>
                        # 331, 3rd floor, <br/>
                        Khudadad Heights, Sector E11 <br/>
                        Islamabad, Pakistan <br/>
                        Phone: (+92) 3369191711<br/>
                        Email: info@bicybers.com
                        
                    </p>
                </div>

            </div>
            
        </div>
    </footer>
)
};

export default Footer;
