import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Hello, my Name is</h2>
          <h1 className="i-name">Suman Malla</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-end Development</div>
              <div className="i-title-item">Back-end Development</div>
              <div className="i-title-item">Full-Stack Development</div>
              <div className="i-title-item">UI/UX design</div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  );
};

export default Intro;
