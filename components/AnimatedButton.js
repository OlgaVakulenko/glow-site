import { useMemo } from 'react';
import cx from 'clsx';
import RollingText from './RollingText';

export default function AnimatedButton({
  as = 'button',
  className,
  bgClassName,
  children,
  ...props
}) {
  const Component = useMemo(() => {
    return as;
  }, [as]);

  const Wrapper = useMemo(() => {
    if (typeof children === 'string') {
      return function ButtonTextWrapper({ children }) {
        return <RollingText height={20} text={children} />;
      };
    }

    return () => children;
  }, [children]);

  return (
    <Component
      className={cx(
        'glow-border-brand rolling-text-group relative flex overflow-hidden whitespace-pre-wrap rounded-full px-[19px] py-[14px] text-button-m text-black transition-all duration-500 md:px-[22px] 4xl:px-8 4xl:py-[18px] 4xl:text-sm 4xl:leading-[19px]',
        className
      )}
      {...props}
    >
      <div
        className={cx(
          'absolute inset-0 origin-left-center animate-btn-reveal rounded-full bg-brand',
          bgClassName
        )}
      ></div>
      <div className="overflow-hidden">
        <div className="relative animate-btn-reveal-txt">
          <Wrapper>{children}</Wrapper>
        </div>
      </div>
    </Component>
  );
}
