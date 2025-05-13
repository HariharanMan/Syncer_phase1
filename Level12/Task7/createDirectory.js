const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'new_folder');

// Check if directory already exists
if (fs.existsSync(dirPath)) {
  console.log('⚠️ Directory "new_folder" already exists.');
} else {
  fs.mkdir(dirPath, (err) => {
    if (err) {
      console.error('❌ Error creating directory:', err.message);
      return;
    }
    console.log('✅ Directory "new_folder" created successfully.');
  });
}
