import { useAtom } from 'jotai';
import { atom, useSetAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import Layout from '../../Layout';
import PageHeading, { PageHeading2 } from '../../PageHeading';
import PageSubheading from '../../PageSubheading';
import cases from '../Cases/data';
import cx from 'clsx';
import { CaseItem, CasesRow } from '../Home/CasesSlider';
import { useMediaAtom } from '../../../lib/agent';
import { Separator } from '../About';
import Animated from '../../Animated';
import Head from 'next/head';
import { getFullTitle } from '../../HeadTitle';
import { Source } from '../../Image';
import { Subheading2 } from '../../Typography/Subheading';
import Asterisk from '../../Asterisk';
import IntroSection from '../../IntroSection';

export const filterAtom = atom({
  category: 'all',
  type: 'all',
});

export default function Work() {
  const ref = useRef();

  return (
    <div>
      <Head>
        <title>{`Glow Team Portfolio: Showcasing Our Innovative Design Projects`}</title>
        <meta
          name="description"
          content="Explore Glow Team's diverse portfolio of design and development projects, highlighting our commitment to creative solutions and client success."
        ></meta>
      </Head>
      <IntroSection
        title="Explore our projects"
        subtitle={
          <>
            These guys are shining
            <br /> with us
          </>
        }
      />
      <Layout>
        <Cases />
      </Layout>
    </div>
  );
}

function FilterBtn({ name, value, children }) {
  const [filter, setFilter] = useAtom(filterAtom);
  const isActive = filter[name] === value;

  return (
    <button
      className={cx(
        '-ml-4 mb-1 whitespace-nowrap rounded-full p-4 text-sm font-medium uppercase leading-[19px] tracking-[0.03em] transition-transform duration-300 xl:ml-0',
        {
          'glow-border-black translate-x-4 xl:translate-x-0': isActive,
        }
      )}
      onClick={() => {
        setFilter((filter) => ({
          ...filter,
          [name]: value,
        }));
      }}
    >
      {children}
    </button>
  );
}

function Filters({ className }) {
  const categories = useMemo(() => {
    return ['transportation', 'fintech', 'healthcare', 'other'];
  }, []);

  return (
    <Animated
      className={cx(
        'relative flex',
        'xl:grid xl:grid-flow-row xl:grid-cols-12 4xl:gap-12',
        className
      )}
      delay={150}
    >
      <div className="mr-[43px] flex flex-col items-start md:mr-[107px] xl:col-span-7 xl:mr-[5vw] xl:flex-row">
        <FilterBtn name="category" value="all">
          All Niche
        </FilterBtn>
        {categories.map((cat) => (
          <FilterBtn key={cat} name="category" value={cat}>
            {cat}
          </FilterBtn>
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:mr-[5vw] xl:block">
        <Separator size={56} />
      </div>
      <div className="flex flex-col items-start xl:col-span-5 xl:flex-row xl:pr-[17%]">
        <FilterBtn name="type" value="all">
          All Projects
        </FilterBtn>
        <FilterBtn name="type" value="desktop">
          Desktop
        </FilterBtn>
        <FilterBtn name="type" value="mobile">
          Mobile
        </FilterBtn>
      </div>
    </Animated>
  );
}

function Cases() {
  const media = useMediaAtom();
  const [filter] = useAtom(filterAtom);
  const category = filter.category || 'all';
  const type = filter.type || 'all';

  const _cases = useMemo(() => {
    return cases
      .filter((item) => {
        if (!category || category === 'all') return true;
        if (!item.category) {
          return true;
        }
        if (item.category?.includes(category)) {
          return true;
        }
        return false;
      })
      .filter((item) => {
        if (!type || type === 'all') return true;

        if (!item.type) {
          return true;
        }

        return item.type?.includes(type);
      });
  }, [category, type]);

  return (
    <div className="pb-9 pt-12 md:pb-20 md:pt-20">
      <Filters className="mb-[70px] md:mb-24 xl:flex xl:justify-between" />
      <div className={cx('opacity-100 transition-opacity duration-500', {})}>
        {media === 'mobile' ? (
          _cases.map((item, i) => (
            <CaseItem
              key={item.href}
              className="mb-4"
              {...item}
              image={item.imageMobile || item.image}
              columns={[
                {
                  title: 'industry',
                  items: item.industry,
                },
                {
                  title: 'services',
                  items: item.service,
                },
                {
                  title: 'company',
                  items: item.company,
                },
              ]}
            />
          ))
        ) : (
          <CasesLayout cases={_cases} />
        )}
      </div>
    </div>
  );
}

function CasesLayout({ cases }) {
  const c1 = cases.filter((_, i) => i % 2 === 0);
  const c2 = cases.filter((_, i) => i % 2 !== 0);

  return (
    <div className="-mx-8 flex pb-[64px] xl:-mx-[64px]">
      <CasesRow cases={c1} />
      <CasesRow cases={c2} className="pt-[113px]" />
    </div>
  );
}
