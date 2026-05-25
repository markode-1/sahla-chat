const fs = require('fs');
const path = require('path');

// Create missing directories
const dirs = [
  'd:\\sahla-ai\\app\\(auth)\\callback',
  'd:\\sahla-ai\\app\\(auth)\\forgot-password',
  'd:\\sahla-ai\\app\\(auth)\\verify-email',
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created: ${dir}`);
  }
});

console.log('Done!');
