import React from "react";
import styles from "./FooterLink.module.css";
import Link from "next/link";

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = (
  props
) => {
  return (
    <Link href={props.href} className={styles.link}>
      {props.children}
    </Link>
  );
};

export default FooterLink;
