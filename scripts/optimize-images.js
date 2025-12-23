const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imageFiles = fs.readdirSync(publicDir)
  .filter(file => /\.(png|jpg|jpeg)$/i.test(file));

console.log(`Found ${imageFiles.length} images to optimize\n`);

async function optimizeImages() {
  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

    try {
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024).toFixed(2);

      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024).toFixed(2);
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);

      console.log(`✓ ${file}`);
      console.log(`  ${originalSize}KB → ${newSize}KB (${savings}% smaller)\n`);
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }

  console.log('✓ Image optimization complete!');
}

optimizeImages();
