import React from "react";
import "./Intro.css";
import Picture from "./profile.png";

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
          <div className="i-description">
            👋 Hi there, I'm Suman Malla (@sumancoding) and I'm learning
            Fullstack development. My fondness with web space was pivotal for
            incepting this new career and I'm happy thus far. I've been using
            MERN stack for quite some time now and i'm still learning it. My
            inclination is more towards frontend side. I also enjoy wireframes,
            prototyping along with UI/UX design. Now adays i'm focusing more on
            the backend side. I'm looking for any kind of opportunities.I want
            to get started working by learning and sharing knowledge and
            experience.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-back"></div>
        <img src={Picture} alt="profile-pic" className="img" />
      </div>
    </div>
  );
};

export default Intro;
