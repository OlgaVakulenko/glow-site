import { useAtom } from 'jotai';
import { useSetAtom } from 'jotai';
import Link from 'next/link';
import { useMemo } from 'react';
import BaseElement from './BaseElement';
import { subMenuParentAtom } from './Header';
import RollingText from './RollingText';
import cx from 'clsx';

export default function HeaderLinkMobile({ item, onSubMenuClick }) {
  const [subMenuParent, setSubMenuParent] = useAtom(subMenuParentAtom);

  const props = useMemo(() => {
    if (item.children) {
      return {
        as: 'button',
        type: 'button',
      };
    }

    return {
      as: Link,
      href: item.href,
    };
  }, [item.children, item.href]);

  return (
    <BaseElement
      {...props}
      className="flex w-full items-center justify-between text-next-heading-5 uppercase text-black"
      onClick={() => {
        if (item.children?.length) {
          setSubMenuParent((it) => {
            if (it) return null;

            return item;
          });
        }
      }}
    >
      <span>{item.label}</span>
      {/* <RollingText text={item.label} height={51} /> */}
      {item.children && (
        <svg
          className="mr-[7px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 12L4.95391e-07 12" stroke="#19191B" strokeWidth="2" />
          <path
            className={cx('opacity-100 transition-opacity duration-200', {
              '!opacity-0': subMenuParent,
            })}
            d="M12 24L12 4.95391e-07"
            stroke="#19191B"
            strokeWidth="2"
          />
        </svg>
      )}
    </BaseElement>
  );
}
