import { useMemo, useEffect, useRef} from 'react';
import { useAtom } from 'jotai';
import { mediaAtom } from '../lib/agent';
import Image from "./Image";
import Heading from "./Heading";
import Animated from './Animated';
import { awardItems } from '../data/awards-data';
import Layout from './Layout';

function AwardCard({ item }) {
	return (
		<div className="bg-black bg-opacity-[0.03] rounded-[32px] pt-6 pb-4 px-[14px] md:pt-8 md:pb-6 xl:pt-[49px] xl:pb-8 w-[164px] md:min-w-[216px] xl:min-w-[304px] flex flex-col justify-end items-center flex-shrink-0 gap-y-6 md:gap-y-8 xl:gap-y-12">
			<div className="relative">
				<div className="bg-black rounded-full w-[88px] h-[88px] md:w-24 md:h-24 xl:w-[113px] xl:h-[113px] flex justify-center items-center flex-shrink-0">
					<Image src={item.imgSrc} alt='award icon'/>
				</div>			
				<div className="absolute bottom-0 right-1 bg-[#F8F8F8] text-black rounded-full text-next-body-xs py-1 px-[6px] w-7 h-7">
					x{item.qnt}
				</div>
			</div>
			<div className="mt-4 text-center text-black font-inter text-next-body-s">
				{item.title}
			</div>
		</div>
	);
}

export default function Awards() {
	const [media] = useAtom(mediaAtom);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row1Start = useRef(0);
  const row2Start = useRef(0);

  const isPausedRow1Ref = useRef(false);
  const isPausedRow2Ref = useRef(false);

	const items = useMemo(() => {
		if (media === 'mobile') return awardItems.filter((item) => item.mobile);
		else return awardItems;
	}, [media]);

	const title = useMemo(() => {
		return (
			<>
				We have won several<br/>
				design awards
			</>
		);
	}, []);

	useEffect(() => {
    let animationFrameId1;
    let animationFrameId2;

    const animateRow1 = () => {
      if (!isPausedRow1Ref.current) {
        row1Start.current += -1 * 0.7;
        const totalWidth = row1Ref.current.scrollWidth / 2;

        if (Math.abs(row1Start.current) >= totalWidth) {
          row1Start.current = 0;
        }

        row1Ref.current.style.transform = `translateX(${row1Start.current}px)`;
      }

      animationFrameId1 = requestAnimationFrame(animateRow1);
    };

    const animateRow2 = () => {
      if (!isPausedRow2Ref.current) {
        row2Start.current += 1 * 0.7;
        const totalWidth = row2Ref.current.scrollWidth / 2;

        if (row2Start.current >= 0) {
          row2Start.current = -totalWidth;
        }

        row2Ref.current.style.transform = `translateX(${row2Start.current}px)`;
      }

      animationFrameId2 = requestAnimationFrame(animateRow2);
    };

    animateRow1();
    animateRow2();

    return () => {
      if (animationFrameId1) cancelAnimationFrame(animationFrameId1);
      if (animationFrameId2) cancelAnimationFrame(animationFrameId2);
    };
  }, [items]); 

  const handleMouseEnterRow1 = () => {
    isPausedRow1Ref.current = true;
  };
  const handleMouseLeaveRow1 = () => {
    isPausedRow1Ref.current = false;
  };
  const handleMouseEnterRow2 = () => {
    isPausedRow2Ref.current = true;
  };
  const handleMouseLeaveRow2 = () => {
    isPausedRow2Ref.current = false;
  };

  return (
    <Animated className="py-[52px] md:py-[72px] xl:py-[88px] overflow-hidden">
      <Layout>
        <Heading
          title={title}
          titleClassNames="xl:!mb-20 md:!mb-14 !mb-10"
        />
      </Layout>

      <div
        className="relative w-full overflow-hidden mb-6"
        onMouseEnter={handleMouseEnterRow1}
        onMouseLeave={handleMouseLeaveRow1}
        onTouchStart={handleMouseEnterRow1}
        onTouchEnd={handleMouseLeaveRow1}
      >
        <div
          ref={row1Ref}
          className="flex gap-6 md:gap-8"
          style={{ whiteSpace: "nowrap" }}
        >
          {[...items, ...items].map((item, index) => (
            <AwardCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnterRow2}
        onMouseLeave={handleMouseLeaveRow2}
        onTouchStart={handleMouseEnterRow2}
        onTouchEnd={handleMouseLeaveRow2}
      >
        <div
          ref={row2Ref}
          className="flex gap-6 md:gap-8"
          style={{ whiteSpace: "nowrap" }}
        >
          {[...items, ...items].map((item, index) => (
            <AwardCard key={index} item={item} />
          ))}
        </div>
      </div>
    </Animated>
  );
}
