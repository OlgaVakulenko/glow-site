import Link from 'next/link';
import Animated from './Animated';
import RollingText from './RollingText';
import cx from 'clsx';
import { useEffect, useMemo } from 'react';

export default function HeaderLink({
  index,
  href,
  label,
  theme,
  subItems = [],
  onSubMenuClick,
}) {
  const props = useMemo(() => {
    if (subItems?.length) {
      return {
        as: 'button',
        type: 'button',
      };
    }

    return {
      as: Link,
      href,
      href,
    };
  }, [subItems, href]);

  useEffect(() => {
    console.log('HEADER LINK MOUNTED');
    return () => {
      console.log('HEADER LINK UNMOUNTED');
    };
  }, []);

  return (
    <Animated
      {...props}
      onClick={() => {
        if (subItems?.length && onSubMenuClick) {
          onSubMenuClick(subItems);
        }
      }}
      delay={(index + 1) * 100}
      className={cx(
        'mr-[77px] flex items-center justify-center text-sm uppercase last:mr-0',
        theme === 'dark' && 'text-white'
      )}
      immediate
    >
      <RollingText text={label} height={20} />
      {!!subItems?.length && (
        <div className="ml-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
              fill="#09121F"
            />
          </svg>
        </div>
      )}
    </Animated>
  );
}
