import cx from 'clsx';
import { atom, Provider, useAtom } from 'jotai';
import Head from 'next/head';
// import { useAtom } from 'jotai';
// import { atom } from 'jotai';
import { useEffect, useMemo, useRef } from 'react';
import { ScrollTrigger } from '../../dist/gsap';
import { useMedia } from '../../lib/agent';
import { getFullTitle } from '../HeadTitle';
import Layout from '../Layout';
import StructuredData from '../StructuredData';
import Author from './Post/Author';
import Breadcrumbs from './Post/Breadcrumbs';
import Content from './Post/Content';
import MoreTopics from './Post/MoreTopics';
import Progress from './Post/Progress';
import Share from './Post/Share';
import TableOfContents from './Post/TableOfContents';
import Tags from './Post/Tags';

export const activeAtom = atom(0);
export const isTransitionAtom = atom(false);
export const progressAtom = atom(0);
export const progressNodeYAtom = atom(null);

const columnClx = 'md:max-w-[1220px] mx-auto';

function createDot(x, y, id = null) {
  if (id) {
    const el = document.getElementById(id);
    el && el.parentElement.removeChild(el);
  }

  const d = document.createElement('div');
  d.className = 'absolute bg-brand';
  d.style.top = y + 'px';
  d.style.left = x + 'px';
  d.style.width = '10px';
  d.style.height = '10px';
  d.id = id;

  document.body.appendChild(d);
}

export default function PostPage({ post, relatedPosts = [] }) {
  const media = useMedia();
  const [progressNodeY] = useAtom(progressNodeYAtom);
  const triggerRef = useRef();
  const stickyRef = useRef();

  useEffect(() => {
    if (media === 'mobile') {
      return;
    }

    const st = new ScrollTrigger({
      trigger: triggerRef.current,
      pin: stickyRef.current,
      start: 'top center+=120',
      end: () => {
        const node = document.querySelector('.progress-node');
        const aside = document.querySelector('.stickyref');
        if (!node || !aside) return 'end center';
        const start = triggerRef.current.getBoundingClientRect();
        const rect = node.getBoundingClientRect();
        const center = window.innerHeight / 2 + 120;
        const diff = rect.y - start.y;
        const Y2 = center + diff;

        const query = `bottom+=40 ${Y2}`;

        return query;
      },
    });

    return () => {
      st.kill();
    };
  }, [media, post.href]);

  const isoDate = useMemo(() => {
    return new Date(`${post.date} 2023`).toISOString();
  }, [post.date]);

  return (
    <div className="pb-20 pt-[142px] md:pt-[176px]">
      <Head>
        <title>{getFullTitle(post.html_title || post.title)}</title>
        <meta
          name="description"
          content={`${post.html_description || post.description}`}
        ></meta>
        <meta
          property="og:title"
          content={post.html_title || post.title}
        ></meta>
        <meta
          property="og:description"
          content={post.html_description || post.description}
        ></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:image" content={post.image}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={post.image} />
      </Head>
      <StructuredData
        id="blog-post"
        data={{
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: post.title,
          image: [post.image],
          datePublished: isoDate,
          dateModified: isoDate,
        }}
      />
      <Layout key={post.href}>
        <Provider>
          <div className={columnClx}>
            <Breadcrumbs current={post.title} slug={post.href} />
            <h1 className="color-[#000] mb-10 font-glow text-heading-h3 leading-[37px] md:max-w-[800px] md:text-heading-h2">
              {post.title}
            </h1>
            <div className="md:hidden">
              <Author
                name={post.author_name}
                image={post.author_image}
                position={post.author_position}
              />
            </div>
          </div>
          <div
            className={cx('md:grid md:grid-cols-12 md:gap-[72px]', columnClx)}
          >
            <div className="md:col-span-8">
              <div className="-mx-4 mb-10 md:mx-0">
                <img src={post.image} alt="" className="md:rounded-3xl" />
              </div>
              <div ref={triggerRef}>
                <Content html={post.text} paragraphs={post.paragraphs} />
              </div>
              <Tags tags={post.tags} className="mb-20" />
            </div>
            {media !== 'mobile' && (
              <aside className="hidden md:col-span-4 md:block">
                <div className="stickyref" ref={stickyRef}>
                  <div className="mb-12">
                    <Author
                      name={post.author_name}
                      image={post.author_image}
                      position={post.author_position}
                    />
                  </div>
                  <TableOfContents paragraphs={post.paragraphs} />
                  <Progress minutes={post.read_minutes} />
                  <Share />
                </div>
              </aside>
            )}
          </div>
        </Provider>
        <MoreTopics posts={relatedPosts} />
      </Layout>
    </div>
  );
}
