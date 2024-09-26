import cx from 'clsx';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useMemo, useRef } from 'react';
import Animated from './Animated';
import { subMenuParentAtom } from './Header';
import RollingText from './RollingText';

export default function HeaderLink({
  index,
  item,
  // href,
  // label,
  theme,
  // subItems = [],
  onSubMenuClick,
}) {
  const subItems = item.children;
  const { href, label, icon } = item;
  const [subMenuParent, setSubMenuParent] = useAtom(subMenuParentAtom);
  const debounceRef = useRef(false);

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

  return (
    <Animated
      {...props}
      onMouseEnter={() => {
        if (subItems?.length) {
          setSubMenuParent((it) => {
            if (it) return it;
            return item;
          });
          debounceRef.current = true;
          setTimeout(() => {
            debounceRef.current = false;
          }, 300);
        } else {
          setSubMenuParent(null);
        }
      }}
      onClick={() => {
        if (subItems?.length && !debounceRef.current) {
          setSubMenuParent((it) => {
            if (it) return null;

            return item;
          });
        } 
      }}
      delay={(index + 1) * 100}
      className={cx(
        'rolling-text-group flex items-center justify-center px-5 text-[16px] leading-[24px] tracking-[0.03em]',
        theme === 'dark' && 'text-white',
				{'ai-link': href === '/ai'}
      )}
      immediate
    >
			{icon && <span className='mr-[6px]'>{icon}</span>}
      <RollingText text={label} height={24} />
      {!!subItems?.length && (
				<div className="ml-2" onClick={(event) => {
					event.stopPropagation();
					setSubMenuParent((it) => (it === item ? null : item));
				}}>
					{!subMenuParent || subMenuParent !== item ? (
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="square" />
						</svg>
					) : (
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M15 12.5L10 7.5L5 12.5" stroke="currentColor" strokeLinecap="square" />
						</svg>
					)}
				</div>
			)}
    </Animated>
  );
}
