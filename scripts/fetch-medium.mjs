import fetch from 'node-fetch';
import { parse } from 'node-html-parser';
import slugify from 'slugify';
import fs from 'fs/promises';
import path from 'path';
import { decodeHTML } from 'entities';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const url = 'https://medium.com/glow-team/evolving-markets-user-expectations-strategies-for-business-success-228ef89aa6ff';
const blogPath = path.resolve(process.cwd(), 'blog/index.json');

function decodeString(str) {
  return decodeHTML(str)
    .replace(/&nbsp;/g, ' ')
    .replace(/\u00A0/g, ' ');
}

function sanitizeFolderName(name) {
  const illegalRe = /[\/:*?"<>|]/g;
  return name.replace(illegalRe, '_');
}

function postTitle(title) {
  return slugify(title, { remove: /[*+~.()'"!:@?]/g })
    .toLowerCase()
    .replaceAll('/', '-')
    .replaceAll(':', '');
}

function fileExists(path) {
  return fs
    .access(path)
    .then(() => true)
    .catch(() => false);
}

async function createFolder(p) {
  const folderPath = path.resolve(__dirname, p);
  const exists = await fileExists(folderPath);
  if (!exists) {
    return fs
      .mkdir(folderPath, { recursive: true })
      .then(() => {
        console.log('Folder created successfully:', folderPath);
      })
      .catch((e) => {
        console.error('Error creating folder:', e);
      });
  } else {
    console.log('Folder already exists:', folderPath);
  }
}

function toIsoDateString(dateString) {
  const date = new Date(dateString);
  return date.toISOString();
}

fetch(url)
  .then((res) => res.text())
  .then(async (html) => {
    const root = parse(html, {
      script: true,
      style: true,
      pre: true,
    });

    const ldJsonScript = root.querySelector('script[type="application/ld+json"]');
    const ldJsonContent = ldJsonScript.innerText;
    const metadata = JSON.parse(ldJsonContent);

    const post = getPostDataFromMetadata(metadata);

    const article = root.querySelector('article');

    processArticleContent(article, post);

    const text = article.innerHTML;

    const paragraphs = getParagraphs(article);

    const tags = getTagsFromHtml(root);

    const author_image = getAuthorImageFromHtml(root);

    const read_minutes = getReadTimeFromHtml(root);

    const fullPost = {
      ...post,
      author_image,
      read_minutes,
      text,
      tags: transformTags(tags),
      paragraphs,
      order: 1000,
      href: postTitle(post.title),
    };

    const folder = path.resolve(__dirname, '../blog/', fullPost.href);
    await createFolder(folder);
    const htmlContent = fullPost.text;
    const meta = Object.keys(fullPost)
      .filter((k) => k !== 'text')
      .reduce((obj, key) => {
        obj[key] = fullPost[key];
        return obj;
      }, {});
    await Promise.all([
      fs.writeFile(
        path.resolve(folder, 'meta.json'),
        JSON.stringify(
          {
            data: meta,
          },
          null,
          2
        )
      ),
      fs.writeFile(path.resolve(folder, 'index.html'), htmlContent),
    ]);

    console.log('ok');
  });

function getPostDataFromMetadata(metadata) {
  return {
    title: decodeString(metadata.headline || metadata.name),
    description: decodeString(metadata.description || ''),
    image: metadata.image ? metadata.image[0] : '',
    author_name: metadata.author ? metadata.author.name : '',
    date: new Date(metadata.datePublished).toDateString(),
    date_iso: toIsoDateString(metadata.datePublished),
    created_at: new Date(metadata.dateCreated).getTime(),
    href: metadata.url,
  };
}

function getAuthorImageFromHtml(root) {
  const authorImageElement = root.querySelector('img[data-testid="authorPhoto"]');

  if (authorImageElement) {
    const authorImageUrl = authorImageElement.getAttribute('src');
    return authorImageUrl;
  }

  return '';
}

function getReadTimeFromHtml(root) {
  const readTimeElement = root.querySelector('span[data-testid="storyReadTime"]');

  if (readTimeElement) {
    const readTimeText = readTimeElement.innerText.trim();
    return readTimeText;
  }

  return '';
}

function getParagraphs(root) {
  const headings = root.querySelectorAll('h2');
  const paragraphs = headings.map((node) => {
    const textContent = decodeHTML(node.innerText);
    const id = node.getAttribute('id');
    return {
      text: textContent,
      id: id,
    };
  });

  return paragraphs;
}

function filterContent(node) {
  if (node.nodeType === 1) {
    const badAttrs = ['class', 'role', 'tabIndex', 'tabindex'];

    badAttrs.forEach((attr) => {
      if (node.hasAttribute(attr)) {
        node.removeAttribute(attr);
      }
    });

    const dataAttrs = Array.from(node.attributes).filter((attr) => attr.name.startsWith('data-'));
    dataAttrs.forEach((attr) => node.removeAttribute(attr.name));

    if (node.childNodes && node.childNodes.length > 0) {
      node.childNodes.forEach((child) => {
        filterContent(child);
      });
    }

    if (node.tagName !== 'IMG') {
      if (node.childNodes.length === 0 && !node.innerText.trim()) {
        node.remove();
      }
    }
  }
  return node;
}

function getTagsFromHtml(root) {
  return [];
}

function transformTags(tags) {
  return tags;
}

function processArticleContent(article, post) {
  removeUnwantedContent(article);
  replaceH2WithH3(article);
  replaceH1WithH2AndAddId(article);
  addIdsToH2Headings(article);
  fixImagePaths(article);
  removeSpecificImages(article);
}

function removeUnwantedContent(article) {
    const unwantedSelectors = [
    'header',
    'footer',
    'div[data-testid="postSidebar"]',
    'div[data-testid="recommendsAndResponses"]',
    'div[data-testid="inlineSubscriptionForm"]',
    'div[data-testid="readerRevenueUpsellSidebar"]',
    'div[data-testid="pswp"]',
    'div[data-testid="metabar"]',
    'div[data-testid="postMetaInline"]',
    'div[data-testid="bottomRightShareButton"]',
    'div[data-testid="postActions"]',
    'div[data-testid="postLightboxBackdrop"]',
    'div[data-testid="popover"]',
    'div[data-testid="navBar"]',
    'div[data-testid="overlay"]',
    'div[data-testid="audioPlayer"]',
    'div[data-testid="related"]',
    'div[data-testid="branding"]',
    'div[data-testid="comments"]',
    'div[data-testid="moreFromMedium"]',
    'div[data-testid="postArticleFooter"]',
    'div[data-testid="postMeta"]',
    'div[data-testid="postNav"]',
    'div[data-testid="postFooter"]',
    'div[data-testid="postLeftSidebar"]',
    'div[data-testid="postRightSidebar"]',
    'div[data-testid="postSidebar"]',
    'div[data-testid="stickyShareButtons"]',
    'div[data-testid="bottomShare"]',
    'div[data-testid="postComments"]',
    'div[data-testid="carousel"]',
    'div[data-testid="meter"]',
    'div[data-testid="ad"]',
    'div[data-testid="persistentAudioPlayer"]',
    'div[data-testid="infiniteScroll"]',
    'div[data-testid="newsletterSubscription"]',
    'div[data-testid="subscribersOnly"]',
    'div[data-testid="postNotes"]',
    'div[data-testid="postActionsBar"]',
  ];

  unwantedSelectors.forEach((selector) => {
    const elements = article.querySelectorAll(selector);
    elements.forEach((element) => element.remove());
  });
}

function replaceH2WithH3(article) {
  const h2Elements = article.querySelectorAll('h2');
  h2Elements.forEach((h2) => {
    const h3 = parse(`<h3 class="blog-post-h3">${h2.innerHTML}</h3>`);
    h2.replaceWith(h3);
  });
}

function replaceH1WithH2AndAddId(article) {
  const h1Elements = article.querySelectorAll('h1');
  h1Elements.forEach((h1) => {
    const id = 'p' + Math.floor(Math.random() * 100000);
    const h2 = parse(`<h2 id="${id}">${h1.innerHTML}</h2>`);
    h1.replaceWith(h2);
  });
}

function addIdsToH2Headings(article) {
  const h2Elements = article.querySelectorAll('h2');
  h2Elements.forEach((h2) => {
    const id = 'p' + Math.floor(Math.random() * 100000);
    h2.setAttribute('id', id);
  });
}

function fixImagePaths(article) {
  const imgElements = article.querySelectorAll('img');
  imgElements.forEach((img) => {
    const src = img.getAttribute('src');
    if (src) {
      if (src.startsWith('/')) {
        img.setAttribute('src', 'https://medium.com' + src);
      } else if (src.startsWith('//')) {
        img.setAttribute('src', 'https:' + src);
      }
    }
  });
}

function removeSpecificImages(article) {
  const selectors = [
    'img[data-testid="authorPhoto"]',
    'img[data-testid="publicationPhoto"]',
  ];

  selectors.forEach((selector) => {
    const images = article.querySelectorAll(selector);
    images.forEach((img) => img.remove());
  });
}
