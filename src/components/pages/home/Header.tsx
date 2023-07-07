"use client";
import styles from "./Header.module.css";
import React from "react";
import AuthButtons from "./AuthButtons";

const Header = async () => {
  return (
    <header className={styles.header}>
      <h2 className={`heading--secondary ${styles.name}`}>capture events</h2>
      <div className={styles["auth-buttons"]}>
        <AuthButtons />
      </div>
    </header>
  );
};

export default Header;
