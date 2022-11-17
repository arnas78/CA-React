import React from "react";

export const Pill = ({ text, classColor }) => (
  <li>
    <p className={`skill-background background-${classColor}`}>{text}</p>
  </li>
);

export default Pill;
