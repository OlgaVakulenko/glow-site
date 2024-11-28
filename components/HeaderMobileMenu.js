import { useAtom } from 'jotai';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useHandleFooterFormClick } from '../lib/utils';
import cx from 'clsx';
import { Animation, subMenuParentAtom } from './Header';
import HeaderLinkMobile from './HeaderLinkMobile';
import texts from './texts';
import Button2 from './Button';
import { SocialLinks } from './Footer/FooterLinks';
import Animated from './Animated';
import { themeAtom } from '../lib/theme';
import CalendlyEmbed from './CalendlyEmbed';
import path from 'path';
import { router } from 'next/client';

export default function HeaderMobileMenu({ menuId, links }) {
  const [activeParent, setActiveParent] = useAtom(subMenuParentAtom);
  const [theme] = useAtom(themeAtom);
  const handleFooterFormClick = useHandleFooterFormClick();

  const _links = useMemo(() => {
    if (activeParent) return links.filter((item) => item === activeParent);

    return links;
  }, [links, activeParent]);

  return (
    <div className="flex flex-col justify-between pb-4 pt-[13px]">
      <nav
        aria-label="Main menu"
        role="navigation"
        id={menuId}
        className={cx('flex flex-col sm:pb-[72px]', {
          'pb-[72px]': router.pathname === '/contact-us',
        })}
      >
        <ul
          className={cx('flex flex-col gap-8', {
            'border-b pb-8': activeParent,
          })}
        >
          {_links.map((item, i) => (
            <Animation as="li" key={item.href} index={i}>
              <HeaderLinkMobile item={item} />
            </Animation>
          ))}
        </ul>
        {activeParent && (
          <div
            className={cx('-mx-4 px-4 pt-8', {
              'text-white': theme === 'dark',
            })}
          >
            {activeParent.children.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="mb-8 flex last:mb-20"
              >
                <div className="mr-2">
                  {theme === 'dark'
                    ? item.icon.dark
                    : item.icon.light || item.icon}
                </div>
                <div>
                  <div className="mb-3 text-body-heading-m">{item.title}</div>
                  <div className="text-body-s opacity-50">{item.text}</div>
                </div>
              </Link>
            ))}
            {/* <HeaderSubMenu subMenuItems={activeParent.children} /> */}
          </div>
        )}
      </nav>
      {!activeParent && router.pathname !== '/contact-us' && (
        <Animation index={links.length} className="my-8 sm:hidden">
          <div
            className={cx(
              'flex flex-col gap-y-4 opacity-100  transition-opacity delay-500'
            )}
          >
            <Animated delay={(links.length + 1) * 100} immediate>
              <Button2
                className="w-full !bg-black !py-5 text-center font-inter font-normal normal-case !tracking-[0.01em] !text-white"
                as={Link}
                href="/contact-us"
                compact
              >
                {texts.header_contact}
              </Button2>
            </Animated>
            <CalendlyEmbed
              classNames="w-full sm:w-auto"
              text={
                <Animated delay={(links.length + 1) * 100} immediate>
                  <Button2
                    className="w-full !bg-[#19191B0F] !py-5 font-inter font-normal normal-case !tracking-[0.01em]"
                    compact
                  >
                    {texts.header_cta}
                  </Button2>
                </Animated>
              }
            />
          </div>
        </Animation>
      )}
      <Animated delay={300}>
        <SocialLinks />
      </Animated>
    </div>
  );
}
