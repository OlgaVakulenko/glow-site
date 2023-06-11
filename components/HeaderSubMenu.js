import Link from 'next/link';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useMounted } from './Icons/animations';
import Layout from './Layout';
import cx from 'clsx';
import { Transition } from '@headlessui/react';
import { isTopAtom, subMenuOpenAtom, subMenuParentAtom } from './Header';
import { useSetAtom } from 'jotai';
import { atom } from 'jotai';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai';

const hoveredItemAtom = atom(null);

function Item({ index, icon, title, text, href }) {
  const [hoveredItem, setHoveredItem] = useAtom(hoveredItemAtom);

  return (
    <Link
      href={href}
      className={cx('flex transition-opacity duration-300', {
        'opacity-50': hoveredItem !== null && hoveredItem !== index,
      })}
      onMouseEnter={() => {
        setHoveredItem(index);
      }}
      onMouseLeave={() => {
        setHoveredItem(null);
      }}
    >
      <div className="mr-6 w-16">{icon}</div>
      <div className="pt-2">
        <div className="mb-2 text-body-heading-m">{title}</div>
        <div className="max-w-[208px] text-body-s opacity-50">{text}</div>
      </div>
    </Link>
  );
}

export default function HeaderSubMenuContainer() {
  const [subMenuParent, setSubMenuParent] = useAtom(subMenuParentAtom);
  const isTop = useAtomValue(isTopAtom);
  const subItems = subMenuParent?.children;
  const setSubMenuOpen = useSetAtom(subMenuOpenAtom);
  const show = !!subItems?.length;
  const prevItemsRef = useRef(subItems);
  const items = useMemo(() => {
    if (!subItems?.length) {
      return prevItemsRef.current;
    }

    return subItems;
  }, [subItems]);

  useLayoutEffect(() => {
    prevItemsRef.current = subItems;
  }, [subItems]);

  useEffect(() => {
    setSubMenuOpen(show);
  }, [show, setSubMenuOpen]);

  useEffect(() => {
    if (!show) return;
    let active = true;
    const handleScroll = () => {
      console.log('handling scroll');

      if (!active) return;
      active = false;
      setSubMenuParent(null);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [show, setSubMenuParent]);

  return (
    <div>
      <div
        className={cx(
          'pointer-events-none fixed inset-0 z-[9] bg-black opacity-50 transition-opacity duration-300',
          {
            '!pointer-events-auto': show,
            '!opacity-0': !show,
          }
        )}
        onClick={() => setSubMenuParent(null)}
      ></div>
      <Transition
        show={show}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={cx('fixed top-0 z-[9] w-full bg-white')}
      >
        <div
          className={cx('pt-24 pb-[70px]', {
            '!pt-[120px]': isTop,
          })}
        >
          <HeaderSubMenu subMenuItems={items} />
        </div>
      </Transition>
    </div>
  );
}

export function HeaderSubMenu({ subMenuItems: items }) {
  return (
    <div className={cx('border-t border-[#B3B3B3] pt-14')}>
      <Layout className="flex flex-col justify-between md:flex-row xl:!px-[48px]">
        {items.map((item, idx) => (
          <Item
            index={idx}
            key={item.title}
            title={item.title}
            icon={item.icon}
            text={item.text}
            href={'#'}
          />
        ))}
      </Layout>
    </div>
  );
}
