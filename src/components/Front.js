import React from "react";
import "./Front.css";
import Image from "./main.jpg";

const Front = () => {
  return (
    <div className="front-pic">
      <div className="mask">
        <img src={Image} alt="main-pic" className="main-img" />
      </div>
      <div className="content">
        <h2>Hello EveryOne I'm Suman</h2>
        <h1>I'm leraning Front-End Development</h1>
      </div>
    </div>
  );
};

export default Front;
