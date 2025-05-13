const fs = require('fs');
const path = require('path');

const content = 'Hello, Node.js!';
const filePath = path.join(__dirname, 'output.txt');

fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err.message);
    return;
  }
  console.log('File written successfully!');
});
