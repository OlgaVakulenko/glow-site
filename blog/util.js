import fs from 'fs/promises';
import path from 'path';

export async function getBlogPosts() {
  const data = await fs.readFile(
    path.resolve(process.cwd(), 'blog/index.json')
  );

  return JSON.parse(data).data;
}

export function getPostPreviewData({ text, paragraphs, ...post }) {
  return {
    ...post,
  };
}
