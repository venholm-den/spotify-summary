import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { getAccessToken, getTopTracks } from "./utils/spotify.js";

dotenv.config();

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

const wrapWithHTML = (title, content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 2rem auto;
      max-width: 800px;
      padding: 1rem;
      line-height: 1.6;
    }
    h1, h2 {
      color: #222;
    }
    .track {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #ddd;
    }
    .duration {
      font-style: italic;
      color: #555;
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin-top: 0.5rem;
    }
    a {
      color: #1DB954;
      text-decoration: none;
    }
  </style>
</head>
<body>
  ${content}
</body>
</html>
`;

const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const main = async () => {
  const accessToken = await getAccessToken({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    refreshToken: SPOTIFY_REFRESH_TOKEN,
  });

  const tracks = await getTopTracks(accessToken);
  if (!tracks || tracks.length === 0) {
    console.log("⚠️ No listening data available.");
    return;
  }

  const now = new Date();
  const label = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const outputPath = path.join("output", `${label}.html`);

  // Calculate stats
  const avgMs = Math.round(tracks.reduce((acc, t) => acc + t.duration_ms, 0) / tracks.length);
  const avgDuration = formatDuration(avgMs);
  const artistCount = {};
  tracks.forEach(track => {
    track.artists.forEach(artist => {
      artistCount[artist.name] = (artistCount[artist.name] || 0) + 1;
    });
  });
  const topArtists = Object.entries(artistCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => `${name} (${count})`)
    .join(", ");

  const trackHTML = tracks.map((track, i) => `
    <div class="track">
      <strong>${i + 1}. <a href="${track.external_urls.spotify}" target="_blank">${track.name}</a></strong><br/>
      by ${track.artists.map(a => `<a href="${a.external_urls.spotify}" target="_blank">${a.name}</a>`).join(", ")}<br/>
      <img src="${track.album.images[0]?.url}" alt="Album cover" />
      <div class="duration">⏱ Duration: ${formatDuration(track.duration_ms)}</div>
    </div>
  `).join("\n");

  const contentHTML = `
    <h1>🎧 Spotify Listening Summary</h1>
    <p><em>Last updated: ${now.toISOString()}</em></p>

    <h2>📊 Summary Stats</h2>
    <ul>
      <li>Average Track Duration: ${avgDuration}</li>
      <li>Top Artists: ${topArtists}</li>
    </ul>

    <h2>🔝 Top Tracks</h2>
    ${trackHTML}
  `;

  fs.writeFileSync(outputPath, wrapWithHTML(`Spotify Listening Summary - ${label}`, contentHTML));
  console.log(`✅ Written to ${outputPath}`);
};

main();
