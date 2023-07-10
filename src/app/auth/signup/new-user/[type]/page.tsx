"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { createNewUser } from "@/utils/new-user";

const NewUser = () => {
  const [error, setError] = useState<string | null>(null);
  const session = useSession();
  const { data } = session;
  const params = useParams();
  const ref = useRef<boolean>(false);
  const router = useRouter();

  const createUser = async (): Promise<Boolean> => {
    let response;

    if (!data) {
      return false;
    }
    console.log("Here", data);

    try {
      if (
        data.user.provider === "google" ||
        data.user.provider === "facebook"
      ) {
        response = await createNewUser(data.user, params.type);
      }

      if (!response.auth) {
        console.log("response.auth");
        setError(response.message);
        return false;
      }

      return true;
    } catch (error) {
      setError("An error occured");
      return false;
    }
  };

  useEffect(() => {
    if (!data || ref.current) {
      console.log("current is true", ref.current);
      return;
    }
    createUser().then((result) => {
      console.log("result", result);

      ref.current = true;

      if (result) {
        router.push("/");
      }
    });
  });

  return (
    <div>
      {params.type}
      {error}
    </div>
  );
};

export default NewUser;
