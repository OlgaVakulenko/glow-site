import fetch from 'node-fetch';
import html from 'node-html-parser';
import slugify from 'slugify';
import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const FILE = path.join(__dirname, '../posts/index.json');
const postsUrl = 'https://medium.com/glow-team';
// const url =
//   'https://medium.com/glow-team/why-is-it-important-to-invest-in-your-employees-b95b910c2656';

fetch(postsUrl)
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    const root = html.parse(text);
    const posts = root.querySelectorAll('a[data-post-id]');

    const links = posts
      .map((p) => p.getAttribute('href'))
      .map((url) => {
        const u = new URL(url);
        u.search = '';

        return u.toString();
      });

    return links;
  })
  .then((links) => {
    return Promise.all(
      links.map((link) =>
        fetch(link)
          .then((res) => res.text())
          .then((text) => {
            const root = html.parse(text, {
              lowerCaseTagName: true,
              comment: false,
              voidTag: {
                addClosingSlash: true,
              },
              blockTextElements: {
                script: false,
                noscript: false,
                style: false,
                pre: true,
              },
            });

            const post = root.querySelector('main article');
            const stripClassName = (node) => {
              node?.removeAttribute?.('class');
              node?.childNodes?.forEach((children) => {
                stripClassName(children);
              });
            };

            const removeEmptyNodes = (node) => {
              if (node.childNodes.length === 0) {
                node.remove();
              } else {
                node.childNodes.forEach((children) => {
                  removeEmptyNodes(children);
                });
              }
            };

            stripClassName(post);

            const title = post.querySelector('h1').textContent;
            const path = slugify(title).toLowerCase();

            return {
              title,
              path,
              content: post.querySelector('section').toString(),
            };
          })
      )
    );
  })
  .then((posts) => {
    return fs.writeFile(FILE, JSON.stringify({ posts }));
  })
  .then(() => {
    console.log('OK');
  })
  .catch((e) => {
    console.error(e);
  });
