export const authEndpoint ="https://accounts.spotify.com/authorize";
const redirectUri="http://localhost:3000/";
const clientId = "a714624dff6d4c3a95c0ef9e85bff1e3";

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial,item) => {
        let parts = item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);

        return initial;
    },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&respone_type=token&show_dialog=true`;