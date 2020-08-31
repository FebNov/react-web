import React from "react";
import Styles from "./About.module.css";
const About = () => (
  <section id="about">
    <div className={Styles.Container}>
      <h3>Summary </h3>
      <div className={Styles.List}>
        <ul className={Styles.List}>
          <li className={Styles.Item}>
            Extensive commercial experience in web development
          </li>
          <li className={Styles.Item}>
            Great analytical and problem-solving skill
          </li>
          <li className={Styles.Item}>Constantly learner</li>
          <li className={Styles.Item}>Good interpersonal skill</li>
          <li className={Styles.Item}>Efficient team player</li>
          <li className={Styles.Item}>An agile, positive, adaptable person</li>
        </ul>

        <h4 className={Styles.AboutSubHeading}>Objective:</h4>

        <p className={Styles.Item}>
          Follow these Readable, Reusable, Maintainable rules to generate
          high-quality code
        </p>
      </div>
    </div>
  </section>
);

export default About;
