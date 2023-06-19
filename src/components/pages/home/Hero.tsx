import PageLink from "@/components/ui/PageLink/PageLink";
import styles from "./Hero.module.css";
import Image from "next/image";
import React from "react";
import heroImage from "public/photographer_04.jpg";

const Hero = () => {
  return (
    <section className={`${styles.section} ${styles["hero-section"]}`}>
      <div className={styles["hero-text"]}>
        <h1 className="heading--primary">Access pictures from events</h1>
        <p>
          Easily access images from your events and photoshoots without stress
          and from the comfort of your home. Be in control.{" "}
        </p>
        <div>
          <PageLink url={"/auth"} type={"background"}>
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
  );
};

export default Hero;
