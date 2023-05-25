import { getServerSession } from "next-auth";
import queryString from "query-string";
import { authOptions } from "./auth";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `	https://api.spotify.com/v1/me/top/tracks`;
const TOP_ARTISTS_ENDPOINT = `	https://api.spotify.com/v1/me/top/artists`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: queryString.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });
    const data = await response.json();
    // console.log(data.access_token);
    return data;
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();
    // console.log(access_token);
    const data = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 1 },
    }).then((res) => {
        if (res.status == 200) return res.json();
        return { is_playing: false };
    });
    return data;
};

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();
    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getUser = async () => {
    const { access_token } = await getAccessToken();
    const data = await fetch("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    }).then((res) => {
        if (res.status == 200) return res.json();
        return { user: null };
    });
    return data;
};

export const getUserPlaylists = async (userId: string) => {
    const { access_token } = await getAccessToken();
    const data = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists?limit=50`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    ).then((res) => {
        if (res.status == 200) return res.json();
        return { user: null };
    });
    return data;
};
export const getPlaylistDetails = async (playlistId: string) => {
    // const { access_token } = await getAccessToken();

    const session = await getServerSession(authOptions);
    const token = session?.user?.accessToken;

    const data = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    ).then((res) => {
        if (res.status == 200) return res.json();
        return { length: 0 };
    });
    return data;
};
