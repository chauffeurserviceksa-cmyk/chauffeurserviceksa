const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/BAHU Computers/Downloads/chauffeur service ksa/public';
const threshold = 100 * 1024; // 100KB

async function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      await optimizeImages(filePath);
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      if (stats.size > threshold) {
        const ext = path.extname(file);
        const baseName = path.basename(file, ext);
        const outputFilePath = path.join(dir, baseName + '.webp');
        
        console.log(`Optimizing: ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
        
        try {
          await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputFilePath);
            
          const newStats = fs.statSync(outputFilePath);
          console.log(`  -> Created: ${path.basename(outputFilePath)} (${(newStats.size / 1024).toFixed(2)} KB)`);
          
          // Optionally delete the original if conversion was successful and significantly smaller
          // For now, I'll keep them to verify before deleting.
        } catch (err) {
          console.error(`  Error optimizing ${file}:`, err);
        }
      }
    }
  }
}

optimizeImages(publicDir).then(() => {
  console.log('Image optimization complete.');
}).catch(err => {
  console.error('Fatal error:', err);
});
