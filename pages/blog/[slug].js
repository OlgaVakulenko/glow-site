import Layout from '../../components/Layout';
import { posts } from '../../posts/index.json';

function Content({ html }) {
  return (
    <div className="prose mx-auto">
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </div>
  );
}

export default function Post({ post }) {
  return (
    <Layout className="mt-[150px]">
      <Content html={post.content} />
    </Layout>
  );
}

export async function getStaticPaths(context) {
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.path,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const slug = params.slug;

  const post = posts.find((p) => p.path === slug);

  return {
    props: {
      post,
    },
  };
}
