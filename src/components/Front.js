import React from "react";
import { Link } from "react-router-dom";
import "./Front.css";
import Image from "./pics/main.jpg";

const Front = () => {
  return (
    <div className="front-pic">
      <div className="mask">
        <img src={Image} alt="main-pic" className="main-img" />
      </div>
      <div className="content">
        <p>HI, I'M SUMAN</p>
        <h1>Learning FullStack Development</h1>
        <div>
          <Link to="/projects" className="btn">
            Download my resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Front;
