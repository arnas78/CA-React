import React from "react";

export const EducationCard = ({ name, year, degree }) => (
  <div className="degree-container">
    <p>{name}</p>
    <p>{year}</p>
    <p>{degree}</p>
  </div>
);

export default EducationCard;
