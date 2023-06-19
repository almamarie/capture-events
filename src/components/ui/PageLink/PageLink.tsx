import React from "react";
import styles from "./PageLink.module.css";
import Link from "next/link";
const PageLink: React.FC<{
  children: React.ReactNode;
  url: string;
  type: "background" | "no-background";
  target?: "_blanc" | "_parent" | "_self" | "top";
}> = (props) => {
  const { url, children, type, target = "_self" } = props;

  const linkStyle =
    type == "background"
      ? styles["link--background"]
      : styles["link--no-background"];
  return (
    <Link className={linkStyle} href={url} target={target}>
      {children}
    </Link>
  );
};

export default PageLink;
