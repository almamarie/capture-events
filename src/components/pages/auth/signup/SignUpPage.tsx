"use client";
import Spinner from "@/components/ui/spinner/Spinner";
import CredentialsForm from "./credentials/CredentialsForm";
import FacebookSignup from "./FacebookSignup";
import GoogleSignup from "./GoogleSignup";
import styles from "./SignUpPage.module.css";
import TwitterSignup from "./TwitterSignup";
import { useState } from "react";

type Props = {
  type: "photographer" | "partygoer" | "organiser";
};

const SignUpPage: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div className={styles["spinner-wrapper"]}>
          <Spinner className={styles.spinner} />
        </div>
      )}
      <CredentialsForm setIsLoading={setIsLoading} userType={props.type} />
      <span className={styles.or}>or</span>

      <div className={styles["social-icons"]}>
        <GoogleSignup />
        <FacebookSignup />
        <TwitterSignup />
      </div>
    </div>
  );
};

export default SignUpPage;
