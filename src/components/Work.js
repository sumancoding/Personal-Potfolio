import "./Work.css";
import React from "react";
import Dashboard from "./pics/e-dashboard.PNG";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">SOME OF MY RECENT PROJECTS</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={Dashboard} alt="images" />
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>This is text</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View the code
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

{
  /* <NavLink to="url.com" className="btn">
  View the code
</NavLink>; */
}
