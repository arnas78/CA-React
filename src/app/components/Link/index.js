import React from "react";

export const Link = ({ imgSrc, imgWidth, imgAlt, subtext }) => (
  <li>
    {/* <img src={require(`${imgSrc}`)} width={imgWidth} alt={imgAlt} /> */}
    <img src={imgSrc} width={imgWidth} alt={imgAlt} />
    <p className="link-text">{subtext}</p>
  </li>
);

export default Link;
