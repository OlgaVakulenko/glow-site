const sharp = require('sharp');
const { walk } = require('@root/walk');
const fs = require('fs/promises');
const { existsSync, mkdirSync } = require('fs');
const path = require('path');
const progress = require('cli-progress');
const os = require('os');

sharp.cache(false);

const args = process.argv.slice(2);

const out = path.resolve(__dirname, './../out');
const mediaPath = '/_next/static/media/';
const cacheDir = path.resolve(os.tmpdir(), 'glow/cache');

if (!existsSync(cacheDir)) {
  mkdirSync(cacheDir, { recursive: true });
}

const regexp = /\/_next\/static\/media\/(?<path>.+?)(?=,|\s|'|")/g;

const fileExist = (path) => {
  return fs
    .access(path)
    .then(() => path)
    .catch(() => false);
};

const images = [];

walk(out, async (err, pathname, dir) => {
  if (err) {
    console.error(err);
    return;
  }
  //skip directory
  if (dir.isDirectory()) {
    return true;
  }

  if (pathname.endsWith('.html')) {
    const content = await (await fs.readFile(pathname)).toString();
    const matches = content.matchAll(regexp);

    for (const match of matches) {
      const filepath = match[0];
      if (!filepath) {
        continue;
      }

      const parts = filepath.match(
        /\/_next\/static\/media\/(?<name>.+)\.w-(?<width>\d+)\.(?<ext>.+)/
      );

      if (!parts) {
        continue;
      }

      const filename = parts.groups.name;
      const width = +parts.groups.width;
      const ext = parts.groups.ext;

      if (!filename || !width || isNaN(width) || !ext) {
        continue;
      }

      if (!['png', 'jpg', 'jpeg', 'webp'].includes(ext)) {
        continue;
      }

      const fullpath = path.resolve(out + filepath);

      if (!args.includes('--force')) {
        if (await fileExist(fullpath)) {
          continue;
        }
      }

      const source = path.resolve(out + mediaPath, filename);

      const sourceExtension = (
        await Promise.all(
          ['.jpg', '.jpeg', '.png'].map((ext) => {
            return fileExist(source + ext);
          })
        ).catch(() => false)
      )
        .find((v) => v)
        ?.split('.')
        .at(-1);

      if (!sourceExtension) {
        continue;
      }

      const fullSource = source + '.' + sourceExtension;

      images.push({
        source: fullSource,
        destination: fullpath,
        filename: filepath,
        width,
        ext,
      });

      continue;
    }
  }
})
  .then(async () => {
    const bar = new progress.SingleBar();
    bar.start(images.length, 0);
    const promises = images.map(async (image) => {
      const cachePath = path.join(
        cacheDir,
        image.filename.replace('/_next/static/media/', '')
      );
      if (await fileExist(cachePath)) {
        return fs.copyFile(cachePath, image.destination);
      }

      const s = sharp(image.source).resize({
        width: image.width,
        withoutEnlargement: true,
      });

      if (image.ext === 'webp') {
        s.webp({
          quality: 80,
          effort: 6,
        });
      }

      if (image.ext === 'jpeg' || image.ext === 'jpg') {
        s.jpeg({
          quality: 80,
          mozjpeg: true,
        });
      }

      if (image.ext === 'png') {
        s.png({
          compressionLevel: 9,
        });
      }

      return s
        .toFormat(image.ext)
        .toFile(image.destination)
        .then(() => {
          bar.increment();
        })
        .then(() => {
          return fs.copyFile(image.destination, cachePath);
        });
    });

    await Promise.all(promises);

    bar.stop();
  })
  .catch((e) => {
    console.error(e);
  });
