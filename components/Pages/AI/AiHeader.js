import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Layout from '../../Layout';
import { mediaAtom } from '../../../lib/agent';
import { useAtom } from 'jotai';
import Animated from '../../Animated';

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

						const dashLength = 60;

						gsap.set(electricPath, { strokeDasharray: `${dashLength} ${length}` });

            const tl = gsap.timeline({ repeat: -1, repeatDelay: Math.random() * 5 });
          tl.to(electricPath, {
            strokeDashoffset: -length,
            duration: 3,
            ease: 'none',
          });
        });
        }
      });
    }
  }, [media]);

  return (
    <section className='ai-background pt-[88px] pb-[56px] md:py-[72px] xl:mt-[88px] xl:pb-[88px]'>
      <Layout>
        <div className="xl:w-3/4 md:w-3/4 mx-auto xl:mt-[70px] xl:mb-[135px] md:mt-[135px] md:mb-[135px] mt-[52px] mb-0 flex flex-col items-center z-[6]">
					<Animated delay={100}>
						<div className='bg-dark-tag dark-tag gradient-red-border rounded-full px-6 py-3 font-inter text-next-body-xs w-max'>
							Transforming AI visions into success
						</div>
					</Animated>
					<Animated
						as="h1"
						className='xl:pb-1 ai-header-text-white xl:mt-10 md:mt-11 mt-10 text-next-heading-4 md:text-next-heading-2 xl:text-next-heading-0 w-full text-center'
					>
							Design services for<br/>
							<span className='ai-text'>{' '}
							AI products<br className='block md:hidden'/>
							</span>
							{' '}that change<br/> the world
					</Animated>
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
