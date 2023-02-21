import Link from 'next/link';
import Layout from '../../components/Layout';
import { posts } from '../../posts';

export default function Blog({ posts }) {
  return (
    <Layout className="mt-[150px] mb-[150px]">
      {posts.map((post) => (
        <Link key={post.title} href={'/blog/' + post.path} className="mb-4">
          <div>{post.title}</div>
        </Link>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: posts.map((p) => ({
        title: p.title,
        path: p.path,
      })),
    },
  };
}
