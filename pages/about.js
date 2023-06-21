import { getBlogPosts, getPostPreviewData } from '../blog/util';
import About from '../components/Pages/About';

export async function getStaticProps() {
  const posts = await getBlogPosts().then((posts) => posts.slice(0, 9));

  return {
    props: {
      posts: posts.map(getPostPreviewData).map((post, i) => ({
        isFeatured: i === 0,
        ...post,
      })),
    },
  };
}

export default function AboutPage({ posts }) {
  return <About posts={posts} />;
}
