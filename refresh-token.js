import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const code = "AQB4m5KV54W2ELitetqdFyZ_9auAoLKOPxjdTDcoCm0yQlq3NjW9A4MnbUGc5KGasDFzQelWPbP3CCGjNjlkQ42sHmjB-bO0AmeFodOBLDEje0IZJ-Unc0aqRkb3tTgtkSLp1yRLUoWjezDmVjH6Y0A6Gba13l88SrUMNxOIKzFnVE4KQRQs-9tX24hrhqjqUWRa0bdn10Z_2O3OJoQ02ByNlsk";

const getRefreshToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    }),
  });

  const data = await response.json();
  console.log("🎉 Token response:\n", data);
};

getRefreshToken();
