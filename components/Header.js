import { Transition } from '@headlessui/react';
import cx from 'clsx';
import { atom, useAtom, useSetAtom } from 'jotai';
import throttle from 'lodash.throttle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { mediaAtom, useMediaAtom } from '../lib/agent';
import {
  createHeaderScrollTrigger,
  useBodyLock,
  useHandleFooterFormClick,
  useIsClient,
  usePrevious,
  useScrollDirection,
} from '../lib/utils';
import Animated from './Animated';
import HeaderLink from './HeaderLink';
import HeaderMobileMenu from './HeaderMobileMenu';
import HeaderSubMenuContainer from './HeaderSubMenu';
import { useMounted } from './Icons/animations';
import Layout from './Layout';
import links from './links-data';
import Logo from './Logo';
import RollingText from './RollingText';

export function BurgerIcon({ isOpen = false, theme, size = 40 }) {
  let stroke = '#19191B';

  if (theme === 'dark') {
    stroke = 'white';
  }

  if (isOpen) {
    return (
      <svg
        style={{
          color: '#19191B',
        }}
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.68628 9L31.3137 31.6274"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8.68628 32L31.3137 9.37258"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg
      style={{
        color: stroke,
      }}
      className="transition-colors"
      width="32"
      height="18"
      viewBox="0 0 32 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H32M0 17H32" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const BurgerButton = ({ isOpen, className, theme, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className={cx(
        'flex items-center justify-center',
        {
          ['px-[4px] py-[11px]']: !isOpen,
        },
        className
      )}
    >
      <BurgerIcon theme={theme} isOpen={isOpen} />
    </button>
  );
};

export const openAtom = atom(false);

export const Animation = ({ index, children, ...props }) => {
  return (
    <Transition.Child
      unmount={false}
      enter="transition ease-in-out duration-500 transform"
      enterFrom="translate-y-5 opacity-0"
      enterTo="translate-y-0 opacity-1"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="opacity-1"
      leaveTo="opacity-0"
      className="mb-3 py-[10px] text-[38px] uppercase leading-[51px] last:mb-[0px]"
      {...props}
      style={{
        transitionDelay: (1 + index) * 100 + 'ms',
      }}
    >
      {children}
    </Transition.Child>
  );
};

const BurgerMenu = ({ menuId, links }) => {
  const [subMenuParent, setSubMenuParent] = useAtom(subMenuParentAtom);
  const router = useRouter();
  const [isOpen, setIsOpen] = useAtom(openAtom);
  const [media] = useAtom(mediaAtom);

  useEffect(() => {
    if (media !== 'mobile') {
      setIsOpen(false);
    }
  }, [media, setIsOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname, setIsOpen]);

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={cx(
        'fixed left-0 top-0 z-10 h-[150vh] w-full transition-colors duration-100',
        {
          'bg-brand': !subMenuParent,
          'bg-white': subMenuParent,
        }
      )}
    >
      <div className="overflow-y-auto">
        <Layout>
          <div className={'flex h-screenx flex-col md:justify-between'}>
            <div className="flex items-center justify-between py-[28px] font-medium uppercase text-black">
              <Link href="/" className="flex items-center justify-center">
                <Logo />
              </Link>
              <div className="hidden md:block">
                <Link
                  href="/contacts"
                  className="glow-border-black rounded-full px-4 py-[15px] text-sm leading-[19px] shadow-black transition-colors duration-300 hover:bg-black hover:text-brand"
                >
                  Let&apos;s get in touch
                </Link>
              </div>
              <BurgerButton
                className={cx('transition-opacity duration-200 md:hidden', {
                  'pointer-events-none opacity-0': subMenuParent,
                })}
                aria-controls={menuId}
                isOpen={isOpen}
                onClick={() => {
                  setIsOpen((v) => !v);
                  setSubMenuParent(null);
                }}
                aria-expanded={isOpen}
              />
            </div>
            <HeaderMobileMenu links={links} menuId={menuId} />
          </div>
        </Layout>
      </div>
    </Transition>
  );
};

const defaultTheme = 'white';
export const headerTheme = atom([defaultTheme]);
export const showBackdropAtom = atom(true);
export const logoColor = atom(null);
export const headerActiveAtom = atom(true);
export const isFooterAtom = atom(false);
export const subMenuOpenAtom = atom(false);
export const subMenuParentAtom = atom(null);

//theme: 'white' | 'dark' | 'light'
export const useHeaderTheme = ({
  ref,
  theme = '',
  isFooter = false,
  disableBackdrop = false,
  onEnter: _onEnter,
  onLeave: _onLeave,
}) => {
  const router = useRouter();
  const setHeaderTheme = useSetAtom(headerTheme);
  const setBackdrop = useSetAtom(showBackdropAtom);
  const setIsFooter = useSetAtom(isFooterAtom);

  useEffect(() => {
    const onEnter = () => {
      setHeaderTheme((c) => [...c, theme]);
      if (disableBackdrop) {
        setBackdrop(false);
      }
      if (_onEnter) {
        _onEnter();
      }

      setIsFooter(isFooter);
    };

    const onLeave = () => {
      setHeaderTheme((c) => {
        const themes = c.filter((v) => v !== theme);
        if (theme === defaultTheme) {
          themes.push(defaultTheme);
        }
        return themes;
      });

      if (disableBackdrop) {
        setBackdrop(true);
      }

      if (_onLeave) {
        _onLeave;
      }

      setIsFooter(false);
    };

    if (!ref) {
      onEnter();

      return onLeave;
    }

    const s = createHeaderScrollTrigger({
      ref,
      onEnter,
      onLeave,
    });

    return () => {
      onLeave();
      s.kill();
    };
  }, [ref, setHeaderTheme, theme, router.pathname, disableBackdrop, isFooter]);

  const initRef = useRef(false);
  const onUnmount = useRef([]);

  useEffect(() => {
    return () => {
      initRef.current = false;
      onUnmount.current.forEach((cb) => {
        try {
          cb();
        } catch (e) {
          console.error(e);
        }
      });
    };
  }, []);

  return;
};

export const isTopAtom = atom(false);
export const isBottomAtom = atom(false);

export default function Header({
  isFixed = true,
  headerRightSlot = null,
  overrideTheme = '',
}) {
  const router = useRouter();
  const mounted = useMounted();
  const media = useMediaAtom();
  const prevMedia = usePrevious(media);
  const rootRef = useRef(null);
  const [isRouteTransition, setIsRouteTransition] = useState();
  const isClient = useIsClient();
  const [theme] = useAtom(headerTheme);
  const [color, setColor] = useAtom(logoColor);
  const [isOpen, setIsOpen] = useAtom(openAtom);
  const [showBackdrop, setShowBackdrop] = useAtom(showBackdropAtom);
  // const links = ['Work', 'Team', 'Services'];
  const menuId = useId();
  const { lock, release } = useBodyLock();
  const scrollDirection = useScrollDirection('backward');
  const [headerActive] = useAtom(headerActiveAtom);
  const [isFooter] = useAtom(isFooterAtom);
  const [subMenuItems, setSubMenuItems] = useState([]);
  const [subMenuParent, setSubMenuParent] = useAtom(subMenuParentAtom);
  const subMenuActive = !!subMenuParent;
  const t =
    overrideTheme ||
    (subMenuActive &&
      ((theme[theme.length - 1] === 'brand' && 'brand') ||
        (theme[theme.length - 1] === 'white' && 'white'))) ||
    theme[theme.length - 1];

  useEffect(() => {
    if (isOpen) {
      lock();
    } else {
      release();
    }
  }, [isOpen]);

  const onBurgerClick = () => {
    setIsOpen((v) => !v);
  };

  useEffect(() => {
    setColor(null);
  }, [t]);

  const offset = 112;

  const [isTop, setIsTop] = useAtom(isTopAtom);
  // const [isBottom, setIsBottom] = useAtom(isBottomAtom);

  useEffect(() => {
    const offset = 112;
    const onScroll = throttle(() => {
      const isTop = window.scrollY < offset;
      setIsTop(isTop);

      // const isBottom =
      //   window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      // setIsBottom(isBottom);
    }, 100);
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [setIsTop]);

  useEffect(() => {
    let mounted = true;
    setIsRouteTransition(true);

    setTimeout(() => {
      if (mounted) {
        setIsRouteTransition(false);
      }
    }, 10);

    return () => {
      mounted = false;
    };
  }, [router.pathname]);

  const backdropActive =
    mounted &&
    headerActive &&
    !isTop &&
    // !isBottom &&
    scrollDirection !== 'forward' &&
    t !== 'dark' &&
    t !== 'brand';

  useEffect(() => {
    setSubMenuParent(null);
  }, [router.pathname, setSubMenuParent]);

  const resetSubMenuItems = useCallback(() => {
    setSubMenuParent((v) => {
      if (v) return null;

      return v;
    });
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;

      if (!rootRef.current.contains(target)) {
        resetSubMenuItems();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [resetSubMenuItems]);

  useEffect(() => {
    if (media !== prevMedia && media === 'mobile') {
      resetSubMenuItems();
    }
  }, [media, prevMedia, resetSubMenuItems]);

  const handleFooterFormClick = useHandleFooterFormClick();

  return (
    <div ref={rootRef}>
      <div className={cx('fixed top-0 z-10 w-full')}>
        <div className="relative">
          <div
            className={cx(
              'backdrop pointer-events-none absolute left-0 top-0 h-[96px] w-full -translate-y-full bg-white opacity-0 transition-all duration-300',
              {
                // 'duration-300': !subMenuActive,
                // 'duration-[0s]': subMenuActive,
                '!translate-y-0': backdropActive,
                '!opacity-100': backdropActive,
                '!transition-none': isRouteTransition,
              }
            )}
          ></div>
        </div>
      </div>
      <header
        className={cx(
          'first-header fixed z-10 w-full transition-transform duration-300 md:top-4',
          {
            'md:-translate-y-4': !isTop,
            // && !isBottom
            '!-translate-y-full':
              (scrollDirection === 'forward' &&
                // && !isBottom
                !subMenuActive) ||
              !headerActive,
            // '!transition-none': isRouteTransition,
          }
        )}
      >
        <div className="relative">
          <Layout>
            <div
              className="flex items-center justify-between pt-[28px] font-medium uppercase md:h-[96px] md:justify-start md:!pb-[28px] md:!pt-[28px]"
              style={{
                '--header-theme':
                  t === 'brand' || t === 'white'
                    ? 'black'
                    : t === 'dark'
                    ? 'white'
                    : 'black',
              }}
            >
              <Animated delay={50} immediate>
                <Link href="/" className="flex items-center justify-center">
                  <Logo
                    className={t}
                    style={{
                      color,
                    }}
                  />
                </Link>
              </Animated>
              <div
                className={cx(
                  'hidden transition-opacity duration-500 md:ml-[5.15%] md:flex xl:ml-[9.25%]'
                )}
              >
                {!isFooter &&
                  links.map((link, i) => (
                    <HeaderLink key={i} index={i} item={link} theme={t} />
                  ))}
              </div>
              {headerRightSlot ||
                (!isFooter && (
                  <div
                    className={cx(
                      'hidden transition-opacity duration-200 md:ml-auto md:flex xl:space-x-4'
                    )}
                  >
                    {/* {media === 'desktop' && (
                      <Animated delay={(links.length + 1) * 100} immediate>
                        <Link
                          href="#footer"
                          className={cx(
                            'glow-border-black rolling-text-group flex whitespace-pre-wrap rounded-full px-[19px] py-[14px] text-button-m shadow-black transition-all duration-500 hover:bg-black layout-no-p:py-[18px] layout-no-p:text-sm layout-no-p:leading-[19px]',
                            'hover:text-brand',
                            (t === 'white' || subMenuActive) &&
                              'glow-border-b-b hover:!bg-brand hover:!text-black',
                            t === 'dark' &&
                              !subMenuActive &&
                              'glow-border-white-to-r bg-transparent text-white hover:!bg-brand hover:!text-white'
                          )}
                          onClick={handleFooterFormClick}
                        >
                          <RollingText
                            height={20}
                            text={`Let's get in touch`}
                          ></RollingText>
                        </Link>
                      </Animated>
                    )} */}

                    <Animated delay={(links.length + 5) * 100} immediate>
                      <Link
                        href="#footer"
                        // href="/trial"
                        onClick={handleFooterFormClick}
                        className={cx(
                          'glow-border-brand rolling-text-group flex whitespace-pre-wrap rounded-full bg-brand px-[19px] py-[14px] text-button-m text-black transition-all duration-500 layout-no-p:py-[18px] layout-no-p:text-sm layout-no-p:leading-[19px]'
                        )}
                      >
                        <RollingText
                          height={20}
                          text={`Free 3 day’s trial`}
                        ></RollingText>
                      </Link>
                    </Animated>
                  </div>
                ))}
              {headerRightSlot ? null : (
                <div className="md:hidden">
                  <Animated delay={50} immediate className="test">
                    <BurgerButton
                      theme={t}
                      aria-controls={menuId}
                      isOpen={isOpen}
                      onClick={onBurgerClick}
                      aria-expanded={isOpen}
                    />
                  </Animated>
                  {/* {(() => {
                    debugger;
                  })()} */}
                </div>
              )}
            </div>
          </Layout>
        </div>
      </header>
      <BurgerMenu menuId={menuId} links={links} />
      {isClient && media !== 'mobile' && <HeaderSubMenuContainer />}
    </div>
  );
}
