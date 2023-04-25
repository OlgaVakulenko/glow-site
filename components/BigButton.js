import cx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';
import LinkArrow from './LinkArrow';
import RollingText from './RollingText';

const activeHeader = 'hover:bg-brand hover:text-black';
const activeFooter = 'hover:bg-lblue hover:text-black';
const activeContacts = 'hover:bg-black hover:text-white';

export default function BigButton({
  variant = 'header',
  children,
  className = '',
  hideLink = false,
  customHoverArrow = null,
  border = true,
  href = null,
  textHeight = 20,
  ...props
}) {
  const Component = useMemo(() => {
    if (href) {
      return Link;
    }

    return 'button';
  }, [href]);

  return (
    <Component
      href={href}
      type={href ? null : 'button'}
      className={cx(
        'rolling-text-group group flex w-full items-center justify-between rounded-full px-6 py-14 text-left text-sm font-medium uppercase tracking-[0.03em] transition-colors duration-500 md:aspect-square md:max-w-[320px] md:pr-[20px]',
        {
          ['glow-border']: border,
          [activeHeader]: variant === 'header',
          [activeFooter]: variant === 'footer',
          [activeContacts]: variant === 'contacts',
          ['glow-border-black']: variant === 'contacts',
          ['glow-border-light']: variant === 'footer',
        },
        className
      )}
      {...props}
    >
      <RollingText height={textHeight} text={children}></RollingText>
      {/* {children} */}
      {!hideLink && (
        <div className="relative">
          <div className="opacity-0 duration-300 group-hover:opacity-100">
            {customHoverArrow}
          </div>
          {
            <span
              className={cx(
                customHoverArrow && 'opacity-100 group-hover:opacity-0'
              )}
            >
              <LinkArrow />
            </span>
          }
        </div>
      )}
    </Component>
  );
}
