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
  <title>Spotify Listening Summaries</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      max-width: 700px;
      margin: 3rem auto;
      padding: 2rem;
      background-color: #f9f9f9;
      color: #111;
    }
    h1 {
      font-size: 2rem;
      color: #1DB954;
      margin-bottom: 0.5em;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 1rem 0;
    }
    a {
      font-size: 1.1rem;
      text-decoration: none;
      color: #1DB954;
      background: #e8f5e9;
      padding: 0.75rem 1rem;
      border-radius: 6px;
      display: inline-block;
      transition: background 0.2s ease;
    }
    a:hover {
      background: #d0ebdd;
    }
    footer {
      margin-top: 4rem;
      font-size: 0.9rem;
      color: #777;
    }
  </style>
</head>
<body>
  <h1>🎧 Monthly Spotify Listening Summaries</h1>
  <p>Click any month to explore your top tracks and stats.</p>
  <ul>
    ${links}
  </ul>
  <footer>Updated automatically every Monday · Powered by Spotify API + GitHub Actions</footer>
</body>
</html>`;

fs.writeFileSync(path.join(docsDir, 'index.html'), html);
console.log('✅ Stylish index.html generated.');
