import React from "react";
import styles from "./PageLink.module.css";
const PageLink: React.FC<{ children: React.ReactNode; url: string }> = (
  props
) => {
  const { url, children } = props;
  return (
    <a className={styles.link} href={url} target="_blanc">
      {children}
    </a>
  );
};

export default PageLink;
