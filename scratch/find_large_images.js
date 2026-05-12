const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/BAHU Computers/Downloads/chauffeur service ksa/public';
const threshold = 100 * 1024; // 100KB

function findLargeImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      findLargeImages(filePath, fileList);
    } else if (/\.(jpe?g|png|webp|svg)$/i.test(file)) {
      if (stats.size > threshold) {
        fileList.push({
          path: filePath,
          size: (stats.size / 1024).toFixed(2) + ' KB'
        });
      }
    }
  });
  return fileList;
}

const largeImages = findLargeImages(publicDir);
console.log(JSON.stringify(largeImages, null, 2));
