import React from "react";
import PageLink from "@/components/ui/PageLink/PageLink";
import styles from "./HomePage.module.css";
import Image from "next/image";
import heroImage from "public/photographer_04.jpg";

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
      <main className={`${styles.wrapper} body-main`}>
        <section className={`${styles.section} ${styles["hero-section"]}`}>
          <div className={styles["hero-text"]}>
            <h1 className="heading--primary">Access pictures from events</h1>
            <p>
              Easily access images from your events and photoshoots without
              stress and from the comfort of your home. Be in control.{" "}
            </p>
            <div>
              <PageLink url={"#"} type={"background"}>
                Get started
              </PageLink>
            </div>
          </div>
          <Image
            priority
            src={heroImage}
            className={styles["hero-img"]}
            alt={"photograper taking a picture of a client"}
          />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
