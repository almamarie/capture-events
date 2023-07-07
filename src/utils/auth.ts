import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { NextApiRequest, NextApiResponse } from "next";

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
          console.log("User: ", user);
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
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return { ...token, ...user, ...account, ...profile };
    },
  },
};

export async function loginIsRequiredServer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(authConfig);
  if (!session) return res.redirect("/");
}

// export async function loginIsRequiredClient() {
//   if (typeof window !== "undefined") {
//     const session = useSession();
//     const router = useRouter();

//     router.push("/");
//   }
// }
