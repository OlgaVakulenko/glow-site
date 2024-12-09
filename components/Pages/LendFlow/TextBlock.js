import Layout from '../../Layout';
import cx from 'clsx';
import Animated from '../../Animated';
import TextBlockIcon from '../LendFlow/assets/textBlocIcon.svg';
import Image, { Source } from '../../Image';

export default function TextBlock({
  topic,
  title,
  subtitle,
  topicClassName,
  boxClassName,
  subBoxClassName = '',
}) {
  return (
    <div className="mt-[100px] md:mt-[97px]">
      <div
        className="mx-[20] flex flex-col items-center bg-[#070919] md:mx-[100px] xl:mx-[300px] xl:rounded-[1440px] "
        style={{
          borderRadius: '50%',
          backgroundImage: `radial-gradient(circle at center, rgba(7, 9, 25, 0.08) 0, rgba(255, 255, 255, 0.08) 1px, #070919 0.5px, #070919 2px)`,
          backgroundSize: '13px 13px',
          backgroundRepeat: 'repeat',
          zIndex: 1,
        }}
      >
        <Animated>
          <div
            className={cx(
              'box-sizing-border relative mx-auto mb-6 flex h-[34px] flex-row  items-center  justify-between rounded-[52px] bg-[#2A2A2A] p-[8px_11px_8px_11px]',
              {},
              topicClassName
            )}
          >
            <Image
              src={TextBlockIcon}
              className="h-[18px] w-[18px] "
              alt="icon"
            />
            <div className=" inline-block break-words pt-0.5 font-inter text-[14px] font-medium leading-[16.94px]  text-[#FFFFFF]">
              {topic}
            </div>
          </div>
        </Animated>
        <div>
          <div
            className={cx(
              ' box-sizing-border relative mx-auto mb-6 flex flex-row justify-center p-[0px_12px_8px_12px]',
              {},
              boxClassName
            )}
          >
            <div className="items-center md:mb-11">
              <Animated
                style={{ fontFeatureSettings: 'normal' }}
                className=" mb-6 text-center font-satoshi text-[28px] font-medium leading-[36px] tracking-tighter text-white md:text-[48px] md:leading-[56px]
  xl:text-[56px] xl:leading-[64px] xl:tracking-[-2px] forced-colors:accent-white"
              >
                {title}
              </Animated>
              <div className="pl-8">
                <Animated
                  className={cx(
                    'relative text-center font-inter text-[14px] leading-[16.8px] text-[#FFFFFF] text-opacity-70 md:text-[16px] md:leading-[20.8px] xl:text-[16px] xl:leading-[20.8px]',
                    {},
                    subBoxClassName
                  )}
                >
                  {subtitle}
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
