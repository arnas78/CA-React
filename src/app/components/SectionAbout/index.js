import React from "react";
import "./index.css";
import Links from "../Links";
import About from "../About";
import Education from "../Education";
import Personal from "../Personal";
import Skills from "../Skills";

export const SectionAbout = () => (
  <section className="grid-about">
    <Links />
    <About />
    <Education />
    <Personal />
    <Skills />
  </section>
);

export default SectionAbout;
