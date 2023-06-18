import React from "react";
import styles from "./Summary.module.css";
import Image from "next/image";
import excitedClient from "public/excited-client.jpeg";
import TextPartition, { TextPartitionType } from "./TextPartition";
import PageLink from "@/components/ui/PageLink/PageLink";

const points: TextPartitionType[] = [
  {
    iconType: "free",
    heading: "Its FREE.",
    text: "There is no cost to join. Register for free and start using the service.",
  },

  {
    iconType: "group",
    heading: "Group Images with ease",
    text: "Group images based on some or all the participants of your event.",
  },

  {
    iconType: "organise",
    heading: "Organise and share your events with ease",
    text: "Organise your events, sell tickets, and share pictures with ease",
  },
];

const Summary = () => {
  return (
    <section className={styles.section}>
      <Image
        className={styles.img}
        priority
        src={excitedClient}
        alt={"an excited client"}
      />
      <div className={styles["text-block"]}>
        <h2 className="heading--secondary">Up your events for free</h2>
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

export default Summary;
