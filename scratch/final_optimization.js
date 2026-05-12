const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/BAHU Computers/Downloads/chauffeur service ksa/public';
const projectDir = 'c:/Users/BAHU Computers/Downloads/chauffeur service ksa';
const threshold = 100 * 1024; // 100KB

async function optimizeImagesAggressively(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      await optimizeImagesAggressively(filePath);
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const outputFilePath = path.join(dir, baseName + '.webp');
      
      let quality = 80;
      let size = stats.size;
      
      if (size > threshold) {
        console.log(`Optimizing: ${file} (${(size / 1024).toFixed(2)} KB)`);
        
        while (quality > 20) {
          try {
            await sharp(filePath)
              .webp({ quality: quality })
              .toFile(outputFilePath);
              
            const newStats = fs.statSync(outputFilePath);
            if (newStats.size < threshold || quality <= 30) {
              console.log(`  -> Final: ${path.basename(outputFilePath)} (${(newStats.size / 1024).toFixed(2)} KB) at quality ${quality}`);
              break;
            }
            quality -= 10;
          } catch (err) {
            console.error(`  Error optimizing ${file}:`, err);
            break;
          }
        }
      }
    }
  }
}

async function updateCodeReferences() {
  const extensions = ['.tsx', '.ts', '.js', '.css'];
  
  function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (['node_modules', '.next', '.git'].includes(file)) continue;
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        walk(filePath);
      } else if (extensions.includes(path.extname(file))) {
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;
        
        // Find all image references and replace with .webp if it exists in public
        // This is a bit complex, but we can do a broad regex replace for common extensions
        // /(['"\/])([^'"\s]+)\.(jpe?g|png)(['"])/gi
        
        const newContent = content.replace(/(\/)([^'"\s]+)\.(jpe?g|png)/gi, (match, slash, name, ext) => {
          // Check if the webp version exists in the public directory
          // We need to handle potential relative paths or just assume it's in public
          const webpPath = path.join(publicDir, name + '.webp');
          const webpPathInSub = path.join(publicDir, name.replace(/^\//, '') + '.webp');
          
          if (fs.existsSync(webpPath) || fs.existsSync(webpPathInSub)) {
            changed = true;
            return `${slash}${name}.webp`;
          }
          return match;
        });
        
        if (changed) {
          console.log(`Updating references in: ${filePath}`);
          fs.writeFileSync(filePath, newContent);
        }
      }
    }
  }
  
  walk(projectDir);
}

async function main() {
  console.log('Starting aggressive optimization...');
  await optimizeImagesAggressively(publicDir);
  console.log('Updating code references...');
  await updateCodeReferences();
  console.log('Done.');
}

main();
