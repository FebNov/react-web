import React, { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Aos from "aos";
import "aos/dist/aos.css";
import Project from "./Project";
import Resume from "./Resume";
import ScrollingColorBackground from "react-scrolling-color-background";
import Styles from "./Page.module.css";
const Page = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <ScrollingColorBackground
        selector=".js-color-stop[data-background-color]"
        colorDataAttribute="data-background-color"
        initialRgb="rgb(0, 0, 0)"
        className={Styles.Fix}
      />

      <section
        data-background-color="rgb(32, 202, 172)"
        className="js-color-stop"
        id="home"
      >
        <Home />
      </section>

      <section
        data-background-color="rgb(60, 191, 246)"
        className="js-color-stop"
        id="about"
      >
        <div data-aos="fade-up">
          <About />
        </div>
      </section>
      <section
        data-background-color="rgb(60, 191, 246)"
        className="js-color-stop"
        id="project"
      >
        <div data-aos="fade-left">
          <Project />
        </div>
      </section>
      <section
        data-background-color="rgb(60, 191, 246)"
        className="js-color-stop"
        id="contact"
      >
        <div data-aos="fade-right">
          <Contact />
        </div>
      </section>
      <section
        data-background-color="rgb(60, 191, 246)"
        className="js-color-stop"
        id="resume"
      >
        <div data-aos="fade-up">
          <Resume />
        </div>
      </section>
    </div>
  );
};
export default Page;
