import NextAuth, { NextAuthOptions } from "next-auth";
import GitHub from 'next-auth/providers/github'
//import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID|| "264bba926420ec1c1808",
      clientSecret: process.env.GITHUB_SECRET|| "95211ac80e6b1a75455534af26a0dba06d9ad891",
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
  ],
};

export default NextAuth({
  ...authOptions,
});
