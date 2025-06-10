import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getAccessToken, getTopTracks } from "./utils/spotify.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const slug = (str) => str.toLowerCase().replace(/[^\w]+/g, "-");

const ensureOutputDir = () => {
  const outputDir = path.join(__dirname, "output");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
};

const generateStats = (tracks) => {
  const durations = tracks.map((t) => t.duration_ms);
  const avgDuration = formatDuration(
    durations.reduce((a, b) => a + b, 0) / durations.length
  );

  const artistCount = {};
  tracks.forEach((t) => {
    t.artists.forEach((a) => {
      artistCount[a.name] = (artistCount[a.name] || 0) + 1;
    });
  });

  const sortedArtists = Object.entries(artistCount).sort(
    (a, b) => b[1] - a[1]
  );
  const topArtists = sortedArtists.slice(0, 3).map(([name, count]) => `${name} (${count})`);

  return { avgDuration, topArtists };
};

const generateMarkdown = (tracks, stats, isoDate) => {
  const lines = [];

  lines.push(`# 🎧 Spotify Listening Summary`);
  lines.push(`_Last updated: ${isoDate}_`);
  lines.push(`\n## 📊 Summary Stats`);
  lines.push(`- Average Track Duration: ${stats.avgDuration}`);
  lines.push(`- Top Artists: ${stats.topArtists.join(", ")}`);

  lines.push(`\n## 🔝 Top Tracks\n`);

  tracks.forEach((track, i) => {
    const artists = track.artists
      .map((a) => `[${a.name}](${a.external_urls.spotify})`)
      .join(", ");
    const duration = formatDuration(track.duration_ms);
    const cover = track.album?.images?.[0]?.url;

    lines.push(`**${i + 1}.** [${track.name}](${track.external_urls.spotify}) by ${artists}`);
    lines.push(`![Album cover](${cover})`);
    lines.push(`⏱ Duration: ${duration}\n`);
  });

  return lines.join("\n");
};

const generateHTML = (markdownContent) => {
  const escaped = markdownContent
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Spotify Listening Summary</title>
  <style>
    body { font-family: sans-serif; padding: 2rem; line-height: 1.6; }
    img { max-width: 150px; margin-bottom: 1rem; }
    pre { background: #f0f0f0; padding: 1rem; }
  </style>
</head>
<body>
  <pre>${escaped}</pre>
</body>
</html>`;
};

const updateIndex = (filename) => {
  const outputPath = path.join(__dirname, "output");
  const files = fs
    .readdirSync(outputPath)
    .filter((f) => /^\d{4}-\d{2}\.md$/.test(f))
    .sort()
    .reverse();

  const links = files.map((f) => {
    const label = f.replace(".md", "");
    return `- [${label}](./${f})`;
  });

  const content = `# 🗂 Spotify Listening Summary Archive\n\n${links.join("\n")}`;
  fs.writeFileSync(path.join(outputPath, "index.md"), content);
};

const main = async () => {
  ensureOutputDir();

  const accessToken = await getAccessToken({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    refreshToken: SPOTIFY_REFRESH_TOKEN,
  });

  const tracks = await getTopTracks(accessToken);
  const isoDate = new Date().toISOString();
  const [year, month] = isoDate.split("T")[0].split("-");
  const filename = `${year}-${month}`;
  const mdPath = path.join(__dirname, `output/${filename}.md`);
  const htmlPath = path.join(__dirname, `output/${filename}.html`);

  if (!tracks || tracks.length === 0) {
    fs.writeFileSync(mdPath, `# 🎧 Spotify Listening Summary\n\n_Last updated: ${isoDate}_\n\n⚠️ No listening data available.`);
    return;
  }

  const stats = generateStats(tracks);
  const markdown = generateMarkdown(tracks, stats, isoDate);
  const html = generateHTML(markdown);

  fs.writeFileSync(mdPath, markdown);
  fs.writeFileSync(htmlPath, html);
  updateIndex(filename);

  console.log(`✅ Written: ${filename}.md and .html`);
};

main();
