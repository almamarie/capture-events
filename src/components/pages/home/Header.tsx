import PageLink from "@/components/ui/PageLink/PageLink";
import styles from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={`heading--secondary ${styles.name}`}>capture events</h2>
      <div className={styles["auth-buttons"]}>
        <PageLink url={"#"} type={"no-background"}>
          Login
        </PageLink>
        <PageLink url={"#"} type={"background"}>
          Sign up
        </PageLink>
      </div>
    </header>
  );
};

export default Header;
