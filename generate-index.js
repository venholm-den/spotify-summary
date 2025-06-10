import fs from 'fs';
import path from 'path';

const outputDir = './output';
const docsDir = './docs';
const files = fs.readdirSync(outputDir).filter(f => f.endsWith('.html'));

const links = files
  .sort()
  .reverse()
  .map(file => {
    const label = file.replace('.html', '');
    return `<li><a href="./${file}">${label}</a></li>`;
  })
  .join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Spotify Listening Summary</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    :root {
      --spotify-green: #1DB954;
      --bg: #f9f9f9;
      --text: #222;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 2rem;
      background: var(--bg);
      color: var(--text);
    }

    h1 {
      margin-bottom: 1rem;
      color: var(--text);
    }

    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      margin-bottom: 0.75rem;
    }

    a {
      text-decoration: none;
      color: var(--spotify-green);
      font-size: 1.1rem;
    }

    a:hover {
      text-decoration: underline;
    }

    .note {
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #666;
    }
  </style>
</head>
<body>
  <h1>🎧 Monthly Spotify Summaries</h1>
  <ul>
    ${links}
  </ul>
  <p class="note">Auto-generated and updated daily at 00:00 GMT.</p>
</body>
</html>`;

fs.writeFileSync(path.join(docsDir, 'index.html'), html);
console.log('✅ index.html generated.');
