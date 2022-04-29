import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              {" "}
              <FaHome
                size={25}
                style={{ color: "white", marginRight: "2rem" }}
              />
              Yo-kylä 10 D, 20540, Turku
            </h4>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={25}
                style={{ color: "white", marginRight: "2rem" }}
              />{" "}
              +358401640654
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={25}
                style={{ color: "white", marginRight: "2rem" }}
              />
              progress.suman@gmail.com
            </h4>
          </div>

          <div className="github">
            <h4>
              {" "}
              <FaGithub
                size={25}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <a href="  https://github.com/sumancoding">
                {" "}
                https://github.com/sumancoding{" "}
              </a>
            </h4>
          </div>

          <div className="linkedin">
            <h4>
              {" "}
              <FaLinkedin
                size={25}
                style={{ color: "white", marginRight: "1rem" }}
              />
              <a href=" https://www.linkedin.com/in/sumanmalla4994/">
                {" "}
                https://www.linkedin.com/in/sumanmalla4994/
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            Hello everyone. First of all, thank you for taking your time to find
            me out. My name is Suman Malla. I did my full stack training program
            from Turku University. I've also been coding from CodeAcademy. I'm
            looking for any opportunities to work in IT field. I'm extremely
            hardworking, passionate and motivated and I want to grow in this
            industry. Please contact me in case you want to hear more from me.
            Im looking forward for your help and cooperation and I want to
            contribute towards the growth of your company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
