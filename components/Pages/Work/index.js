import cx from 'clsx';
import { atom, useAtom } from 'jotai';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from '../../../dist/gsap';
import { useMediaAtom } from '../../../lib/agent';
import Animated from '../../Animated';
import { getFullTitle } from '../../HeadTitle';
import IntroSection from '../../IntroSection';
import Layout from '../../Layout';
import { Separator } from '../About';
import cases from '../Cases/data';
import { CaseSlide, CasesRow } from '../Home/CasesSlider';
import CaseCard from '../Home/CaseCard';

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
  const media = useMediaAtom();
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const ref = useRef();
  const spacerRef = useRef();
  const frameRef = useRef();
  const frameRef2 = useRef();
  const y = -150;
  const scale = 0.05;
  const top = 16;
  const perspective = 700;
  // const [{ y, scale, top, perspective }, set] = useControls(() => ({
  //   y: { value: -150, step: 10, min: -2000, max: 2000 },
  //   scale: { value: 0.05, min: 0, max: 0.2 },
  //   top: { value: 16, min: 0, max: 200 },
  //   perspective: { value: 750, min: 0, max: 2000 },
  // }));

  useEffect(() => {
    if (media === 'mobile') return;
    if (lastIndex === index) return;
    if (!ref.current) return;
    if (!frameRef.current) return;
    if (!spacerRef.current) return;

    const isLast = index === lastIndex;

    const e = (val, defaultVal) => (isLast ? defaultVal : val);

    const ctx = gsap.context(() => {
      console.log(index);
      if (index !== 0) {
        gsap.fromTo(
          '.item-shadow',
          { opacity: 0 },
          {
            opacity: 1,
            immediateRender: true,
            scrollTrigger: {
              trigger: ref.current,
              scrub: true,
              start: 'top 50%',
              end: 'bottom 50%',
            },
          }
        );
      }

      gsap.to(ref.current, {
        scale: e(Math.max(0, 1 - (lastIndex - index) * scale), 1),
        rotateX: e(`${-10 + index}deg`, '0deg'),
        y: y - index,
        immediateRender: true,
        scrollTrigger: {
          pin: !isLast ? ref.current : false,
          pinSpacing: false,
          pinSpacer: spacerRef.current,
          trigger: ref.current,
          markers: isLast ? true : false,
          endTrigger: () => {
            return `.el-${lastIndex}`;
          },
          start: () => {
            return `top top+=${60 + (index + 1) * top}`;
          },
          end: () => {
            if (isLast) {
              return 'bottom 50%';
            }

            return 'bottom bottom';
          },
          scrub: true,
          onUpdate: (e) => {
            if (isLast) return;
            const i = lastIndex - index;
            const s = mapValue(e.progress, 0, 1, 0, i);

            if (frameRef.current) {
              frameRef.current.style.opacity = lerp(0, 0.7, Math.min(1, s));
            }
            // if (frameRef2.current) {
            //   frameRef2.current.style.opacity = lerp(0, 0.7, Math.min(1, s));
            // }
          },
        },
      });
    }, spacerRef.current);

    return () => {
      ctx.revert();
    };
  }, [index, lastIndex, y, scale, top, media]);

  return (
    <div
      ref={spacerRef}
      style={{
        perspective: perspective + 'px',
        perspectiveOrigin: 'top',
      }}
    >
      <div ref={ref} className={cx('relative origin-top', `el-${index}`)}>
        <div
          className="item-shadow pointer-events-none absolute inset-0 mx-auto h-[50%] w-[90%] opacity-0"
          style={{
            boxShadow: '0px -30px 200px -30px rgba(0, 0, 0, 0.3)',
          }}
        ></div>
        <div className="relative z-10">{children}</div>
        <div
          ref={frameRef}
          className="pointer-events-none absolute inset-0 z-[10] rounded-3xl bg-white opacity-0"
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
          'outer grid gap-10 opacity-100 transition-opacity duration-500 md:gap-20',
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
              <CaseCard type="work" item={item} index={i} />
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
