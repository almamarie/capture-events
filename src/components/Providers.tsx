"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = (props) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default Providers;
