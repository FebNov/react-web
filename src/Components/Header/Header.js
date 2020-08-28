import React from "react";
// import Logo from "../Logo";
import NavBar from "./Components/NavBar";
import Styles from "./Header.module.css";

const Header = () => (
  <section id="header" className={Styles.Header}>
    <NavBar />
  </section>
);

export default Header;
