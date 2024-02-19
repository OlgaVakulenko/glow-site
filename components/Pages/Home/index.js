import cx from 'clsx';
// import gsap from 'gsap';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from '../../../dist/gsap';
import { mediaAtom, useMediaAtom } from '../../../lib/agent';
import Animated from '../../Animated';
import { headerTheme, logoColor } from '../../Header';
import CasesSlider from './CasesSlider';
import Niches from './Niches';
import OurClients from './OurClients';
import Reviews from './Reviews';
// import Showreel from './Showreel';
import { useSetAtom } from 'jotai';
import DimSection from '../../DimSection';
import IntroSection from './IntroSection';
import OutProjectsLink from './OurProjectsLink';
import Workflow from './Workflow';

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
  const changeBgRef = useRef(null);
  const refScrollContainer = useRef(null);

  // useEffect(() => {
  //   return;
  //   const ctx = gsap.context(() => {
  //     const obj = {
  //       color: '#19191B',
  //     };
  //     gsap.to(obj, {
  //       scrollTrigger: {
  //         trigger: firstSectionRef.current,
  //         start: '100% center',
  //         end: '130% center',
  //         scrub: true,
  //         onUpdate: () => {
  //           setLogoColor(obj.color);
  //           console.log(obj.color);
  //         },
  //         onEnterBack: () => {
  //           setHeaderTheme((c) => c.filter((v) => v !== 'white'));
  //         },
  //         onLeave: () => {
  //           setHeaderTheme((c) => [...c, 'white']);
  //         },
  //       },
  //       color: '#E33230',
  //     });
  //   });

  //   return () => {
  //     ctx.revert();
  //   };
  // }, []);

  return (
    <div ref={refScrollContainer}>
      <IntroSection />
      <div ref={changeBgRef} className="bg-white">
        {/** tmp */}
        {/* <TmpBg> */}
        {/* <div>
          <Showreel />
        </div> */}
        <Niches />
        {/* <CasesSlider2 /> */}
        <CasesSlider />
        {/* <div className="mt-10 mb-20 flex justify-center md:mb-48 md:-mt-10">
          <Button href="/work" theme="white">
            View all case studies
          </Button>
        </div> */}
        <OutProjectsLink hasBorder={true} className="hidden md:block" />
        {/* </TmpBg> */}
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
