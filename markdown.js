const fs = require('fs');
const showdown = require('showdown');

// Read the content of index.md
const markdown = fs.readFileSync('index.md', 'utf-8');

// Configure the converter
const converter = new showdown.Converter();
converter.setOption('tables', true); // Enable table support if needed

// Convert Markdown to HTML
const html = converter.makeHtml(markdown);

// Write the HTML content to index.html
fs.writeFileSync('index.html', html);
