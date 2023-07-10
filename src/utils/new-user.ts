export const createNewUser = async (user: any, userType: string) => {
  //   console.log("Creating new User user", user);
  if (
    !(
      userType === "photographer" ||
      userType === "organiser" ||
      userType === "partygoer"
    )
  ) {
    console.log("Returning pop");
    return;
  }
  const data = createUserData(userType, user.provider, user);

  console.log("user data", data);
  const response = await sendData(data);

  console.log(response);

  return response;
};

const sendData = async (UserData: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UserData),
    }
  );

  return await response.json();
};

const createUserData = (
  userType: "photographer" | "organiser" | "partygoer",
  authType: any,

  user: any
) => {
  if (authType === "google" || authType == "facebook") {
    return {
      externalId: user.id,
      fullName: user.name,
      email: user.email,
      profilePicture: user.image,
      authType: authType,
      userType: userType,
    };
  }
};
