const fs = require('fs');
const path = require('path');

// Define source and destination file names
const oldPath = path.join(__dirname, 'original.txt');
const newPath = path.join(__dirname, 'renamed.txt');

// Rename the file
fs.rename(oldPath, newPath, (err) => {
  if (err) {
    console.error('❌ Error renaming file:', err.message);
    return;
  }
  console.log('✅ File renamed successfully from original.txt to renamed.txt');
});
