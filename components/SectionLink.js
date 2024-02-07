import cx from 'clsx';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useMemo } from 'react';
import { mediaAtom } from '../lib/agent';
import Animated from './Animated';
import Layout from './Layout';
import RollingText from './RollingText';

export default function SectionLink({
  className,
  title,
  description,
  href,
  buttonLabel,
  hasBorder = false,
  showButtonOnMobile = false,
  linkProps = {},
  withLayout = true,
  theme,
}) {
  const [media] = useAtom(mediaAtom);

  const Wrapper = useMemo(() => {
    if (href) {
      return function Wrapper({ children, ...props }) {
        return (
          <Link href={href} {...linkProps} {...props}>
            {children}
          </Link>
        );
      };
    } else {
      return function Wrapper({ children, ...props }) {
        return <div {...props}>{children}</div>;
      };
    }
  }, [href, linkProps]);

  const LayoutEl = useMemo(() => {
    return withLayout ? Layout : 'div';
  }, [withLayout]);

  return (
    <LayoutEl className={className}>
      <Wrapper className="rolling-text-container group">
        <div
          className={cx(
            'flex flex-col items-center justify-between md:flex-row  md:items-start',
            {
              'border-t border-black pt-16': hasBorder,
            }
          )}
        >
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
          {buttonLabel && (media === 'mobile' ? showButtonOnMobile : true) && (
            <Animated delay={300}>
              <span
                className={cx(
                  'min-w-[144px] md:min-w-[184px]',
                  'glow-border-black rolling-text-group flex justify-center whitespace-pre-wrap rounded-full px-[19px] py-[14px] text-center text-button-m uppercase shadow-black transition-all duration-500',
                  // 'hover:text-brand'
                  // t === 'white' &&
                  'glow-border-b-b group-hover:!bg-brand group-hover:!text-black',
                  theme === 'dark' &&
                    'glow-border-white !text-white hover:!text-white'
                )}
              >
                <RollingText height={20} text={buttonLabel}></RollingText>
              </span>
            </Animated>
          )}
        </div>
      </Wrapper>
    </LayoutEl>
  );
}
