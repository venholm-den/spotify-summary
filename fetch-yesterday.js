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


const generateTrackHTML = (track, index) => {
  const artistLinks = track.artists.map(
    artist => `<a href="${artist.url}">${artist.name}</a>`
  ).join(', ');

  return `
    <div class="track">
      <strong>${index + 1}. <a href="${track.url}" target="_blank">${track.name}</a></strong><br/>
      by ${artistLinks}<br/>
      <img alt="Album cover" src="${track.image}"/>
      <div class="duration">⏱ ${track.duration}</div>
    </div>
  `;
};


const wrapWithHTML = (title, content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <style>
    body {
      font-family: sans-serif;
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
      line-height: 1.6;
    }
    h1 { color: #222; }
    .track { margin-bottom: 1.5rem; }
    img { max-width: 100%; height: auto; border-radius: 6px; margin-top: 0.5rem; }
    .duration { color: #555; font-style: italic; }
  </style>
</head>
<body>
  ${content}
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
