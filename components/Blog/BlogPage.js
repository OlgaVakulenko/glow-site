import cx from 'clsx';
import { atom, useAtom } from 'jotai';
import Head from 'next/head';
import { useMemo } from 'react';
import { useMediaAtom } from '../../lib/agent';
import { getFullDescription, getFullTitle } from '../HeadTitle';
import Layout from '../Layout';
import Card from './Card';
import { Tag } from '../Tag';
import * as RadioGroup from '@radix-ui/react-radio-group';
import Animated, { AnimatedGroup } from '../Animated';

const TAG_ALL = 'All Topics';
const filterAtom = atom(TAG_ALL);

export default function BlogPage({ posts, tags = [] }) {
  const [filter] = useAtom(filterAtom);
  const media = useMediaAtom();

  const sortedPosts = useMemo(() => {
    const filteredPosts = posts.filter((post) => {
      if (filter === TAG_ALL) {
        return true;
      }
      return post.tags.includes(filter);
    });
    
    return filteredPosts.sort((a, b) => b.created_at - a.created_at);
  }, [posts, filter]);

  const postsInColumnCount = useMemo(() => {
    switch (media) {
      case 'desktop':
        return 3;
      case 'tablet':
        return 2;
      case 'mobile':
        return 1;
      default:
        return 1;
    }
  }, [media]);

  return (
    <div className="md:pb-[88px]">
      <Head>
        <title>{getFullTitle('Our Blog about Business & Design')}</title>
        <meta
          name="description"
          content={getFullDescription(
            `Explore the Glow Team Blog for expert insights on design, business strategies, HR, and technology trends. Practical advice and industry perspectives.`
          )}
        ></meta>
      </Head>
      <Layout disableOnMobile>
        <AnimatedGroup>
          <div className="flex flex-col pt-[192px] md:flex-row md:flex-wrap md:items-end md:justify-between md:pt-[176px] xl:pt-[296px]">
            <Animated
              as="h1"
              className={cx(
                'mb-9 px-4 md:mb-0 md:mr-24 md:min-w-[416px] md:px-0 md:pb-8 xl:col-span-6 xl:mr-0 text-next-heading-4 md:text-next-heading-3 xl:text-next-heading-0'
              )}
            >
              We write about <br className="block" /> business &&nbsp;design
            </Animated>
            <div className="w-full md:w-auto md:shrink-0 md:pb-8 xl:pb-8">
              <Tags tags={tags} />
            </div>
          </div>
        </AnimatedGroup>
      </Layout>

      <div key={filter + Math.random()}>
        <Layout>
          <div className="grid gap-y-10 py-[52px] md:grid-cols-2 md:gap-8 md:gap-y-14 md:py-[72px] xl:grid-cols-3 xl:gap-y-20 xl:py-[88px]">
            {sortedPosts.map((post, index) => {
              const columnIndex = index % postsInColumnCount;
              const delay = (columnIndex + 1) * 100;

              return (
                <Animated key={post.href} delay={delay}>
                  <Card post={post} />
                </Animated>
              );
            })}
          </div>
        </Layout>
      </div>
    </div>
  );
}

function Tags({ tags }) {
  const [filter, setFilter] = useAtom(filterAtom);
  const _tags = useMemo(() => {
    return [TAG_ALL, ...tags];
  }, [tags]);

  return (
    <RadioGroup.Root
      className="scroll-c flex gap-2 overflow-x-scroll px-4 pb-8 md:overflow-visible md:px-0 md:pb-0"
      onValueChange={(tag) => {
        setFilter(tag);
      }}
    >
      {_tags.map((tag, index) => (
        <RadioGroup.Item key={tag} value={tag} id={tag} className="shrink-0">
          <Animated delay={index * 100}>
            <Tag active={tag === filter}>{tag}</Tag>
          </Animated>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}