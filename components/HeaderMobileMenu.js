import { useAtom } from 'jotai';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useHandleFooterFormClick } from '../lib/utils';
import BigButton from './BigButton';
import { Animation, subMenuOpenAtom, subMenuParentAtom } from './Header';
import HeaderLinkMobile from './HeaderLinkMobile';
import { HeaderSubMenu } from './HeaderSubMenu';

export default function HeaderMobileMenu({ menuId, links }) {
  const [activeParent, setActiveParent] = useAtom(subMenuParentAtom);
  const handleFooterFormClick = useHandleFooterFormClick();

  const _links = useMemo(() => {
    if (activeParent) return links.filter((item) => item === activeParent);

    return links;
  }, [links, activeParent]);

  return (
    <div className="flex h-full flex-col justify-between pt-[13px]">
      <nav
        aria-label="Main menu"
        role="navigation"
        id={menuId}
        className="flex flex-col"
      >
        <ul>
          {_links.map((item, i) => (
            <Animation as="li" key={item.href} index={i}>
              <HeaderLinkMobile item={item} />
            </Animation>
          ))}
        </ul>
        {activeParent && (
          <div className="-mx-4 border-t px-4 pt-12">
            {activeParent.children.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="mb-[31px] flex last:mb-20"
              >
                <div className="min-w-16 mr-6 flex  justify-center">
                  {item.icon}
                </div>
                <div className="pt-2">
                  <div className="mb-2 text-body-heading-m">{item.title}</div>
                  <div className="text-body-s opacity-50">{item.text}</div>
                </div>
              </Link>
            ))}
            {/* <HeaderSubMenu subMenuItems={activeParent.children} /> */}
          </div>
        )}
      </nav>
      {!activeParent && (
        <Animation index={links.length} className="mt-[55px]">
          <BigButton
            href="#footer"
            className="mb-4 !py-[41px]"
            onClick={handleFooterFormClick}
          >
            Let’s get in touch
          </BigButton>
          <BigButton href="/trial" className="mb-4 !py-[41px]">
            Free 3 day’s trial
          </BigButton>
        </Animation>
      )}
    </div>
  );
}
