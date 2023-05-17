import cx from 'clsx';
import { useSetAtom, useAtom, atom, Provider } from 'jotai';
// import { useAtom } from 'jotai';
// import { atom } from 'jotai';
import throttle from 'lodash.throttle';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useMediaAtom } from '../../lib/agent';
import Layout from '../Layout';
import Card from './Card';
import gsap, { ScrollTrigger } from '../../dist/gsap';
import Progress from './Post/Progress';
import Author from './Post/Author';
import Content from './Post/Content';
import Tags from './Post/Tags';
import MoreTopics from './Post/MoreTopics';
import TableOfContents from './Post/TableOfContents';
import Share from './Post/Share';
import Breadcrumbs from './Post/Breadcrumbs';

export const activeAtom = atom(0);
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
  const [progressNodeY] = useAtom(progressNodeYAtom);
  const triggerRef = useRef();
  const stickyRef = useRef();

  useEffect(() => {
    const st = new ScrollTrigger({
      trigger: triggerRef.current,
      pin: stickyRef.current,
      // markers: true,
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
  }, []);

  return (
    <div className="pt-[142px] pb-20 md:pt-[176px]">
      <Layout>
        <Provider>
          <div className={columnClx}>
            <Breadcrumbs current={post.title} slug={post.href} />
            <h1 className="mb-10 font-glow text-heading-h3 leading-[37px] md:max-w-[800px] md:text-heading-h2">
              {post.title}
            </h1>
            <div className="md:hidden">
              <Author
                name={post.author_name}
                image={post.author_image}
                position="Product Designer"
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
            <aside className="hidden md:col-span-4 md:block">
              <div className="stickyref" ref={stickyRef}>
                <div className="mb-12">
                  <Author
                    name={post.author_name}
                    image={post.author_image}
                    position="Product Designer"
                  />
                </div>
                <TableOfContents paragraphs={post.paragraphs} />
                <Progress minutes={post.read_minutes} />
                <Share />
              </div>
            </aside>
          </div>
        </Provider>
        <MoreTopics posts={relatedPosts} />
      </Layout>
    </div>
  );
}
