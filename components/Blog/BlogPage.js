import Layout from '../Layout';
import PageHeading from '../PageHeading';
import { Medium } from '../Pages/About/Logos';
import Card from './Card';
import cx from 'clsx';
import { useMemo, useState, Fragment } from 'react';
import { atom, useAtom } from 'jotai';
import { useMediaAtom } from '../../lib/agent';
import { useIsClient } from '../../lib/utils';
import Head from 'next/head';
import { getFullTitle } from '../HeadTitle';

const TAG_ALL = 'All Topics';
const filterAtom = atom(TAG_ALL);

export default function BlogPage({ posts, tags = [] }) {
  const isClient = useIsClient();
  const [filter] = useAtom(filterAtom);

  const _posts = useMemo(() => {
    return posts.filter((post) => {
      if (filter === TAG_ALL) {
        return true;
      }
      return post.tags.includes(filter);
    });
  }, [posts, filter]);

  return (
    <div>
      <Head>
        <title>{getFullTitle('Blog')}</title>
      </Head>
      <div className="pt-[177px]">
        <Layout>
          <div className="mb-[71px] flex">
            {isClient && (
              <Medium
                className="md:ml-auto md:mr-[7%]"
                title="Our Design Blog on Medium"
                subtitle="Subscribe"
              />
            )}
          </div>
          <PageHeading className="mb-12 md:mb-20">
            We write about <br className="hidden md:block" /> business & design
          </PageHeading>
        </Layout>
        <div className="mb-8 md:mb-[72px]">
          <Tags tags={tags} />
        </div>
        <Layout>
          <div className="grid gap-y-10 pb-20 md:grid-cols-2 md:gap-7 md:gap-y-10 xl:grid-cols-3">
            {_posts.map((post) => (
              <Card key={post.title} post={post} />
            ))}
          </div>
        </Layout>
      </div>
    </div>
  );
}

function Tags({ tags }) {
  const media = useMediaAtom();
  const [filter, setFilter] = useAtom(filterAtom);
  const _tags = useMemo(() => {
    return [TAG_ALL, ...tags];
  }, [tags]);
  const TagsWrapper = useMemo(() => {
    return media === 'mobile' ? Fragment : Layout;
  }, [media]);
  return (
    <TagsWrapper>
      <div className="flex overflow-y-scroll pb-4 md:overflow-y-hidden md:pb-0">
        {_tags.map((tag) => (
          <button
            type="button"
            key={tag}
            className={cx(
              'mr-4 ml-4 shrink-0 rounded-full p-4 text-[14px] font-medium uppercase leading-[19px] tracking-[0.03em] md:ml-0 md:mr-8',
              {
                'glow-border-black': tag === filter,
              }
            )}
            onClick={() => {
              setFilter(tag);
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </TagsWrapper>
  );
}
