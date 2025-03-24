import cx from 'clsx';
import Animated from '../../Animated';
import RoundControl from './RoundControl';


import { useState, useEffect } from "react";

const useResponsiveText = (breakpoint, smallScreenText, largeScreenText) => {
  const [text, setText] = useState(largeScreenText);

  useEffect(() => {
    const updateText = () => {
      setText(window.innerWidth < breakpoint ? smallScreenText : largeScreenText);
    };

    updateText();
    window.addEventListener("resize", updateText);

    return () => window.removeEventListener("resize", updateText);
  }, [breakpoint, smallScreenText, largeScreenText]);

  return text;
};




export default function InnovateSolutionTextBlock({
  title,
  subtitle,
  boxClassName,
  subBoxClassName = '',
}) {
  const text1 = useResponsiveText(1280, "AI tech", "Logistics");
  const text2 = useResponsiveText(1280, "Fintech", "Fintech");
  const text3 = useResponsiveText(1280, "Ed tech", "E-commerce");

  return (
    <div>
      <div className={cx('mb-1  flex justify-start ', {}, boxClassName)}>
        <div className="items-start xl:mb-11">
          <Animated
            style={{ fontFeatureSettings: 'normal' }}
            className="mb-6 text-center font-satoshi text-[28px]
                               font-medium
                               leading-[36px]
                               tracking-[var(--fonts-30-heading-5-letter-spacing,-1px)] text-white md:text-start  md:text-[40px] md:leading-[45px] md:tracking-[var(--fonts-30-heading-5-letter-spacing,-2px)]
  xl:text-[56px] xl:leading-[64px] xl:tracking-[var(--fonts-30-heading-5-letter-spacing,-2px)] forced-colors:accent-white "
          >
            {title}
          </Animated>
          <Animated
            className={cx(
              'text-center font-inter text-[14px] leading-[16.8px] text-[#FFFFFF] text-opacity-70 md:text-start md:text-[16px] md:leading-[20.8px] xl:text-[16px] xl:leading-[20.8px]',
              {},
              subBoxClassName
            )}
          >
            {subtitle}
          </Animated>
          <Animated>
            <div className="flex-row  mt-[15px] md:mt-[45px] flex xl:mt-[130px] xl:flex justify-center md:justify-start">
              <RoundControl
                className="box-sizing-border mt-[10px] sm:m-[10px_0_10px_0] !mr-3  flex h-[fit-content] !bg-transparent  p-[12px_0_12px_0] text-center !font-normal md:font-medium !text-white w-[91px] xl:w-[140px] xl:text-[20px] xl:leading-[24.2px] "
                text={text1}
              />
              <RoundControl
                className="box-sizing-border mt-[10px] sm:m-[10px_0_10px_0] !mr-3 flex h-[fit-content] !bg-transparent  p-[12px_0_12px_0] text-center !font-normal md:font-medium !text-white w-[91px] xl:w-[128px] xl:text-[20px] xl:leading-[24.2px]"
                compact
                text={text2}
              />
              <RoundControl
                className="box-sizing-border  mt-[10px] sm:m-[10px_0_10px_0]  flex h-[fit-content] !bg-transparent  p-[12px_0_12px_0] text-center !font-normal md:font-medium !text-white w-[91px] xl:w-[180px] xl:text-[20px] xl:leading-[24.2px]"
                compact
                text={text3}
              />
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
}
