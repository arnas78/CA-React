import React from "react";
import "./index.css";

export const ContactCard = ({ type, street, city }) => (
  <div class="contact-info">
    <h2>{type}</h2>
    <p>{street}</p>
    <p>{city}</p>
  </div>
);

export default ContactCard;
