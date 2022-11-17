import React from "react";
import Underline from "../Underline";
import "./index.css";

export const Intro = ({ str }) => (
  <div className="section-intro">
    <h2>{str}</h2>
    <Underline />
  </div>
);

export default Intro;
