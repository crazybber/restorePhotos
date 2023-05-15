import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
//import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID|| "",
      clientSecret: process.env.GITHUB_SECRET|| "",
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
  ],
    // add random secret to options(安全验证和加密的必要参数)
    secret: process.env.NEXTAUTH_SECRET|| "",
};

export default NextAuth({
  ...authOptions,
});
