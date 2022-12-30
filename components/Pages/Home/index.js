import Layout from '../../Layout';
import cx from 'clsx';
// import gsap from 'gsap';
import gsap, { ScrollTrigger } from '../../../dist/gsap';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef, useState } from 'react';
import { mediaAtom, useMediaAtom } from '../../../lib/agent';
import Animated from '../../Animated';
import { headerTheme, logoColor, useHeaderTheme } from '../../Header';
import CasesSlider, { CasesSlider2, CasesSlider3 } from './CasesSlider';
import Niches from './Niches';
import OurClients from './OurClients';
import OutProjectsLink from './OurProjectsLink';
import Reviews from './Reviews';
// import Showreel from './Showreel';
import Workflow from './Workflow';
import dynamic from 'next/dynamic';
import { useSetAtom } from 'jotai';
import Star from '../../Star';
import PageHeading from '../../PageHeading';
import PageSubheading from '../../PageSubheading';
import DimSection from '../../DimSection';

// const Reviews = dynamic(() => import('./Reviews'));

function RollingWords({ words, interval = 16500 }) {
  const [media] = useAtom(mediaAtom);
  const [index, setIndex] = useState(0);
  const [showClass, setShowClass] = useState(false);
  const [refWidths, setRefWidths] = useState([]);
  const root = useRef(null);
  const refs = useRef([]);
  const rollingWords = useMemo(() => {
    const head = [];
    const tail = [];

    for (let i = 0; i < words.length; i++) {
      if (i >= index) {
        head.push(words[i]);
      } else {
        tail.push(words[i]);
      }
    }

    return [...head, ...tail];
  }, [index, words]);

  const switchToNext = () => {
    setIndex((i) => {
      let ni = i + 1;
      if (i >= words.length - 1) {
        ni = 0;
      }
      return ni;
    });
  };

  const handleTransitionEnd = (e, wi, li) => {
    if (wi === 1 && li === rollingWords[wi].length - 1) {
      switchToNext();
      setShowClass(false);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      setShowClass(true);
    }, interval);

    return () => {
      clearInterval(id);
    };
  }, [interval]);

  useEffect(() => {
    const widths = [];
    refs.current.map(({ el, index, word }) => {
      const w = Math.ceil(el.getBoundingClientRect()?.width);
      widths.push({
        el,
        index,
        word,
        width: w + 2,
      });
    });

    setRefWidths(widths);
  }, [media]);

  const v = refWidths.find((r) => r.word === rollingWords[0]);
  const vPref = refWidths.find((r) => r.word === rollingWords[1]);

  useEffect(() => {
    if (!v || !root.current) return;
    if (!showClass) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.fromTo(
        root.current,
        {
          maxWidth: v.width + 'px',
          // duration: 1000,
        },
        {
          maxWidth: vPref.width + 'px',
        }
      );

      // console.log(timeline);
    }, root);
  }, [v, showClass]);

  return (
    <span
      ref={root}
      className="inline-flex h-7 flex-col items-start overflow-hidden"
      // style={{
      //   maxWidth: refWidths.find((r) => r.word === rollingWords[0])?.width,
      // }}
    >
      {rollingWords.map((word, wi) => {
        return (
          <span
            ref={(el) => (refs.current[wi] = { el, index: wi, word })}
            key={word}
            className={cx('rolling-word')}
          >
            {word.split('').map((letter, li) => (
              <span
                key={li}
                className={cx('rolling-letter', {
                  ['active']: showClass,
                  ['transition-none']: !showClass,
                })}
                style={{
                  transitionDelay: 0.015 * li + 's',
                }}
                onTransitionEnd={(e) => handleTransitionEnd(e, wi, li)}
              >
                {letter}
              </span>
            ))}
            {/* word.split('').map((letter, i) => (<span key={i}>{letter}</span>) ) */}
          </span>
        );
      })}
    </span>
  );
}

function TmpBg({ children }) {
  const media = useMediaAtom();
  const tmpRef = useRef(null);

  useEffect(() => {
    if (media === 'mobile') {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        tmpRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: tmpRef.current,
            start: 'top top',
            end: 'top top-=300',
            scrub: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [media]);

  return (
    <div ref={tmpRef} style={{ paddingTop: media !== 'mobile' ? 200 : 0 }}>
      {children}
    </div>
  );
}

export default function Home() {
  const setHeaderTheme = useSetAtom(headerTheme);
  const setLogoColor = useSetAtom(logoColor);
  const firstSectionRef = useRef(null);
  const changeBgRef = useRef(null);
  const refScrollContainer = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = {
        color: '#19191B',
      };
      gsap.to(obj, {
        scrollTrigger: {
          trigger: firstSectionRef.current,
          start: '100% center',
          end: '130% center',
          scrub: true,
          onUpdate: () => {
            setLogoColor(obj.color);
          },
          onEnterBack: () => {
            setHeaderTheme((c) => c.filter((v) => v !== 'white'));
          },
          onLeave: () => {
            setHeaderTheme((c) => [...c, 'white']);
          },
        },
        color: '#E33230',
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(firstSectionRef.current, {
        scrollTrigger: {
          trigger: firstSectionRef.current,
          start: '100% center',
          end: '130% center',
          scrub: true,
        },
        backgroundColor: 'white',
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={refScrollContainer}>
      <div ref={firstSectionRef} className="bg-brand">
        <Layout>
          <div className="relative flex min-h-[calc(var(--lvh)*100)] flex-col justify-between pb-[48px] pt-[155px] md:min-h-screen md:pt-[280px]">
            <PageSubheading>
              Your trusted design team <br />
              for&nbsp;
              <RollingWords
                words={['transportation', 'healthcare', 'fintech']}
                interval={2200}
              />{' '}
              <div className="inline-flex">challenges.</div>
            </PageSubheading>

            <PageHeading>
              Simple design
              <br className="hidden md:block" /> for&nbsp;complex products
            </PageHeading>
          </div>
        </Layout>
      </div>
      <div ref={changeBgRef} className="bg-white">
        {/** tmp */}
        <TmpBg>
          {/* <div>
          <Showreel />
        </div> */}
          <Niches />
          {/* <CasesSlider2 /> */}
          <CasesSlider3 />
          <OutProjectsLink className="hidden md:block" />
        </TmpBg>
        <DimSection className="pb-14">
          <Workflow />
          <OurClients />
          <Animated>
            <Reviews />
          </Animated>
        </DimSection>
      </div>
    </div>
  );
}
