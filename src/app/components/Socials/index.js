import React from "react";
import "./index.css";
import Link from "../Link";
import links from "../../data/links";

export const Socials = () => (
  <div>
    <ul className="socials">
      {links.map((link) => (
        <Link
          imgSrc={link.imgSrc}
          imgWidth={link.imgWidth}
          imgAlt={link.imgAlt}
          subtext={link.subtext}
        />
      ))}
    </ul>
  </div>
);

export default Socials;
