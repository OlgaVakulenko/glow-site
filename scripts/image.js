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

const regexp =
  /\/_next\/static\/media\/(?<path>.+?)\.w-(?<width>.+?)(?<ext>\.(webp|jpeg|jpg|png))/g;

const regexp2 =
  /\/_next\/static\/media\/(?<path>.+?)\.w-(?<width>\d+?)(?<ext>\..+?)(?:,|\s|'|")/g;

const regexp3 = /\/_next\/static\/media\/(?<path>.+?)(?=,|\s|'|")/g;

const fileExist = (path) => {
  return fs
    .access(path)
    .then(() => path)
    .catch(() => false);
};

const toVerify = [];

// const bar = new progress.SingleBar({});

// let total = 0;
// bar.start(total, 0);
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
    const matches = content.matchAll(regexp3);

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
        width,
        ext,
      });

      continue;

      const m = fullpath.match(/\.w-(?<width>\d+)\./);

      console.log(filepath);
      return;
      // console.log(path);
      // return;
      // const group = match.groups;
      // const source = path.resolve(out + mediaPath, filename);
      // const ext = group.ext;
      console.log(source, ext);
      return;
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
        continue;
      }
      console.log(match);
      return;
      toVerify.push(fullpath);

      if (await fileExist(fullpath)) {
        // console.log(`File ${fullpath} already exists. Skipped -----`);
        continue;
      }

      const exist = (
        await Promise.all(
          ['.jpg', '.jpeg', '.png'].map((ext) => {
            return fileExist(source.replace('.webp', ext));
          })
        ).catch(() => false)
      ).find((v) => v);

      console.log(exist);

      if (!exist) {
        console.error(`File ${group.path}.* not found`);
        continue;
      }

      const originalPath = exist;

      // const width = parseInt(group.width);

      if (isNaN(width) || width <= 0) {
        console.error(`Width: ${width} is not a valid value`);
        continue;
      }

      console.log(fullpath);
      continue;

      try {
        await sharp(originalPath)
          .resize(width)
          .toFormat(ext.replace('.', ''))
          .toFile(fullpath);
        bar.setTotal(total + 1);
        bar.increment();
        bar.update();
        // console.log(`File ${fullpath} successfully created`);
      } catch (e) {
        console.error(e);
      }
    }
  }
})
  .then(async () => {
    const bar = new progress.SingleBar();
    bar.start(images.length, 0);
    const promises = images.map((image) => {
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

      return (
        s
          // .sharpen()
          .toFormat(image.ext)
          .toFile(image.destination)
          .then(() => {
            bar.increment();
          })
      );
    });

    await Promise.all(promises);

    bar.stop();
  })
  .catch((e) => {
    console.error(e);
  });
