const sharp = require('sharp');
const { walk } = require('@root/walk');
const fs = require('fs/promises');
const path = require('path');

sharp.cache(false);

const out = './out';
const mediaPath = '/_next/static/media/';

const regexp =
  /\/_next\/static\/media\/(?<path>.+?)\.w-(?<width>.+?)(?<ext>\.(webp|jpeg|jpg|png))/g;

const fileExist = (path) => {
  return fs
    .access(path)
    .then(() => path)
    .catch(() => false);
};

const toVerify = [];

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
      const fullpath = out + match[0];
      const group = match.groups;
      const source = path.resolve(out + mediaPath, group.path + group.ext);
      toVerify.push(fullpath);

      if (await fileExist(fullpath)) {
        console.log(`File ${fullpath} already exists. Skipped -----`);
        continue;
      }

      const exist = await Promise.any(
        ['.jpg', '.jpeg', '.png'].map((ext) => {
          return fileExist(source.replace('.webp', ext));
        })
      ).catch(() => false);

      if (!exist) {
        console.error(`File ${group.path}.* not found`);
        continue;
      }

      const originalPath = exist;

      const width = parseInt(group.width);
      const ext = group.ext;

      if (isNaN(width) || width <= 0) {
        console.error(`Width: ${width} is not a valid value`);
        continue;
      }

      try {
        await sharp(originalPath)
          .resize(width)
          .toFormat(ext.replace('.', ''))
          .toFile(fullpath);
        console.log(`File ${fullpath} successfully created`);
      } catch (e) {
        console.error(e);
      }
    }
  }
})
  .then(() => {
    return Promise.all(toVerify.map((file) => fileExist(file)));
  })
  .then(() => {
    console.log('OK');
  })
  .catch((e) => {
    console.error(e);
  });
