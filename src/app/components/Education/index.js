import React from "react";
import "./index.css";
import Intro from "../Intro";
import EducationCard from "../EducationCard";

export const Education = () => (
  <section className="section-education">
    <Intro str="Education" />
    <div className="content-container">
      <EducationCard name="SCHOOL NAME" year="2009 - 2013" degree="Degree" />
      <hr className="education-line" />
      <EducationCard name="SCHOOL NAME" year="2009 - 2013" degree="Degree" />
    </div>
  </section>
);

export default Education;
