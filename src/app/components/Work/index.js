import React from "react";
import "./index.css";
import Intro from "../Intro";
import WorkExperience from "../WorkExperience";

export const Work = (params) => (
  <section>
    <Intro str="Work experience" />
    <div className="work-container">
      <WorkExperience
        jobPosition="JOB POSITON"
        company="Company Name"
        timeLine="2018 - present"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel
          tempor lacinia. Suspendisse non augue."
        li={["Lorem ipsum dolor", "Consectetur adipiscing elit"]}
      />
      <WorkExperience
        jobPosition="JOB POSITON"
        company="Company Name"
        timeLine="2018 - present"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel
          tempor lacinia. Suspendisse non augue."
        li={["Lorem ipsum dolor", "Consectetur adipiscing elit"]}
      />
      <WorkExperience
        jobPosition="JOB POSITON"
        company="Company Name"
        timeLine="2018 - present"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel
          tempor lacinia. Suspendisse non augue."
        li={["Lorem ipsum dolor", "Consectetur adipiscing elit"]}
      />
    </div>
  </section>
);

export default Work;
