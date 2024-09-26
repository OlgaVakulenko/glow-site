import { Transition } from '@headlessui/react';
import cx from 'clsx';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { themeAtom } from '../lib/theme';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef } from 'react';
import { useLayoutSsrEffect } from '../lib/utils';
import { isTopAtom, subMenuOpenAtom, subMenuParentAtom } from './Header';
import Layout from './Layout';

function Item({ index, icon, title, text, href }) {
	const [theme] = useAtom(themeAtom);
  return (
    <Link
      href={href}
      className={cx('xl:w-[448px] group flex flex-col transition-opacity duration-300 gap-3 flex-1 py-4 px-4 rounded-2xl hover:bg-black transition-bg', {'hover:bg-opacity-[0.56]': theme === 'dark', 'hover:bg-opacity-[0.02]': theme !== 'dark'})}
    >
      <div className={cx('mr-6 w-16 transition-colors duration-300')}>
        {icon}
      </div>
      <div className="mt-3">
        <div className="text-body-heading-m">{title}</div>
        <div className="md:mb-2 mb-3 xl:max-w-[410px] md:max-w-[298px] text-body-xs opacity-50">{text}</div>
      </div>
    </Link>
  );
}

export default function HeaderSubMenuContainer() {
  const router = useRouter();
  const [subMenuParent, setSubMenuParent] = useAtom(subMenuParentAtom);
  const isTop = useAtomValue(isTopAtom);
	const [theme] = useAtom(themeAtom);
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
        className={cx('fixed top-0 z-[9] w-full', {'bg-[#0A0A0B]': theme === 'dark', 'bg-white': theme !== 'dark'})}
      >
        <div className={cx('pt-24', {})}>
          <HeaderSubMenu subMenuItems={items} theme={theme} />
        </div>
      </Transition>
    </div>
  );
}

export function HeaderSubMenu({ subMenuItems: items }) {
	const [theme] = useAtom(themeAtom);
  return (
    <div className={cx('border-t pt-1 flex', {'bg-[#0A0A0B] text-white border-[#2B2B2B]': theme === 'dark', 'border-[#B3B3B3]': theme !== 'dark'})}>
      <Layout className="flex flex-col justify-between md:flex-row md:!py-7 md:!px-4 xl:!py-4 xl:!px-12">
        {items.map((item, idx) => (
          <Item
            index={idx}
            key={item.title}
            title={item.title}
            icon={theme === 'dark'? item.icon?.dark : item.icon.light || item.icon}
            text={item.text}
            href={item.href}
          />
        ))}
      </Layout>
    </div>
  );
}
