import React from "react";
import PageLink from "@/components/ui/PageLink/PageLink";
import styles from "./HomePage.module.css";
import Hero from "./Hero";
import Header from "./Header";
import Summary from "./Summary";
import EventOrganiser from "./EventOrganiser";
import Photographer from "./Photographer";
import Partygoers from "./Partygoers";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={`${styles.wrapper} body-main`}>
        <Hero />
        <Summary />
        <EventOrganiser />
        <Photographer />
        <Partygoers />
      </main>
    </div>
  );
};

export default HomePage;
