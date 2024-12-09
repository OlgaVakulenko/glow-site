import cx from 'clsx';
import Animated from '../../Animated';
import RoundControl from './RoundControl';

export default function InnovateSolutionTextBlock({
  title,
  subtitle,
  boxClassName,
  subBoxClassName = '',
}) {
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
            <div className="hidden flex-row justify-start md:mt-[53px] md:flex xl:mt-[130px] xl:flex">
              <RoundControl
                className="box-sizing-border m-[10px_0_10px_0] mr-3  flex h-[fit-content] !bg-transparent  p-[12px_0_12px_0] text-center font-medium !text-white md:w-[91px] xl:w-[140px] xl:text-[20px] xl:leading-[24.2px] "
                text="Logistics"
              />
              <RoundControl
                className="box-sizing-border m-[10px_0_10px_0] mr-3 flex h-[fit-content] !bg-transparent  p-[12px_0_12px_0] text-center font-medium !text-white md:w-[91px] xl:w-[128px] xl:text-[20px] xl:leading-[24.2px]"
                compact
                text="Fintech"
              />
              <RoundControl
                className="box-sizing-border m-[10px_0_10px_0]  flex h-[fit-content] !bg-transparent  p-[12px_0_12px_0] text-center font-medium !text-white md:w-[91px] xl:w-[180px] xl:text-[20px] xl:leading-[24.2px]"
                compact
                text="E-commerce"
              />
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
}
