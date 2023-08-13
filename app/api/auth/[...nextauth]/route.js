import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientID: "",
      clientSecret: "",
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
