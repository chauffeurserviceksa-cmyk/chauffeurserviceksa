const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/BAHU Computers/Downloads/chauffeur service ksa/public';
const projectDir = 'c:/Users/BAHU Computers/Downloads/chauffeur service ksa';
const threshold = 100 * 1024; // 100KB

async function updateCodeReferences() {
  const extensions = ['.tsx', '.ts', '.js', '.css'];
  
  function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (['node_modules', '.next', '.git', 'scratch'].includes(file)) continue;
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        walk(filePath);
      } else if (extensions.includes(path.extname(file))) {
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;
        
        // Handle images with spaces in quotes
        // Matches: "/blogs/image with space.jpeg" or '/blogs/image.png'
        const newContent = content.replace(/(['"])(\/)([^'"]+)\.(jpe?g|png)(['"])/gi, (match, q1, slash, name, ext, q2) => {
          const webpPath = path.join(publicDir, name + '.webp');
          const webpPathInSub = path.join(publicDir, name.replace(/^\//, '') + '.webp');
          
          if (fs.existsSync(webpPath) || fs.existsSync(webpPathInSub)) {
            changed = true;
            return `${q1}${slash}${name}.webp${q2}`;
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

updateCodeReferences().then(() => console.log('References updated.'));
