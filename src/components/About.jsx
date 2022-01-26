import React from "react";
import "./About.css";

const About = ({ hero }) => {
  return (
    <div className="About card">
      {hero.aboutMe.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p className="nameAbout"> {item.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
