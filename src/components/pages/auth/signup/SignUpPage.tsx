"use client";
import CredentialsForm from "./CredentialsForm";
import FacebookSignup from "./FacebookSignup";
import GoogleSignup from "./GoogleSignup";
import styles from "./SignUpPage.module.css";
import TwitterSignup from "./TwitterSignup";

type Props = {
  type: "photographer" | "partygoer" | "organiser";
};

const SignUpPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <CredentialsForm />
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
