import React from "react";
import Styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => (
  <div className={Styles.Container}>
    <div className={Styles.ContactHeading}>
      <h5>Contact</h5>
    </div>
    <ul className={Styles.MediaSource}>
      <li className={Styles.SourceItem}>
        <FontAwesomeIcon icon="phone-square-alt" size="2x" />
      </li>
      <li className={Styles.SourceItem}>
        <FontAwesomeIcon icon="envelope" size="2x" />
      </li>
      <li className={Styles.SourceItem}>
        <a
          href="https://www.linkedin.com/in/febnov-du/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        </a>
      </li>
      <li className={Styles.SourceItem}>
        <a
          href="https://github.com/FebNov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
        </a>
      </li>
    </ul>
  </div>
);

export default Contact;
