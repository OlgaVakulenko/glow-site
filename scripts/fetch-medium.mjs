import fetch from 'node-fetch';
import { parse } from 'node-html-parser';
import slugify from 'slugify';
import fs from 'fs/promises';
import path from 'path';
import { decodeHTML } from 'entities';

const url = 'https://medium.com/glow-team';
const blogPath = path.resolve(process.cwd(), 'blog/index.json');

function decodeString(str) {
  return decodeHTML(str)
    .replace(/&nbsp;/g, ' ')
    .replace(/\u00A0/g, ' ');
}

fetch(url)
  .then((res) => res.text())
  .then((html) => {
    const root = parse(html);
    const roots = root.querySelectorAll('div[data-post-id]');
    const posts = roots
      .map((root) => {
        if (root.getAttribute('data-index') === '0') {
          return getPostDataFromHtml(root.parentNode);
        }

        return getPostDataFromHtml(root);
      })
      .map((post) => {
        const link = post.href;
        return fetch(link)
          .then((res) => res.text())
          .then((html) => {
            const root = parse(html, {
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
            const article = filterContent(
              removeArticleHeader(root.querySelector('article'))
            );
            const paragraphs = getParagraphs(article);
            const text = filterRawHtml(article.innerHTML);
            const tags = root
              .querySelectorAll('a')
              .filter((link) => link.getAttribute('href').startsWith('/tag'))
              .map((link) => link.innerText);

            return {
              ...post,
              text,
              tags: transformTags(tags),
              paragraphs,
              href: slugify(post.title, { remove: /[*+~.()'"!:@\?]/g })
                .toLowerCase()
                .replaceAll('/', '-')
                .replaceAll(':', ''),
            };
          });
      });

    Promise.all(posts)
      .then((posts) => {
        return fs.writeFile(
          blogPath,
          JSON.stringify({
            data: posts,
          })
        );
      })
      .then(() => {
        console.log('ok');
      });
  });

/**
 * title
 * description
 * image
 * author_name
 * author_image
 * date
 * read_minutes
 * href
 */
function getPostDataFromHtml(root) {
  const title = root.querySelector('h3').innerText;
  const description = root.querySelector('h3').nextElementSibling.innerText;
  const image = root
    .querySelector('a[data-action="open-post"]')
    .getAttribute('style')
    .match(/url\("(?<src>.+)"\)/).groups.src;

  const author_name = root.querySelector(
    'a[data-action="show-user-card"].link--accent'
  ).innerText;

  const author_image = root
    .querySelector('a[data-action="show-user-card"].avatar img')
    .getAttribute('src');

  const date = root.querySelector('time').innerText;
  const read_minutes = root
    .querySelector('span.readingTime')
    .getAttribute('title');

  const href = root
    .querySelector('a[data-post-id]')
    .getAttribute('href')
    .split('?')[0];

  return {
    title: decodeString(title),
    description: decodeString(description),
    image,
    author_name,
    author_image,
    date,
    read_minutes,
    href,
  };
}

function getParagraphs(root) {
  const possibleHeadings = ['h1', 'h2', 'p > strong'];
  const p = [];

  possibleHeadings.forEach((selector) => {
    if (!p.length) {
      p.push(...root.querySelectorAll(selector));
    }
  });

  p.forEach((node) => {
    node.rawTagName = 'h2';
    node.id = 'p' + Math.random() * 100_000;
    node.setAttribute('id', node.id.toString().replaceAll('.', ''));
  });

  return p
    .map((node) => {
      return {
        text: decodeHTML(node.innerText),
        id: node.id,
      };
    })
    .filter(({ text }) => {
      const blocklist = ['Thanks for reading'];
      const result = blocklist.every((needle) => {
        return !text.includes(needle);
      });

      return result;
    })
    .map(({ text, ...rest }) => {
      const regexp = [/^\d\.?/];

      return {
        ...rest,
        text: regexp.reduce((text, r) => {
          return text.replace(r, '');
        }, text),
      };
    })
    .map(({ text, ...rest }) => ({
      ...rest,
      text: text.trim(),
    }));
}

function removeArticleHeader(article) {
  const p = article.querySelector('p.pw-post-body-paragraph');
  while (p.previousElementSibling) {
    p.previousElementSibling.remove();
  }

  return article;
}

function filterContent(node) {
  const badAttrs = ['class', 'id', 'role', 'tabIndex', 'tabindex'];
  badAttrs.forEach((attr) => {
    node?.removeAttribute?.(attr);
  });

  if (node.childNodes.length === 0 && node.ELEMENT_NODE === 1) {
    node.remove();
  } else {
    node?.childNodes?.forEach((children) => {
      filterContent(children);
    });
  }

  return node;
}

function filterRawHtml(html) {
  const replacers = [
    [
      //space is intentional
      ' hello@glow.team',
      ' <a href="mailto:hello@glow.team">hello@glow.team</a>',
    ],
  ];

  return replacers.reduce((text, [from, to]) => {
    return text.replace(from, to);
  }, html);
}

function transformTags(tags) {
  const map = [
    ['Case Study', 'Case'],
    ['Hr Trends', 'HR'],
    ['Human Resources', 'HR'],
    ['Employee Experience', 'HR'],
    ['Design', 'Design'],
  ];

  const defaultTag = 'Process';

  tags = tags.map((t) => {
    return map.reduce((tag, [from, to]) => {
      return tag.toLowerCase().includes(from.toLowerCase()) ? to : tag;
    }, t);
  });

  const whitelist = ['Case', 'Business', 'Design', 'HR', defaultTag];

  tags = tags.map((t) => {
    if (!whitelist.includes(t)) {
      return defaultTag;
    }

    return t;
  });

  return [...new Set(tags)];
}
