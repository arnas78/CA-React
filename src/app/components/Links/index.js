import React from "react";
import "./index.css";
import Intro from "../Intro";
import Socials from "../Socials";

export const Links = (params) => (
  <section className="section-links">
    <Intro str="Socials" />
    <Socials />
  </section>
);

export default Links;
