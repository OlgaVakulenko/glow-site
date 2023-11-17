import Link from 'next/link';
import BlogPage from '../../components/Blog/BlogPage';
import { getBlogPosts, getPostPreviewData } from '../../blog/util';

export default BlogPage;

export async function getStaticProps() {
  const posts = await getBlogPosts();

  console.log(posts);

  return {
    props: {
      posts: posts.map(getPostPreviewData),
      tags: [...new Set(posts.flatMap((p) => p.tags))],
    },
  };
}
