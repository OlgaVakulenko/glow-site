import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Box from '../../Box';
import Layout from '../../Layout';

gsap.registerPlugin(MotionPathPlugin);

export default function AiHeader() {
	const svgRef = useRef(null)

	useEffect(() => {
    if (svgRef.current) {
      const svgElement = svgRef.current.contentDocument;
      const paths = svgElement.querySelectorAll('path');

      paths.forEach((path) => {
        const length = path.getTotalLength();

        const electricPath = path.cloneNode();
        electricPath.style.stroke = 'red';
        electricPath.style.strokeWidth = '2px';

        path.parentNode.appendChild(electricPath);

        gsap.set(electricPath, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(electricPath, {
          strokeDashoffset: 0,
          duration: 2,
          repeat: -1,
          ease: 'power1.inOut',
        });
      });
    }
  }, []);

	return (
		<section>
			<Box>
		<Layout>
		{/* <object
        ref={svgRef}
        type="image/svg+xml"
        data="/img/ai-background.svg"
        className='ai-background-overlay'
      /> */}
			<div className="xl:w-3/4 md:w-3/4 mx-auto xl:mt-36 xl:mb-[230px] md:mt-[120px] md:mb-[210px] mt-[52px] mb-[108px] flex flex-col items-center z-[6]">
				<div className='case-card-dark gradient-red-border rounded-full px-6 py-3 font-inter text-next-body-xs w-max'>
					Transforming AI visions into success
				</div>
				<h1 className="xl:leading-[89px] xl:mt-10 md:mt-11 mt-10 text-next-heading-4 md:text-next-heading-2 xl:text-next-heading-0 w-full text-center ">
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
	</Box>
		</section>
	)
}