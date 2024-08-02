import { useEffect, useState, useRef } from 'react';
import Layout from '../../../Layout';
import Animated from '../../../Animated';

const layersCount = { '2xl': 11, 'xl': 10, 'lg': 7, 'md': 9 };

const animationDuration = 3000; 
const animationDelay = 1; 

export default function AiHeader() {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMaskLayer, setActiveMaskLayer] = useState('');
  const [layerIndex, setLayerIndex] = useState(0);
  const usedLayersRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 2000) setScreenSize('2xl');
      else if (width >= 1800) setScreenSize('xl');
      else if (width >= 1280) setScreenSize('lg');
      else if (width >= 1024) setScreenSize('md');
    };

    if (!screenSize) handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [screenSize]);

  useEffect(() => {
    if (screenSize && screenSize in layersCount) {
      const maxNumber = layersCount[screenSize];
      let randomLayer;

      do {
        randomLayer = Math.floor(Math.random() * maxNumber) + 1;
      } while (usedLayersRef.current.includes(randomLayer) && usedLayersRef.current.length < maxNumber);

      usedLayersRef.current.push(randomLayer);
      if (usedLayersRef.current.length >= maxNumber) {
        usedLayersRef.current = [];
      }

      setActiveMaskLayer(`/img/ai/mask/${screenSize}/layer_${randomLayer}.svg`);
    }
  }, [screenSize, layerIndex]);

  useEffect(() => {
		if (activeMaskLayer) {
			const intervalId = setInterval(() => {
				setLayerIndex(prevIndex => prevIndex + 1);
	
				document.querySelectorAll('.animated-line').forEach(line => {
					line.style.animationPlayState = 'running';
				});

				setTimeout(() => {
					document.querySelectorAll('.animated-line').forEach(line => {
						line.style.animationPlayState = 'paused';
					});
				}, animationDuration);
	
			}, animationDuration + animationDelay);
	
			return () => clearInterval(intervalId);
		}
	}, [activeMaskLayer]);

  return (
    <section className='ai-background pt-[88px] pb-[56px] md:py-[72px] xl:pt-0 xl:mt-[88px] 2xl:mt-0 xl:pb-[88px] 2xl:pt-0'>
      <Layout>
        <div className="xl:w-3/4 md:w-3/4 mx-auto xl:mt-0 xl:mb-[135px] md:mt-[135px] md:mb-[135px] mt-[52px] mb-0 flex flex-col items-center z-[6]">
          <div className='relative xl:pt-[142px] 2xl:pt-[155px] w-full justify-center flex'>
            <div className='ai-button-icon-left h-full w-[235px] hidden xl:block'>
              <div className='relative w-full h-full header-button-line-left'>
                <div className='header-button-animated-line'></div>
              </div>
            </div>
            <Animated delay={100}>
              <div className='bg-dark-tag dark-tag gradient-red-border rounded-full px-6 py-3 font-inter text-next-body-xs w-max'>
                Transforming AI visions into success
              </div>
            </Animated>
            <div className='ai-button-icon-right h-full w-[235px] hidden xl:block'>
              <div className='relative w-full h-full header-button-line-right'>
                <div className='header-button-animated-line'></div>
              </div>
            </div>
          </div>
          <Animated
            as="h1"
            className='xl:pb-1 ai-header-text-white xl:mt-10 md:mt-11 mt-10 text-next-heading-4 md:text-next-heading-2 xl:text-next-heading-0 w-full text-center'
          >
            Design services for<br />
            <span className='ai-text-header'>{' '}
              AI products<br className='block md:hidden' />
            </span>
            {' '}that change<br /> the world
          </Animated>
        </div>
      </Layout>
      <div className='ai-background-overlay hidden md:block'>
        {screenSize && <div
          className='relative top-0 w-full h-full'
          style={{
            WebkitMaskImage: activeMaskLayer ? `url(${activeMaskLayer})` : `url(/img/ai/mask/${screenSize}/default.svg)`,
            maskImage: activeMaskLayer ? `url(${activeMaskLayer})` : `url(/img/ai/mask/${screenSize}/default.svg)`,
            WebkitMaskSize: 'cover',
            maskSize: 'cover',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        >
          <div className='animated-line' style={{ animationPlayState: 'paused' }}></div>
          <div className='animated-line' style={{ animationPlayState: 'paused' }}></div>
        </div>}
      </div>
    </section>
  );
}
