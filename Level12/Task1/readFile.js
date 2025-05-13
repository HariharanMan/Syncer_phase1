const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log('Contents of sample.txt:\n');
  console.log(data);
});
