import React from "react";
import "./index.css";
import Intro from "../Intro";
import Pill from "../Pill";

export const Personal = () => (
  <section className="section-personal">
    <Intro str="Personal skills" />
    <div className="content-container">
      <div className="skill-container">
        <ul>
          <Pill text="teamwork" classColor="yellow" />
          <Pill text="communication" classColor="green" />
          <Pill text="organization" classColor="red" />
        </ul>
      </div>
    </div>
  </section>
);

export default Personal;
