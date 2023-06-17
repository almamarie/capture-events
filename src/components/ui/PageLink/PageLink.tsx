import React from "react";
import styles from "./PageLink.module.css";
const PageLink: React.FC<{
  children: React.ReactNode;
  url: string;
  type: "background" | "no-background";
}> = (props) => {
  const { url, children, type } = props;

  const linkStyle = type == "background" ? styles["link--background"] : styles["link--no-background"]
  return (
    <a className={linkStyle} href={url} target="_blanc">
      {children}
    </a>
  );
};

export default PageLink;
