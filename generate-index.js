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
      --bg: #f2f2f2;
      --text: #222;
      --card-bg: #ffffff;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 2rem;
      background: var(--bg);
      color: var(--text);
      display: flex;
      justify-content: center;
    }

    .container {
      max-width: 600px;
      width: 100%;
      background: var(--card-bg);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    h1 {
      margin-bottom: 1.5rem;
      color: var(--spotify-green);
      text-align: center;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 1rem;
    }

    a {
      display: block;
      padding: 1rem;
      background-color: var(--spotify-green);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s ease;
      text-align: center;
    }

    a:hover {
      background-color: #17a44a;
    }

    .note {
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #666;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎧 Monthly Spotify Summaries</h1>
    <ul>
      <li><a href="./yesterday.html">Yesterday</a></li>
      <li><a href="./2025-06.html">June 2025</a></li>
    </ul>
    <p class="note">Auto-generated and updated daily at 00:00 GMT.</p>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(docsDir, 'index.html'), html);
console.log('✅ index.html generated.');
