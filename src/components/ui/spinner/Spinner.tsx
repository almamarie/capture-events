import React from "react";
import styles from "./Spinner.module.css";

const Spinner: React.FC<{ className?: string }> = (props) => {
  return <div className={`${styles.loader} ${props.className}`}></div>;
};

export default Spinner;
