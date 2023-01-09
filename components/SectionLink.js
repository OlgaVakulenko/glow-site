import Link from 'next/link';
import { useMemo } from 'react';
import Animated from './Animated';
import Go from './Go';
import Layout from './Layout';
import LinkArrow from './LinkArrow';
import LinkArrowCircle from './LinkArrowCircle';
import RollingText from './RollingText';
import cx from 'clsx';
import { useAtom } from 'jotai';
import { mediaAtom } from '../lib/agent';

export default function SectionLink({
  className,
  title,
  description,
  href,
  buttonLabel,
  showButtonOnMobile = false,
}) {
  const [media] = useAtom(mediaAtom);

  const Wrapper = useMemo(() => {
    if (href) {
      return function Wrapper({ children, ...props }) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      };
    } else {
      return function Wrapper({ children, ...props }) {
        return <div {...props}>{children}</div>;
      };
    }
  }, [href]);

  return (
    <Layout className={className}>
      <Wrapper className="rolling-text-container group">
        <div className="flex flex-col items-center justify-between md:flex-row  md:items-start">
          <Animated className="mb-[15px] font-glow text-xl font-medium leading-[34px] tracking-[0.02em] md:mb-0 md:w-full md:max-w-[240px] md:text-[22px] xl:max-w-[320px] xl:text-2xl xl:leading-10">
            {title}
          </Animated>
          <Animated
            delay={150}
            className={cx(
              'text-center text-lg italic leading-6 md:flex-grow md:text-left md:text-xl md:leading-[27px]',
              {
                'mb-9': showButtonOnMobile,
              }
            )}
          >
            <div className="md:max-w-[440px]">{description}</div>
          </Animated>
          {buttonLabel && (media === 'mobile' ? showButtonOnMobile : true) ? (
            <Animated delay={300}>
              <span
                className={cx(
                  'min-w-[144px] md:min-w-[184px]',
                  'glow-border-black rolling-text-group flex justify-center whitespace-pre-wrap rounded-full px-[19px] py-[14px] text-center text-button-m uppercase shadow-black transition-all duration-500',
                  // 'hover:text-brand'
                  // t === 'white' &&
                  'glow-border-b-b group-hover:!bg-brand group-hover:!text-black'
                  // t === 'dark' &&
                  //   'glow-border-white text-white hover:text-white'
                )}
              >
                <RollingText height={20} text={buttonLabel}></RollingText>
              </span>
            </Animated>
          ) : (
            <Animated delay={300} className="hidden md:block">
              <LinkArrowCircle />
            </Animated>
          )}
        </div>
      </Wrapper>
    </Layout>
  );
}
