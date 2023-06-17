import React from "react";
import PageLink from "@/components/ui/PageLink/PageLink";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
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
      <main className={`${styles.wrapper} body-main`}></main>
    </div>
  );
};

export default HomePage;
