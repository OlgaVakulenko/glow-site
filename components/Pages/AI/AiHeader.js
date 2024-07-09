import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Layout from '../../Layout';
import { mediaAtom } from '../../../lib/agent';
import { useAtom } from 'jotai';

gsap.registerPlugin(MotionPathPlugin);

export default function AiHeader() {
	const [media] = useAtom(mediaAtom)
  const svgRef = useRef(null);

	useEffect(() => {
    if (svgRef.current) {
      const ref = svgRef.current;
      ref.addEventListener('load', () => {
        const svgElement = ref.contentDocument;
        if (svgElement) {
          const paths = svgElement.querySelectorAll('path');

          paths.forEach((path) => {
            const length = path.getTotalLength();
            const electricPath = path.cloneNode();
						
            electricPath.style.stroke = '#E33230';
            electricPath.style.strokeWidth = '1px';

            path.parentNode.appendChild(electricPath);

						const dashLength = 30;

						gsap.set(electricPath, { strokeDasharray: `${dashLength} ${length}` });

            const tl = gsap.timeline({ repeat: -1, repeatDelay: Math.random() * 2 });
          tl.to(electricPath, {
            strokeDashoffset: -length,
            duration: 0.7,
            ease: 'none',
          });
        });
        }
      });
    }
  }, [media]);

  return (
    <section className='ai-background py-[52px] md:py-[72px] xl:mt-[88px] xl:pb-[88px]'>
      <Layout>
        <div className="xl:w-3/4 md:w-3/4 mx-auto xl:mt-[70px] xl:mb-[120px] md:mt-[135px] md:mb-[135px] mt-[52px] mb-[108px] flex flex-col items-center z-[6]">
          <div className='case-card-dark gradient-red-border rounded-full px-6 py-3 font-inter text-next-body-xs w-max'>
            Transforming AI visions into success
          </div>
          <h1 className="xl:leading-[88px] xl:mt-9 md:mt-11 mt-10 text-next-heading-4 md:text-next-heading-2 xl:text-next-heading-0 w-full text-center ">
            <span className='white-gradient-text'>Turning ideas into</span>{' '}<br className='hidden md:block'/>
            <span className='white-gradient-text'>impactful</span>{' '} 
            <span className='red-gradient-text inline-block'>{' '}
              AI products
            </span>
            <br className='hidden md:block'/> 
            <span className='white-gradient-text'>
              through design
            </span>
          </h1>
        </div>
      </Layout>
			{media === 'desktop' && 
				<object
					ref={svgRef}
					type="image/svg+xml"
					data="/img/ai-background.svg"
					className={`ai-background-overlay -z-10`}
      	/>
			}
			{media === 'tablet' && 
				<object
					ref={svgRef}
					type="image/svg+xml"
					data="/img/ai-bg-tablet.svg"
					className={`ai-background-overlay`}
				/>
			}
    </section>
  );
}
