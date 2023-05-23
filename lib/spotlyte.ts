import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    "ugc-image-upload",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "app-remote-control",
    "streaming",
    "Playlists",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "user-follow-modify",
    "user-follow-read",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played",
    // "user-library-modify",
    "user-library-read",
    "user-read-email",
    "user-read-private",
    // "user-soa-link",
    // "user-soa-unlink",
    // "user-manage-entitlements",
    // "user-manage-partner",
    // "user-create-partner"
].join(",");
const params = {
    scopes,
};
const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    // redirectUri: "http://localhost:3000/callback",
});

export default spotifyApi;
export { LOGIN_URL };

export const getUser = async (accessToken: string) => {
    const data = await fetch("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }).then((res) => {
        // console.log(res);
        if (res.status == 200) return res.json();
        return { user: null };
    });
    return data;
};
