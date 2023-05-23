import type { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "@/lib/spotlyte";

const refreshAccessToken = async (token: any) => {
    try {
        spotifyApi.setAccessToken(token.accessToken);
        spotifyApi.setRefreshToken(token.refreshToken);
        const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
        // console.log("Refreshed: " + refreshedToken);
        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
        };
    } catch (error) {
        // console.log(error);
        return {
            ...token,
            error: "RefreshAccessTokenError",
        };
    }
};

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: LOGIN_URL,
        }),
    ],
    secret: process.env.JWT_SECRET,
    // pages: {
    //     signIn: "/login",
    // },
    callbacks: {
        async jwt({ token, account, user, profile }) {
            // console.log("=======JWT=========");
            // console.log(token);
            // console.log(account);
            // console.log(user);
            // console.log(profile);
            // console.log("=======JWT=========");

            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    /* @ts-expect-error Server Component */
                    accessTokenExpires: account.expires_at * 1000,
                };
            }
            /* @ts-expect-error Server Component */
            if (Date.now() < token.accessTokenExpires) {
                return token;
            }

            return await refreshAccessToken(token);
        },
        async session({ session, token, user }) {
            // console.log("=======SESSION=========");
            // console.log(session);
            // console.log(token);
            // console.log(user);
            // console.log("=======SESSION=========");
            /* @ts-expect-error Server Component */
            session.user.accessToken = token.accessToken;
            /* @ts-expect-error Server Component */
            session.user.refreshToken = token.refreshToken;
            /* @ts-expect-error Server Component */
            session.user.username = token.username;
            /* @ts-expect-error Server Component */
            session.user.id = token.sub;

            return session;
        },
    },
};
