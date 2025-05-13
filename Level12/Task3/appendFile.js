const fs = require('fs');
const path = require('path');

const additionalContent = 'More content here.';

const filePath = path.join(__dirname, 'output.txt');

fs.appendFile(filePath, additionalContent, 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file:', err.message);
    return;
  }
  console.log('Content appended successfully!');
});
