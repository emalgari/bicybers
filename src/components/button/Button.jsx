import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css";

const Button = ({text, to}) => {
  const scrollToTop = () => {
    window.scrollTo({
        x: 0,
        y: 0,
        behavior: "smooth"
    });
  };
 
  return (
    <Link to={to} className="d-flex justify-content-center align-items-center" style={{textDecoration:'none'}}>
        <button type="button" className="btn btn-outline btn-lg px-4 text-white" onClick={scrollToTop}>
            {text}
        </button>
    </Link>
  )
}

export default Button;