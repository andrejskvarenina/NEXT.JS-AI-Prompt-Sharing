import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

import { User as NextAuthUser, Profile as NextAuthProfile, Account as NextAuthAccount } from "next-auth";
import { AdapterUser as NextAuthAdapterUser } from "next-auth/adapters";

import User from '@models/user'
import { connectToDB } from "@utils/database";


type ExtendedProfile = NextAuthProfile & {
  name?: string;
  picture?: string;
};

type SignInType = {
  user: NextAuthUser | NextAuthAdapterUser;
  account: NextAuthAccount | null;
  profile?: ExtendedProfile;
  email?: { verificationRequest?: boolean };
  credentials?: Record<string, any>;
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    })
  ],
  callbacks: {
    // @ts-ignore
  async session({ session } : any) {
    const sessionUser = await User.findOne({
      email: session.user.email
    })

    session.user.id = sessionUser._id.toString();

    return session;
  },
  async signIn({ profile } : SignInType ) {

    if (!profile || !profile.name || !profile.picture) {
      console.log('Profile, name, or picture is not provided');
      return false;
    }
  
    try {
      await connectToDB();

      //check if user already exists
      const userExists = await User.findOne({
        email: profile.email
      });

      //if not, create a new User
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture
        })
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  }

  
})

export { handler as GET, handler as POST };