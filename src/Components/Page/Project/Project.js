import React from "react";
import Cards from "./Cards";
import Styles from "./Project.module.css";
import Example from "./D.png";
const Project = () => (
  <section id="project" className={Styles.Container}>
    <div className={Styles.Group}>
      <div className={Styles.Item}>
        <Cards src={Example} alt="Example Img" title="Example">
          This is example
        </Cards>
      </div>
      <div className={Styles.Item}>
        <Cards src={Example} alt="Example Img" title="Example">
          This is example6
        </Cards>
      </div>{" "}
      <div className={Styles.Item}>
        <Cards src={Example} alt="Example Img" title="Example">
          This is example6
        </Cards>
      </div>{" "}
      <div className={Styles.Item}>
        <Cards src={Example} alt="Example Img" title="Example">
          This is example6
        </Cards>
      </div>{" "}
      <div className={Styles.Item}>
        <Cards src={Example} alt="Example Img" title="Example">
          This is example6
        </Cards>
      </div>{" "}
      <div className={Styles.Item}>
        <Cards src={Example} alt="Example Img" title="Example">
          This is example6
        </Cards>
      </div>{" "}
      <div className={Styles.Item}>
        <Cards src={Example} alt="Example Img" title="Example">
          This is example6
        </Cards>
      </div>
      <div className={Styles.Item}>
        <Cards src={Example} alt="Example Img" title="Example">
          This is example6
        </Cards>
      </div>
    </div>
  </section>
);

export default Project;
