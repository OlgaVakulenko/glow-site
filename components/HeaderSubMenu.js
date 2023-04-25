import Link from 'next/link';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useMounted } from './Icons/animations';
import Layout from './Layout';
import cx from 'clsx';
import { Transition } from '@headlessui/react';
import { subMenuOpenAtom } from './Header';
import { useSetAtom } from 'jotai';

function Item({ icon, title, text, href }) {
  return (
    <Link
      href={href}
      className="flex transition-colors duration-300 hover:text-brand"
    >
      <div className="mr-6">{icon}</div>
      <div className="pt-2">
        <div className="mb-2 text-body-heading-m">{title}</div>
        <div className="max-w-[208px] text-body-s opacity-50">{text}</div>
      </div>
    </Link>
  );
}

export default function HeaderSubMenu({ subItems }) {
  const setSubMenuOpen = useSetAtom(subMenuOpenAtom);
  const show = !!subItems?.length;
  const prevItemsRef = useRef(subItems);
  const items = useMemo(() => {
    if (!subItems.length) {
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

  return (
    <Transition
      show={show}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="fixed top-0 z-[9] w-full bg-white pt-24 pb-[70px]"
    >
      <div className="border-t border-[#B3B3B3] pt-14">
        <Layout className="flex justify-between xl:!px-[48px]">
          {items.map((item) => (
            <Item
              key={item.title}
              title={item.title}
              icon={item.icon}
              text={item.text}
              href={'#'}
            />
            // <div key={item.title}>{item.title}</div>
          ))}
        </Layout>
      </div>
    </Transition>
  );
}
