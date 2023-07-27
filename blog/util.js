import fs from 'fs/promises';
import path from 'path';

export async function getBlogPosts() {
  const data = await fs.readFile(
    path.resolve(process.cwd(), 'blog/index.json')
  );

  return JSON.parse(data).data;
}

const positionMap = {
  'Kovalsky Stanislav': 'Co-Founder',
  'Daria Haman': 'HR Manager',
  'Liudmyla Gramatyk': 'Content Manager',
};

export function withAuthor(post) {
  return {
    ...post,
    author_position: positionMap[post.author_name] || 'Product Designer',
  };
}

export function getPostPreviewData({ text, paragraphs, ...post }) {
  return {
    ...post,
    ...withAuthor(post),
  };
}
