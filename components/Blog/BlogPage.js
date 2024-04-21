import cx from 'clsx';
import { atom, useAtom } from 'jotai';
import Head from 'next/head';
import { Fragment, useMemo } from 'react';
import { useMediaAtom } from '../../lib/agent';
import { useIsClient } from '../../lib/utils';
import { getFullDescription, getFullTitle } from '../HeadTitle';
import RollingText from '../RollingText';
import StructuredData from '../StructuredData';
import IntroBg from '../IntroBg';
import IntroSection from '../IntroSection2';
import Layout from '../Layout';
import { Medium } from '../Pages/About/Logos';
import Card from './Card';

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
        <title>
          {getFullTitle('Our Blog about Business & Design - Glow Team')}
        </title>
        <meta
          name="description"
          content={getFullDescription(
            `Explore the Glow Team Blog for expert insights on design, business strategies, HR, and technology trends. Practical advice and industry perspectives.`
          )}
        ></meta>
      </Head>
      <IntroSection
        asteriskVisible={false}
        title={
          <>
            We write about <br className="hidden md:block" /> business & design
          </>
        }
        subtitleEl={({ children, className, ...props }) => (
          <div {...props} className={cx(className, 'mb-[75px]')}>
            {children}
          </div>
        )}
        subtitle={
          <Medium
            className="md:ml-auto"
            title="Popular Design Blog on Medium"
            subtitle="View Topics"
            type="blog"
          />
        }
      />
      <div className="">
        {/* <Layout>
          <IntroBg />
          <div className="mb-[71px] flex">
            {isClient && (
              <Medium
                className="md:ml-auto md:mr-[7%]"
                title="Popular Design Blog on Medium"
                subtitle="View Topics"
                type="blog"
              />
            )}
          </div>
          <PageHeading2 className="mb-12 md:mb-20">
            We write about <br className="hidden md:block" /> business & design
          </PageHeading2>
        </Layout> */}
        <div className="mb-8 md:mb-[72px]">
          <Tags tags={tags} />
        </div>
        <Layout>
          <div className="grid gap-y-10 pb-20 md:grid-cols-2 md:gap-7 md:gap-y-20 xl:grid-cols-3">
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
              'ml-4 mr-4 shrink-0 rounded-full p-4 text-[14px] font-medium uppercase leading-[19px] tracking-[0.03em] md:ml-0 md:mr-8',
              {
                'glow-border-black': tag === filter,
              }
            )}
            onClick={() => {
              setFilter(tag);
            }}
          >
            <RollingText text={tag} height={18} />
          </button>
        ))}
      </div>
    </TagsWrapper>
  );
}
