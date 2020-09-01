import React, { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Aos from "aos";
import "aos/dist/aos.css";
import Project from "./Project";
const Page = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Home />
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-left">
        <Project />
      </div>
      <div data-aos="fade-right">
        <Contact />
      </div>
      <div data-aos="fade-up"></div>
    </div>
  );
};
export default Page;
