import { useAtom } from 'jotai';
import { useSetAtom } from 'jotai';
import Link from 'next/link';
import { useMemo } from 'react';
import BaseElement from './BaseElement';
import { subMenuParentAtom } from './Header';
import RollingText from './RollingText';
import cx from 'clsx';
import { themeAtom } from '../lib/theme';

export default function HeaderLinkMobile({ item, onSubMenuClick }) {
  const [subMenuParent, setSubMenuParent] = useAtom(subMenuParentAtom);
	const [theme] = useAtom(themeAtom);

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
      className={cx("flex w-full items-center justify-between text-next-heading-5", {'text-white': theme === 'dark', 'text-black': theme !== 'dark'})}
      onClick={(e) => {
				e.stopPropagation()
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
      {item.children && !subMenuParent && (
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
				</svg>
			)}
			{item.children && subMenuParent && (
				<svg
				className="mr-[7px]"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M24 12L4.95391e-07 12" stroke="currentColor" strokeWidth="2" />
			</svg>
			)}
    </BaseElement>
  );
}
