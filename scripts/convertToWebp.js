import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public";
const outputDir = "public";

const exts = [".png", ".jpg", ".jpeg"];

fs.readdirSync(inputDir).forEach(async (file) => {
  const ext = path.extname(file).toLowerCase();
  if (exts.includes(ext)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(
      outputDir,
      path.basename(file, ext) + ".webp"
    );

    try {
      await sharp(inputPath).toFormat("webp").toFile(outputPath);
      console.log(`✅ Convertido: ${file} → ${path.basename(outputPath)}`);
    } catch (err) {
      console.error(`❌ Error con ${file}:`, err);
    }
  }
});
