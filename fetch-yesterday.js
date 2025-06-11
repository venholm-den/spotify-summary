import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { getAccessToken } from "./utils/spotify.js";
import fetch from "node-fetch";

dotenv.config();

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const wrapWithHTML = (title, content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Yesterday's Spotify Listens</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    :root {
      --spotify-green: #1DB954;
      --bg: #f2f2f2;
      --text: #222;
      --card-bg: #ffffff;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: var(--bg);
      margin: 0;
      padding: 2rem;
      display: flex;
      justify-content: center;
    }

    .container {
      max-width: 800px;
      width: 100%;
      background: var(--card-bg);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: var(--spotify-green);
      text-align: center;
    }

    p {
      text-align: center;
      color: #555;
    }

    .track {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #ddd;
    }

    .track img {
      max-width: 100%;
      border-radius: 6px;
      margin-top: 0.5rem;
    }

    a {
      color: var(--spotify-green);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .duration {
      font-style: italic;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎧 Yesterday's Listening — 2025-06-10</h1>
    <p>Showing 36 tracks played between Tue, 10 Jun 2025 00:00:00 GMT and Wed, 11 Jun 2025 00:00:00 GMT</p>

    <!-- Track list here as-is from your original HTML -->

  </div>
</body>
</html>
`;

const getYesterdayRange = () => {
  const now = new Date();
  const end = new Date(now.setUTCHours(0, 0, 0, 0));
  const start = new Date(end);
  start.setUTCDate(end.getUTCDate() - 1);
  return { start, end };
};

const main = async () => {
  const accessToken = await getAccessToken({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    refreshToken: SPOTIFY_REFRESH_TOKEN,
  });

  const { start, end } = getYesterdayRange();

  const url = `https://api.spotify.com/v1/me/player/recently-played?limit=50`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await res.json();

  if (!data.items) {
    console.log("⚠️ No recent listening data.");
    return;
  }

  const tracks = data.items
    .filter(item => {
      const playedAt = new Date(item.played_at);
      return playedAt >= start && playedAt < end;
    })
    .map(item => item.track);

  if (tracks.length === 0) {
    console.log("⚠️ No tracks played yesterday.");
    return;
  }

  const content = `
    <h1>🎧 Yesterday's Listening — ${start.toISOString().split("T")[0]}</h1>
    <p>Showing ${tracks.length} tracks played between ${start.toUTCString()} and ${end.toUTCString()}</p>
    <div>
      ${tracks.map((track, i) => `
        <div class="track">
          <strong>${i + 1}. <a href="${track.external_urls.spotify}" target="_blank">${track.name}</a></strong><br />
          by ${track.artists.map(a => `<a href="${a.external_urls.spotify}">${a.name}</a>`).join(", ")}<br />
          <img src="${track.album.images[0]?.url}" alt="Album cover" />
          <div class="duration">⏱ ${formatDuration(track.duration_ms)}</div>
        </div>
      `).join("\n")}
    </div>
  `;

  fs.writeFileSync(path.join("output", "yesterday.html"), wrapWithHTML("Yesterday's Spotify Listens", content));
  console.log("✅ Yesterday's listening written to output/yesterday.html");
};

main();
