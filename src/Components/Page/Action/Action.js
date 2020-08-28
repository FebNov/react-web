import React from "react";
import Styles from "./Action.module.css";

const Action = ({ className, children }) => (
  <div>
    <div className={Styles.DisplayText}>
      <div className={className}>{children}</div>
    </div>
  </div>
);
export default Action;
