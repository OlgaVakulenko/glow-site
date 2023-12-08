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
import { CaseItem, CaseSlide, CasesRow } from '../Home/CasesSlider';
import { useMediaAtom } from '../../../lib/agent';
import { Separator } from '../About';
import Animated from '../../Animated';
import Head from 'next/head';
import { getFullTitle } from '../../HeadTitle';
import { Source } from '../../Image';
import { Subheading2 } from '../../Typography/Subheading';
import Asterisk from '../../Asterisk';
import IntroSection from '../../IntroSection';
import gsap, { ScrollTrigger } from '../../../dist/gsap';
import { useControls } from 'leva';

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

function lerp(value1, value2, t) {
  return (1 - t) * value1 + t * value2;
}

function mapValue(
  oldValue,
  oldRangeStart,
  oldRangeEnd,
  newRangeStart,
  newRangeEnd
) {
  return (
    newRangeStart +
    ((newRangeEnd - newRangeStart) * (oldValue - oldRangeStart)) /
      (oldRangeEnd - oldRangeStart)
  );
}

function getSearchParameters() {
  var params = new URLSearchParams(window.location.search);
  var obj = {};
  for (var key of params.keys()) {
    obj[key] = params.get(key);
  }
  return obj;
}

function AnimationWrapper({ children, index, lastIndex }) {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const ref = useRef();
  const spacerRef = useRef();
  const frameRef = useRef();
  const [{ y, scale, top, perspective }, set] = useControls(() => ({
    y: { value: -150, step: 10, min: -2000, max: 2000 },
    scale: { value: 0.05, min: 0, max: 0.2 },
    top: { value: 16, min: 0, max: 200 },
    perspective: { value: 900, min: 0, max: 2000 },
  }));

  useEffect(() => {
    if (lastIndex === index) return;
    if (!ref.current) return;
    if (!frameRef.current) return;
    if (!spacerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        scale: Math.max(0, 1 - (lastIndex - index) * scale),
        rotateX: '-10deg',
        y: y - index,
        immediateRender: true,
        scrollTrigger: {
          pin: ref.current,
          pinSpacing: false,
          pinSpacer: spacerRef.current,
          trigger: ref.current,
          endTrigger: () => {
            return `.el-${lastIndex}`;
          },
          start: () => {
            return `top top+=${60 + (index + 1) * top}`;
          },
          end: () => {
            if (lastIndex === index) {
              return 'bottom bottom';
            }

            return 'bottom bottom';
          },
          scrub: true,
          onUpdate: (e) => {
            if (lastIndex === index) return;
            const i = lastIndex - index;
            const s = mapValue(e.progress, 0, 1, 0, i);

            frameRef.current.style.opacity = lerp(0, 0.7, Math.min(1, s));
          },
        },
      });
    });

    // const st = new ScrollTrigger({
    //   trigger: '.outer',
    //   pin: ref.current,
    //   pinSpacing: false,
    //   markers: true,
    // });

    return () => {
      ctx.revert();
      // st.kill();
    };
  }, [index, lastIndex, y, scale, top]);

  useEffect(() => {
    const params = getSearchParameters();

    set(params);

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const url = new URL(window.location);
    url.searchParams.set('y', y);
    url.searchParams.set('scale', scale);
    url.searchParams.set('top', top);
    url.searchParams.set('perspective', perspective);
    window.history.pushState(null, '', url.toString());
  }, [ready, router, y, scale, top, perspective]);

  return (
    <div
      ref={spacerRef}
      style={{
        perspective: perspective + 'px',
      }}
    >
      <div ref={ref} className={cx('relative origin-top', `el-${index}`)}>
        {children}
        <div
          ref={frameRef}
          className="absolute inset-0 bg-white opacity-0"
        ></div>
      </div>
    </div>
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
      <div
        key={category + type}
        className={cx(
          'outer grid gap-20 opacity-100 transition-opacity duration-500',
          {}
        )}
        style={
          {
            // perspective: '900px',
          }
        }
      >
        {_cases.map((item, i) => (
          <AnimationWrapper key={i} index={i} lastIndex={_cases.length - 1}>
            <Link href={item.href}>
              <CaseSlide type="work" item={item} index={i} />
            </Link>
          </AnimationWrapper>
          // <CaseItem
          //   key={item.href}
          //   className="mb-4"
          //   {...item}
          //   image={item.imageMobile || item.image}
          //   columns={[
          //     {
          //       title: 'industry',
          //       items: item.industry,
          //     },
          //     {
          //       title: 'services',
          //       items: item.service,
          //     },
          //     {
          //       title: 'company',
          //       items: item.company,
          //     },
          //   ]}
          // />
        ))}
      </div>
    </div>
  );
}

function CasesLayout({ cases }) {
  const c1 = cases.filter((_, i) => i % 2 === 0);
  const c2 = cases.filter((_, i) => i % 2 !== 0);

  return (
    <div className="-mx-8 flex pb-[64px] xl:-mx-[56px]">
      <CasesRow cases={c1} />
      <CasesRow cases={c2} className="pt-[113px]" />
    </div>
  );
}
