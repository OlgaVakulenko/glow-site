import Layout from '../../Layout';
import cx from 'clsx';
import gsap from 'gsap';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef, useState } from 'react';
import { mediaAtom } from '../../../lib/agent';
import Animated from '../../Animated';
import { useHeaderTheme } from '../../Header';
import CasesSlider, { CasesSlider2 } from './CasesSlider';
import Niches from './Niches';
import OurClients from './OurClients';
import OutProjectsLink from './OurProjectsLink';
import Reviews from './Reviews';
import Showreel from './Showreel';
import Workflow from './Workflow';

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

    // if (showClass) {
    //   console.log(v?.word, vPref?.word);
    //   console.log('From', v?.width, 'To', vPref?.width);
    // }
    // console.log(v.width);
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
      className="inline-flex h-8 flex-col items-start overflow-hidden"
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

export default function Home() {
  const firstSectionRef = useRef(null);
  const changeBgRef = useRef(null);
  const trigger = useRef(null);
  const refScrollContainer = useRef(null);

  useHeaderTheme(changeBgRef, 'white');

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trigger.current, {
        scrollTrigger: {
          trigger: trigger.current,
          start: 'top 90%',
          end: '+=300',
          scrub: true,
          // markers: true,
        },
        // backgroundColor: '#F3F2F4',
        opacity: 1,
        ease: 'none',
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
          <div className="relative flex min-h-[calc(var(--lvh)*100)] flex-col justify-between pb-[48px] pt-[155px] md:min-h-screen md:pt-[280px] md:pb-[89px] xl:pb-[49px]">
            <Animated
              className="relative ml-auto min-w-[232px] max-w-[252px] text-lg italic md:min-w-[308px] md:max-w-[328px] md:text-subtitle-l xl:mr-[200px]"
              delay={200}
            >
              <div className="absolute left-0 top-[-32px]">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66499 17.0667L6.89169 11.0769L1.93451 14.8513L-2.15194e-07 12.1436L4.99748 8.53332L-5.30813e-07 4.92306L1.93451 2.17434L6.89169 5.9487L8.66499 -1.30005e-05L11.8086 1.02563L9.83375 6.93332L16 6.85127L16 10.2154L9.87406 10.1333L11.8086 16.041L8.66499 17.0667Z"
                    fill="#19191B"
                  />
                </svg>
              </div>
              Your trusted design team <br />
              for&nbsp;
              <RollingWords
                words={['transportation', 'healthcare', 'fintech']}
                interval={2200}
              />{' '}
              <div className="inline-flex">challenges.</div>
            </Animated>

            {/* <div className="absolute top-[27px] left-[-16px]">
            <svg
              width="320"
              height="380"
              viewBox="0 0 320 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M112.665 17.0667L110.892 11.0769L105.935 14.8513L104 12.1436L108.997 8.53332L104 4.92306L105.935 2.17434L110.892 5.9487L112.665 -1.37302e-05L115.809 1.02563L113.834 6.93332L120 6.85127L120 10.2154L113.874 10.1333L115.809 16.041L112.665 17.0667Z"
                fill="#19191B"
              />
              <path
                d="M95 14C63.6667 28.3333 -6.4 64.1 -36 92.5"
                stroke="#19191B"
              />
              <path
                d="M236.333 376.5C236.333 377.973 237.527 379.167 239 379.167C240.473 379.167 241.667 377.973 241.667 376.5C241.667 375.027 240.473 373.833 239 373.833C237.527 373.833 236.333 375.027 236.333 376.5ZM239.218 376.95C280.579 356.896 305.813 325.898 315.359 294.539C324.904 263.181 318.759 231.452 297.343 210.036L296.635 210.743C317.748 231.856 323.858 263.182 314.402 294.248C304.946 325.311 279.921 356.104 238.782 376.05L239.218 376.95ZM297.343 210.036C282.73 195.424 259.403 187.046 231.089 183.462C202.763 179.877 169.374 181.083 134.558 185.703C64.9266 194.944 -10.5014 217.859 -62.7207 243.552L-62.2793 244.449C-10.1653 218.808 65.1568 195.923 134.689 186.695C169.455 182.081 202.751 180.884 230.964 184.454C259.189 188.026 282.253 196.361 296.635 210.743L297.343 210.036Z"
                fill="#19191B"
              />
            </svg>
          </div> */}
            <div className="sticky bottom-[48px] font-glow text-[40px] font-medium leading-10 md:text-[60px] md:leading-[64px] xl:text-[64px]">
              <Animated as="h1">
                Simple design
                <br className="hidden md:block" /> for&nbsp;complex products
              </Animated>
              {/* The logical aesthetics your{' '} */}
              {/* <span className="block w-full text-right">experience</span> */}
            </div>
          </div>
        </Layout>
      </div>
      <div ref={changeBgRef} className="bg-white">
        <div>
          <Showreel />
        </div>
        <Niches />
        <CasesSlider2 />
        <OutProjectsLink className="hidden md:block" />

        <div
          ref={trigger}
          style={
            {
              // backgroundColor: 'rgb(255,255,255)',
              // transition: 'background-color .5s',
            }
          }
          className="bg-dim pb-14 opacity-0"
        >
          <Workflow />
          <OurClients />
          <Reviews />
        </div>
      </div>
    </div>
  );
}
