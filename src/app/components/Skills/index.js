import React from "react";
import "./index.css";
import Intro from "../Intro";
import Pill from "../Pill";

export const Skills = () => (
  <section className="section-technical">
    <Intro str="Technical skills" />
    <div className="content-container">
      <div className="skill-container">
        <ul>
          <Pill text="html" classColor="green" />
          <Pill text="css" classColor="green" />
          <Pill text="javascript" classColor="yellow" />
          <Pill text="React.js" classColor="red" />
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
