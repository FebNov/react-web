import React from "react";
import Styles from "./NavbarItem.module.css";

const NavbarItem = ({href, children}) => (
  <a className={Styles.item} href={href}>
    {children}
  </a>
);

export default NavbarItem;
