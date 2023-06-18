import styles from "./EventOrganiser.module.css";
import Image from "next/image";
import React from "react";
import eventOrganiser from "public/event-organiser.jpg";
import PageLink from "@/components/ui/PageLink/PageLink";
import TextPartition, { TextPartitionType } from "./TextPartition";

const points: TextPartitionType[] = [
  {
    iconType: "register",
    heading: "",
    text: "Organise your event registration with ease.",
  },

  {
    iconType: "share",
    heading: "",
    text: "Share pictures with users with ease.",
  },
];

const EventOrganiser = () => {
  return (
    <section className={styles.section}>
      <Image
        className={styles.img}
        priority
        src={eventOrganiser}
        alt={"an excited event organiser"}
      />
      <div className={styles["text-block"]}>
        <h2 className="heading--secondary">
          <span className={styles["heading--normal"]}>This is how</span>
          <br />
          <span className={styles["heading--green"]}>
            good event organisers organise their events
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
            Start organising for free
          </PageLink>
        </span>
      </div>
    </section>
  );
};

export default EventOrganiser;
