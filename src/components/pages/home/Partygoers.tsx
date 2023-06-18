import styles from "./Partygoers.module.css";
import Image from "next/image";
import React from "react";
import partygoer from "public/partygoer.jpg";
import PageLink from "@/components/ui/PageLink/PageLink";
import TextPartition, { TextPartitionType } from "./TextPartition";

const points: TextPartitionType[] = [
  {
    iconType: "register",
    heading: "",
    text: "register for events with ease.",
  },

  {
    iconType: "access",
    heading: "",
    text: "access your pictures without having to chase down photographers..",
  },
];

const Partygoers = () => {
  return (
    <section className={styles.section}>
      ``
      <Image
        className={styles.img}
        priority
        src={partygoer}
        alt={"an excited event organiser"}
      />
      <div className={styles["text-block"]}>
        <h2 className="heading--secondary">
          <span className={styles["heading--normal"]}>True</span>
          <br />
          <span className={styles["heading--green"]}>
            partygoers enjoy parties and also document them.
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
            Register for free
          </PageLink>
        </span>
      </div>
    </section>
  );
};

export default Partygoers;
