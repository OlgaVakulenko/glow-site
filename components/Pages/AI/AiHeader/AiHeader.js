import { useEffect, useState, useRef, useCallback } from 'react';
import Layout from '../../../Layout';
import Animated from '../../../Animated';

const layersCount = { '2xl': 8, xl: 6, lg: 6, md: 6 };

const downLines = {
  '2xl': [1, 8],
  xl: [1, 3],
  lg: [1, 2],
  md: [1, 2],
};
const leftLines = {
  '2xl': [3, 5, 7, 8],
  xl: [1, 2, 5],
  lg: [1, 3, 6],
  md: [1, 4, 5],
};
const rightLines = {
  '2xl': [1, 2, 4, 6],
  xl: [3, 4, 6],
  lg: [2, 4, 5],
  md: [2, 3, 6],
};

const animationDurationMap = {
  '2xl': 5300,
  xl: 4500,
  lg: 4500,
  md: 4000,
};
const downLineAnimationDuration = 3900;
const animationDelay = 100;

export default function AiHeader() {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMaskLayer, setActiveMaskLayer] = useState('');
  const usedLayersRef = useRef([]);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftDownRef = useRef(null);
  const rightDownRef = useRef(null);
  const animationFrameRef = useRef(null);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 2000) setScreenSize('2xl');
    else if (width >= 1600) setScreenSize('xl');
    else if (width >= 1280) setScreenSize('lg');
    else if (width >= 820) setScreenSize('md');
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const runAnimationCycle = useCallback(() => {
    if (screenSize && screenSize in layersCount) {
      const maxNumber = layersCount[screenSize];
      let randomLayer;

      do {
        randomLayer = Math.floor(Math.random() * maxNumber) + 1;
      } while (
        usedLayersRef.current.includes(randomLayer) &&
        usedLayersRef.current.length < maxNumber
      );

      usedLayersRef.current.push(randomLayer);
      if (usedLayersRef.current.length >= maxNumber) {
        usedLayersRef.current = [];
      }

      const newLayer = `/img/ai/mask/${screenSize}/layer_${randomLayer}.svg`;

      [
        leftRef.current,
        rightRef.current,
        leftDownRef.current,
        rightDownRef.current,
      ].forEach((line) => {
        if (line) {
          line.style.visibility = 'hidden';
          line.style.animation = 'none';
        }
      });

      setActiveMaskLayer(newLayer);

      const duration = downLines[screenSize].includes(randomLayer)
        ? downLineAnimationDuration
        : animationDurationMap[screenSize];

      requestAnimationFrame(() => {
        if (downLines[screenSize].includes(randomLayer)) {
          if (
            leftLines[screenSize].includes(randomLayer) &&
            leftDownRef.current
          ) {
            leftDownRef.current.style.visibility = 'visible';
            leftDownRef.current.style.animation = `line-down-to-up-left ${duration}ms linear forwards`;
          } else if (
            rightLines[screenSize].includes(randomLayer) &&
            rightDownRef.current
          ) {
            rightDownRef.current.style.visibility = 'visible';
            rightDownRef.current.style.animation = `line-down-to-up-right ${duration}ms linear forwards`;
          }
        } else if (
          leftLines[screenSize].includes(randomLayer) &&
          leftRef.current
        ) {
          leftRef.current.style.visibility = 'visible';
          leftRef.current.style.animation = `line-up-to-down-left ${duration}ms linear forwards`;
        } else if (
          rightLines[screenSize].includes(randomLayer) &&
          rightRef.current
        ) {
          rightRef.current.style.visibility = 'visible';
          rightRef.current.style.animation = `line-up-to-down-right ${duration}ms linear forwards`;
        }

        animationFrameRef.current = setTimeout(
          runAnimationCycle,
          duration + animationDelay
        );
      });
    }
  }, [screenSize]);

  useEffect(() => {
    runAnimationCycle();

    return () => {
      if (animationFrameRef.current) {
        clearTimeout(animationFrameRef.current);
      }
    };
  }, [runAnimationCycle]);

  return (
    <section className="ai-background pb-[56px] pt-[88px] md:py-[72px] xl:mt-[88px] xl:pb-[88px] xl:pt-0 2xl:pt-0">
      <Layout>
        <div className="z-[6] mx-auto mb-0 mt-[52px] flex flex-col items-center md:mb-[135px] md:mt-[135px] md:w-3/4 xl:mb-[135px] xl:mt-0 xl:w-3/4">
          <div className="relative flex w-full justify-center align-bottom xl:pt-[22px]">
            <div className="ai-button-icon-left hidden h-[167px] w-[288px] xl:block">
              <div className="header-button-line-left relative h-full w-full">
                <div
                  className="header-button-animated-line left"
                  ref={leftRef}
                ></div>
              </div>
            </div>
            <Animated delay={100} className="self-end">
              <div className="dark-tag gradient-red-border h-[44px] w-[289px] rounded-full px-6 py-3">
                <span className="!bg-dark-tag overtext font-inter text-next-body-xs font-normal text-[#FFFFFFCC]">
                  Transforming AI visions into success
                </span>
              </div>
            </Animated>
            <div className="ai-button-icon-right hidden h-[167px] w-[293px] xl:block">
              <div className="header-button-line-right relative h-full w-full">
                <div
                  className="header-button-animated-line right"
                  ref={rightRef}
                ></div>
              </div>
            </div>
          </div>
          <Animated
            as="h1"
            className="ai-header-text-white mt-10 w-full text-center text-next-heading-4 md:mt-11 md:text-next-heading-2 xl:mt-10 xl:pb-1 xl:text-next-heading-0"
          >
            Design services for
            <br />
            <span className="ai-text-header">
              {' '}
              AI products
              <br className="block md:hidden" />
            </span>{' '}
            that change
            <br /> the world
          </Animated>
        </div>
      </Layout>
      <div className="ai-background-overlay hidden md:block">
        {screenSize && (
          <div
            className="relative top-0 h-full w-full"
            style={{
              WebkitMaskImage: activeMaskLayer
                ? `url(${activeMaskLayer})`
                : `url(/img/ai/mask/${screenSize}/default.svg)`,
              maskImage: activeMaskLayer
                ? `url(${activeMaskLayer})`
                : `url(/img/ai/mask/${screenSize}/default.svg)`,
            }}
          >
            <div
              className="animated-line left"
              ref={leftRef}
              style={{ visibility: 'hidden', animation: 'none' }}
            ></div>
            <div
              className="animated-line right"
              ref={rightRef}
              style={{ visibility: 'hidden', animation: 'none' }}
            ></div>
            <div
              className="animated-line left-down"
              ref={leftDownRef}
              style={{ visibility: 'hidden', animation: 'none' }}
            ></div>
            <div
              className="animated-line right-down"
              ref={rightDownRef}
              style={{ visibility: 'hidden', animation: 'none' }}
            ></div>
          </div>
        )}
      </div>
    </section>
  );
}
