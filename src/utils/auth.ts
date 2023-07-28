import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

// const sequelize = new Sequelize("captureevents", "postgres", "postgres", {
//   dialect: "postgres",
// });

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login/credentials`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: req.body?.email,
              password: req.body?.password,
            }),
          }
        );

        const userAuth = await response.json();

        // console.log("User: ", user);

        if (userAuth && userAuth.auth) {
          // Any object returned will be saved in `user` property of the JWT

          const user = userAuth.message;
          // console.log("User: ", user);
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("account: ", account?.provider === "google");

      // console.log("profile", profile);
      // console.log("email", email);
      // console.log("credentials", credentials);

      return true;
    },

    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },

    async redirect({ url, baseUrl }) {
      // console.log("Url", url);
      // console.log("baseUrl", baseUrl);

      if (url === "http://localhost:3000/auth/signup/partygoer") {
        return "http://localhost:3000/auth/signup/new-user/partygoer";
      }

      if (url === "http://localhost:3000/auth/signup/organiser") {
        return "http://localhost:3000/auth/signup/new-user/organiser";
      }

      if (url === "http://localhost:3000/auth/signup/photographer") {
        return "http://localhost:3000/auth/signup/new-user/photographer";
      }

      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log("Is new user: ", isNewUser);
      return { ...token, ...user, ...account, ...profile };
    },
  },

  pages: {
    newUser: "/auth/signup/google",
  },

  // events: {
  //   async createUser(message) {
  //     console.log("Create user: ", message);
  //   },
  // },
};
