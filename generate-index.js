import fs from "fs";
import path from "path";

const folder = "./docs";
const files = fs.readdirSync(folder);
const htmlFiles = files.filter((f) => f.endsWith(".html") && f !== "index.html");

const links = htmlFiles
  .sort()
  .map(
    (file) =>
      `<li><a href="./${file}" target="_blank">${file.replace(".html", "")}</a></li>`
  )
  .join("\n");

const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spotify Listening Summary</title>
</head>
<body>
  <h1>🎧 Spotify Listening Summaries</h1>
  <ul>
    ${links}
  </ul>
</body>
</html>`;

fs.writeFileSync(path.join(folder, "index.html"), indexContent);
console.log("✅ index.html generated");
