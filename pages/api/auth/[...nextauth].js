import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from 'axios';

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
            async authorize(credentials) {
                console.log(credentials);
                const { email, password, role, id } = credentials
                const url = id ? `${process.env.WEBSITE}/api/fetchData` : `${process.env.WEBSITE}/api/login`;
                const body = id ? { id, role } : { email, password, role };
                try {
                    const res = await axios.post(url, body, { headers: { 'Content-Type': 'application/json' } });
                    return res.data;
                } catch (error) {
                    throw new Error('Failed to authenticate');
                }
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
