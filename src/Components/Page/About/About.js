import React from "react";
import Styles from "./About.module.css";
const About = () => (
  <section id="about">
    <div className={Styles.Container}>
      <h3>Summary</h3>
      <ul className={Styles.List}>
        <li>
          <h3>Core rule</h3>
        </li>
        <li className={Styles.Item}>Readable</li>
        <li className={Styles.Item}> Maintainable</li>
        <li className={Styles.Item}>Reuseable</li>
      </ul>
    </div>
  </section>
);

export default About;
