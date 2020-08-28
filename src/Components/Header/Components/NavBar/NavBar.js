import React from "react";
import Styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";

const Navbar = () => (
  <div className={Styles.NavBarContainer}>
    <div className={Styles.Top}>
      <a className={Styles.TopContent} href="#header">
        D
      </a>
    </div>
    <div className={Styles.NavBar}>
      <NavBarItem href="Home">Home</NavBarItem>
      <NavBarItem href="About">About</NavBarItem>
      <NavBarItem href="Project">Project</NavBarItem>
      <NavBarItem href="Contact">Contact</NavBarItem>
      <NavBarItem href="Resume">Resume</NavBarItem>
    </div>
  </div>
);
export default Navbar;
