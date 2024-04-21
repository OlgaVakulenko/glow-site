import { Transition } from '@headlessui/react';
import cx from 'clsx';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef } from 'react';
import { useLayoutSsrEffect } from '../lib/utils';
import { isTopAtom, subMenuOpenAtom, subMenuParentAtom } from './Header';
import Layout from './Layout';

function Item({ index, icon, title, text, href }) {
  return (
    <Link
      href={href}
      className={cx('group flex transition-opacity duration-300')}
    >
      <div className={cx('mr-6 w-16 transition-colors duration-300')}>
        {icon}
      </div>
      <div className="pt-2">
        <div className="mb-2 text-body-heading-m">{title}</div>
        <div className="max-w-[208px] text-body-s opacity-50">{text}</div>
      </div>
    </Link>
  );
}

export default function HeaderSubMenuContainer() {
  const router = useRouter();
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

  useLayoutSsrEffect(() => {
    prevItemsRef.current = subItems;
  }, [subItems]);

  useEffect(() => {
    setSubMenuOpen(show);
  }, [show, setSubMenuOpen]);

  useEffect(() => {
    if (!show) return;
    let active = true;
    const handleScroll = () => {
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

  useEffect(() => {
    const onRouteChange = () => {
      setSubMenuParent(null);
    };

    router.events.on('hashChangeStart', onRouteChange);

    return () => {
      router.events.off('hashChangeStart', onRouteChange);
    };
  }, [router.events, setSubMenuParent]);

  return (
    <div>
      <div
        className={cx(
          'pointer-events-none fixed inset-0 z-[9] bg-black opacity-0 transition-opacity duration-300',
          {
            '!pointer-events-auto': show,
            '!opacity-50': show,
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
          className={cx('pb-[70px] pt-24', {
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
            href={item.href}
          />
        ))}
      </Layout>
    </div>
  );
}
