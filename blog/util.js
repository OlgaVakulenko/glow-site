import fs from 'fs/promises';
import path from 'path';

const getDirectories = (source) => {
  return fs.readdir(source, { withFileTypes: true }).then((dirs) => {
    return dirs
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => path.resolve(source, dirent.name));
  });
};

export async function getBlogPosts() {
  const blogFolder = path.resolve(process.cwd(), 'blog');
  const dirs = await getDirectories(blogFolder);

  const posts = await Promise.all(
    dirs.map(async (dir) => {
      const [meta, html] = await Promise.all([
        fs.readFile(path.resolve(dir, 'meta.json')).then((v) => JSON.parse(v)),
        fs
          .readFile(path.resolve(dir, 'index.html'))
          .then((buf) => buf.toString()),
      ]);

      return {
        ...meta.data,
        text: html,
      };
    })
  );

  return posts.sort((a, b) => {
    if (!a.created_at) {
      console.log(a.href, 'MISSING');
    }

    if (!b.created_at) {
      console.log(b.href, 'MISSING');
    }

    return new Date(b.created_at) - new Date(a.created_at);
  });
}

const positionMap = {
  'Kovalsky Stanislav': 'Co-Founder & Designer',
  'Daria Haman': 'HR Manager',
  'Liudmyla Gramatyk': 'Content Manager',
  'Ruslan Mashatov': 'Co-Founder & Designer',
  'Vlad Obertun': 'Lead Designer',
  'Olha Malova': "Product Designer",
  'Pavel Dobronosov': 'Project Manager',
  "Michael Bliznetsov": "Sales Manager"

};

export function withAuthor(post) {
  return {
    ...post,
    author_position: positionMap[post.author_name] || 'Product Designer',
    author_name:
      post.author_name === 'Kovalsky Stanislav'
        ? 'Stas Kovalsky'
        : post.author_name,
  };
}

export function getPostPreviewData({ text, paragraphs, ...post }) {
  return {
    ...post,
    ...withAuthor(post),
  };
}
