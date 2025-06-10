import fs from 'fs';
import path from 'path';

const outputDir = './output';
const docsDir = './docs';

// Make sure docsDir exists
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
}

// Get all HTML files from output/
const files = fs.readdirSync(outputDir).filter(f => f.endsWith('.html'));

// Copy each HTML file to docs/
files.forEach(file => {
  const src = path.join(outputDir, file);
  const dest = path.join(docsDir, file);
  fs.copyFileSync(src, dest);
});

// Generate index.html with links
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
console.log('✅ index.html and summaries copied to /docs.');
