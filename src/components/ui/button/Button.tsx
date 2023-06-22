import React from "react";
import styles from "./Button.module.css";

type ButtonInputType = {
  children: React.ReactNode;
  type: "submit" | "button" | "reset" | undefined;
  onClick: Function;
};

const Button: React.FC<ButtonInputType> = (props) => {
  const { children, type } = props;

  function onClickHandler() {
    props.onClick();
  }
  return (
    <button className={styles.button} type={type} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
