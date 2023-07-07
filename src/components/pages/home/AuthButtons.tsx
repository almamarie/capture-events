"use client";
import PageLink from "@/components/ui/PageLink/PageLink";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Spinner from "@/components/ui/spinner/Spinner";
import styles from "./AuthButtons.module.css";
import Button from "@/components/ui/button/Button";

const AuthButtons = () => {
  const session = useSession();
  console.log("Session: ", session);

  const signoutHandler = () => {
    signOut();
  };

  if (session.status === "loading") {
    return (
      <div>
        <Spinner className={styles.loader} />
      </div>
    );
  }
  if (session.status === "authenticated") {
    return (
      <Button type={"button"} onClick={signoutHandler}>
        Sign out
      </Button>
    );
  }

  return (
    <>
      <PageLink url={"/api/auth/signin?"} type={"no-background"}>
        Login
      </PageLink>
      <PageLink url={"/auth"} type={"background"}>
        Sign up
      </PageLink>
    </>
  );
};

export default AuthButtons;
