import dotenv from "dotenv";
import fs from "fs";
import { getAccessToken, getTopTracks } from "./utils/spotify.js";

dotenv.config();

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

const main = async () => {
  const accessToken = await getAccessToken({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    refreshToken: SPOTIFY_REFRESH_TOKEN,
  });

  const tracks = await getTopTracks(accessToken);

  console.log("🎧 Fetched tracks:", tracks?.length || 0);
  if (!tracks || tracks.length === 0) {
    fs.writeFileSync(
      "./output/summary.md",
      `# 🎧 Spotify Listening Summary\n\n_Last updated: ${new Date().toISOString()}_\n\n⚠️ No listening data available.`
    );
    return;
  }

  const markdown = `# 🎧 Spotify Listening Summary\n\n_Last updated: ${new Date().toISOString()}_\n\n` +
    tracks
      .map((track, i) => {
        const artists = track.artists.map((a) => a.name).join(", ");
        return `**${i + 1}.** [${track.name}](${track.external_urls.spotify}) by ${artists}`;
      })
      .join("\n");

  fs.writeFileSync("./output/summary.md", markdown);
  console.log("✅ summary.md written.");
};

main();
