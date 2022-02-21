import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
//  const prisma = new PrismaClient();
import { primsa } from "../../../prisma/prisma";
export default NextAuth({
  adapter: PrismaAdapter(primsa),
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: `${process.env.G_CLIENT_ID}`,
      clientSecret: `${process.env.G_CLIENT_SECRET}`,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "", // Absolute URL to image
  },
});
