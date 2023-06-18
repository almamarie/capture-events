import styles from "./Photographer.module.css";
import Image from "next/image";
import React from "react";
import photographer from "public/photographer.jpg";
import PageLink from "@/components/ui/PageLink/PageLink";
import TextPartition, { TextPartitionType } from "./TextPartition";

const points: TextPartitionType[] = [
  {
    iconType: "register",
    heading: "",
    text: "Group images on the click of a button or have the system automatically do it.",
  },

  {
    iconType: "group",
    heading: "",
    text: "Group images on the click of a button or have the system automatically do it.",
  },

  {
    iconType: "share",
    heading: "",
    text: "Share pictures with users with ease",
  },
];

const Photographer = () => {
  return (
    <section className={styles.section}>
      <div className={styles["text-block"]}>
        <h2 className="heading--secondary">
          <span className={styles["heading--normal"]}>This is how</span>
          <br />
          <span className={styles["heading--green"]}>
            photographers group their pictures
          </span>
        </h2>
        <ul className={styles.partitions}>
          {points.map((point, index) => {
            return (
              <TextPartition
                key={index}
                iconType={point.iconType}
                heading={point.heading}
                text={point.text}
              />
            );
          })}
        </ul>
        <span>
          <PageLink url={"#"} type={"background"}>
            Start grouping for free
          </PageLink>
        </span>
      </div>
      <Image
        className={styles.img}
        priority
        src={photographer}
        alt={"a photoshoot"}
      />
    </section>
  );
};

export default Photographer;
