import fetch from "node-fetch";

export async function getAccessToken({ clientId, clientSecret, refreshToken }) {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

export async function getTopTracks(accessToken) {
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.json();
  return data.items || [];
}
