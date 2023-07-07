import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
      id: number;
      externalId: number | null;
      name: string;
      email: string;
      profilePicture: string;
      authType: "credentials" | "google" | "facebook";
      userType: "photographer" | "partygoer" | "organiser";
    };
  }
}
