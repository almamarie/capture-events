"use client";
import { useParams } from "next/navigation";
import React from "react";

const SignUp = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.type}</div>;
};

export default SignUp;
