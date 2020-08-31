import React from "react";
import Styles from "./ProjectItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectItem = ({ imgsrc, imgalt, title, category, src }) => (
  <div className={Styles.ItemContainer}>
    <img src={imgsrc} alt={imgalt}></img>
    <div className={Styles.Item}>
      <div className={Styles.ItemTitle}>{title}</div>
      <div className={Styles.ItemCategory}>{category}</div>
      <div className={Styles.ItemButton}>
        <div className={Styles.ButtonView}>
          <FontAwesomeIcon icon="Eye" />
        </div>
        <div className={Styles.ButtonDivider}></div>
        <div className={Styles.ButtonLink}>
          <a target="_blank" href={src} rel="noopener noreferrer">
            <i className="fas fa-link cover_icon"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default ProjectItem;
