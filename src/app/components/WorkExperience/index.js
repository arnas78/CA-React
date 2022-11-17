import React from "react";
import "./index.css";

const WorkExperience = ({ jobPosition, company, timeLine, text, li }) => {
  return (
    <div className="job-container job-container-middle">
      <div className="job-intro">
        <p>{jobPosition}</p>
        <p>{company}</p>
        <p>{timeLine}</p>
      </div>
      <div className="job-info">
        <p>{text}</p>
        <ul>
          {li.map((li) => (
            <li>{li}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
