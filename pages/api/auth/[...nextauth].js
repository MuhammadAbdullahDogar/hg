import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {

                const { email, password, role, log } = credentials
                console.log(email, password, role);
                let res;
                if (role == "candidate") {
                    res = await fetch(`${process.env.WEBSITE}/api/candidate/login`, {
                        method: 'POST',
                        credentials: 'include', // Don't forget to specify this if you need cookies
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password , log})
                    });
                }

                const user = await res.json();
                console.log(res);
                console.log("ccccccccccccccc");
                console.log(user);
                console.log("ccccccccccccccc");

                if (res.status === 200) {
                    return user;
                }
                else
                    return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;
            return session;
        },
    },
}

export default NextAuth(authOptions)