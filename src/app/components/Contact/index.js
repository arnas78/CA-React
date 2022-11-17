import React from "react";
import "./index.css";
import ContactCard from "../ContactCard";

export const Contact = () => (
  <div class="contact-container content-container">
    <ContactCard
      type="adress"
      street="Imaginary St. 52,"
      city="Vilnius, Narnia"
    />
    <ContactCard
      type="contact"
      street={
        <a className="social-link" href="tel:+37060000333">
          +37060000333
        </a>
      }
      city={
        <a className="social-link" href="mailto:email@test.dev">
          email@test.dev
        </a>
      }
    />
    <ContactCard
      type="social"
      street={
        <a
          className="social-link"
          href="https://www.linkedin.com/"
          rel="noreferrer"
        >
          Linkedin/username
        </a>
      }
      city={
        <a className="social-link" href="https://twitter.com/" rel="noreferrer">
          Twitter/@user-handle
        </a>
      }
    />
  </div>
);

export default Contact;
