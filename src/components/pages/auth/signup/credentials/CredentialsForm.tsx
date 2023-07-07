import Button from "@/components/ui/button/Button";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import styles from "./CredentialsForm.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context";

interface Props {
  setIsLoading: Dispatch<SetStateAction<Boolean>>;
  userType: "photographer" | "partygoer" | "organiser";
}

const CredentialsForm: React.FC<Props> = (props) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const setIsLoading = props.setIsLoading;

  const router = useRouter();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setError("File size exceeds the limit of 5MB.");
      return;
    }
    if (file) {
      setError(null);
      setSelectedImage(file);
    }
  };

  const formSubmitHandler = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // router.push(`/api/auth/signin`);
    try {
      setIsLoading(true);
      const formData = new FormData(event.target);

      setError(null);

      if (selectedImage === null) {
        throw new Error("profile picture is required");
      }

      formData.append("esternalId", "");
      formData.append("authType", "credentials");
      formData.append("userType", props.userType);

      const response = await credentialsSignUp(formData);

      console.log("Response: ", response);
      router.push(`/api/auth/signin`);
    } catch (error) {
      if (selectedImage === null) {
        setError("profile picture is required");
      } else {
        setError("an error occured");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      {error && <span className={styles.error}>{error}</span>}
      <label htmlFor="file-input" className={styles["label--image-input"]}>
        <div className={styles["image-wrapper"]}>
          {selectedImage === null && icons["person"]}
          {selectedImage && (
            <Image
              src={URL.createObjectURL(selectedImage)}
              //   fill
              width={"150"}
              height={"150"}
              className={styles.image}
              alt="Selected profile"
            />
          )}
        </div>
        <input
          id="file-input"
          className={styles["file-input"]}
          type="file"
          accept=".png, .jpg, .jpeg"
          name="profilePicture"
          onChange={handleImageChange}
        />
        <span className={styles["image-desc"]}>
          click to upload profile picture
        </span>
      </label>
      <input
        required
        className={styles.input}
        type="text"
        placeholder="Full Name"
        name="fullName"
      />
      <input
        required
        className={styles.input}
        type="email"
        placeholder="email"
        name="email"
      />
      <input
        required
        className={styles.input}
        type="password"
        placeholder="password"
        name="password"
        minLength={8}
      />

      <Button type={"submit"}> Create Account </Button>
    </form>
  );
};

export default CredentialsForm;

const icons = {
  person: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={styles.icon}
    >
      <path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm.654 370Q398-80 325-111.5q-73-31.5-127.5-86t-86-127.266Q80-397.532 80-480.266T111.5-635.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5-848.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5-325q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480-140q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z" />
    </svg>
  ),
};

const credentialsSignUp = async (formData: FormData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup/credentials`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
