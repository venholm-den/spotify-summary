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
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Spotify Listening Summary</title>
  </head>
  <body>
    <h1>🎧 Monthly Spotify Summaries</h1>
    <ul>
      ${links}
    </ul>
  </body>
</html>`;

fs.writeFileSync(path.join(docsDir, 'index.html'), html);
console.log('✅ index.html generated.');
