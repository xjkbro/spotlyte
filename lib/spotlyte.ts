import SpotifyWebApi from "spotify-web-api-node";

const LOGIN_URL =
    "https://accounts.spotify.com/authorize?scope=user-modify-playback-state%20user-read-playback-state%20user-read-private%20playlist-read-collaborative";

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
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
