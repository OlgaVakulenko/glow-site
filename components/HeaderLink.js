import Link from 'next/link';
import Animated from './Animated';
import RollingText from './RollingText';
import cx from 'clsx';
import { useEffect, useMemo } from 'react';
import { useAtom } from 'jotai';
import { subMenuParentAtom } from './Header';

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
  const { href, label } = item;
  const [subMenuParent, setSubMenuParent] = useAtom(subMenuParentAtom);

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
      onClick={() => {
        if (subItems?.length) {
          // onSubMenuClick(subItems);
          setSubMenuParent((it) => {
            console.log('needle.set.item', item);
            if (it) {
              return null;
            }

            return item;
          });
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
        <div className="ml-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 7L-2.7314e-08 7" stroke="#19191B" strokeWidth="2" />
            <path
              className={cx('opacity-100 transition-opacity duration-200', {
                '!opacity-0': subMenuParent,
              })}
              d="M7 14L7 -2.73145e-08"
              stroke="#19191B"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}
    </Animated>
  );
}
