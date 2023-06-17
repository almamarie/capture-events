import React from "react";
import PageLink from "@/components/ui/PageLink/PageLink";
import styles from "./HomePage.module.css";
import Hero from "./Hero";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={`${styles.wrapper} body-main`}>
        <Hero />
      </main>
    </div>
  );
};

export default HomePage;
