const fs = require('fs');
const path = require('path');

// Path to the file you want stats for
const filePath = path.join(__dirname, 'test.txt');

// Get file statistics
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error('❌ Error retrieving file stats:', err.message);
    return;
  }

  console.log('📄 File Stats for:', filePath);
  console.log(`📦 Size: ${stats.size} bytes`);
  console.log(`📅 Created: ${stats.birthtime.toLocaleString()}`);
  console.log(`🕒 Last Modified: ${stats.mtime.toLocaleString()}`);
});
