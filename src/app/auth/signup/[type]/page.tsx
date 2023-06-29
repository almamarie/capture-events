"use client";
import SignUpPage from "@/components/pages/auth/signup/SignUpPage";
import { useParams } from "next/navigation";
import React from "react";

const SignUp = () => {
  const params = useParams();
  let type: "photographer" | "partygoer" | "organiser";
  if (
    params.type !== "photographer" &&
    params.type !== "partygoer" &&
    params.type !== "organiser"
  ) {
    type = "photographer";
  } else {
    type = params.type;
  }
  return <SignUpPage type={type} />;
};

export default SignUp;
