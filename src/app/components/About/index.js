import React from "react";
import "./index.css";
import Intro from "../Intro";

export const About = () => (
  <section className="section-about">
    <Intro str="About me" />
    <div>
      <p className="about-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vero
        eaque blanditiis beatae quidem esse voluptate dolores cumque rem ipsum
        corporis, nam reiciendis doloremque suscipit distinctio temporibus modi
        sapiente quibusdam tempora aspernatur, harum officiis consectetur
        molestias ullam. Perspiciatis facere asperiores blanditiis vitae
        corrupti mollitia earum similique soluta placeat enim consectetur quo
        doloribus fugiat voluptatum excepturi ad, sequi reiciendis animi
        maiores. Quae cumque aspernatur id quis repellat nihil possimus numquam
        necessitatibus qui?
      </p>
    </div>
  </section>
);

export default About;
