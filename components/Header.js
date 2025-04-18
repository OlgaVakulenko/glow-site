'use client';
import { Transition } from '@headlessui/react';
import cx from 'clsx';
import { atom, useAtom, useSetAtom } from 'jotai';
import throttle from 'lodash.throttle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import Button2 from './Button';
import HeaderLink from './HeaderLink';
import HeaderMobileMenu from './HeaderMobileMenu';
import HeaderSubMenuContainer from './HeaderSubMenu';
import { useMounted } from './Icons/animations';
import Layout from './Layout';
import Logo from './Logo';
import links from './links-data';
import texts from './texts';
import { themeAtom } from '../lib/theme';
import CalendlyEmbed from './CalendlyEmbed';

export function BurgerIcon({ isOpen = false, theme, size = 32 }) {
  let stroke = '#19191B';
const route = useRouter()
  if (theme === 'dark' || route.pathname === "/ai-productivity" ) {
    stroke = 'white';
  }

  if (isOpen) {
    return (
      <svg
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
      style={{ color: stroke }}
      className="transition-colors"
      width="32"
      height="14"
      viewBox="0 0 26 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H26M0 13H26" stroke="currentColor" strokeWidth="1.6776" />
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
          [' py-[9px]']: !isOpen,
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
      className=""
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
  const [theme] = useAtom(themeAtom);
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
        { 'bg-[#0A0A0B]': theme === 'dark', 'bg-white': theme !== 'dark' }
      )}
    >
      <div className="overflow-y-auto">
        <Layout>
          <div className={'flex h-screen flex-col justify-between'}>
            <div
              className={cx(
                'flex items-center justify-between py-[27.5px] font-medium sm:py-[20px]',
                {
                  'text-white': theme === 'dark',
                  'text-black': theme !== 'dark',
                }
              )}
            >
              <Link
                href="/"
                className="flex items-center justify-center"
                title="home"
              >
                <Logo className={theme} isBurgerMenu />
              </Link>
              <div className="hidden">
                <Link
                  href="/contact-us"
                  className="glow-border-black rounded-full px-4 py-[15px] text-sm leading-[19px] shadow-black transition-colors duration-300 hover:bg-black hover:text-brand"
                >
                  Let&apos;s get in touch
                </Link>
              </div>
              <div
                className={cx(
                  'items-center gap-x-3 transition-opacity duration-200 xl:space-x-4'
                )}
              >
                <div className="flex items-center gap-x-5 md:gap-x-8">
                  <div
                    className={cx(
                      'hidden gap-x-3 opacity-100 transition-opacity delay-500 sm:flex'
                    )}
                  >
                    <Animated delay={(links.length + 1) * 100} immediate>
                      <Button2
                        className={cx(
                          'w-full !bg-black !py-3 text-center font-inter font-light normal-case !tracking-[0.01em] sm:w-[160px] md:w-[150px]',
                          {
                            '!bg-white !text-black': theme === 'dark',
                            '!text-white': theme !== 'dark',
                          }
                        )}
                        as={Link}
                        href="/contact-us"
                        compact
                      >
                        {texts.header_contact}
                      </Button2>
                    </Animated>
                  </div>
                  <BurgerButton
                    className={cx(
                      'max-w-[42px] transition-opacity duration-200',
                      {
                        'pointer-events-none opacity-0': subMenuParent,
                      }
                    )}
                    aria-controls={menuId}
                    isOpen={isOpen}
                    onClick={() => {
                      setIsOpen((v) => !v);
                      setSubMenuParent(null);
                    }}
                    aria-expanded={isOpen}
                    aria-label="Menu"
                  />
                </div>
              </div>
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
  }, [
    ref,
    setHeaderTheme,
    theme,
    router.pathname,
    disableBackdrop,
    isFooter,
    _onEnter,
    _onLeave,
    setBackdrop,
    setIsFooter,
  ]);

  return;
};

export const isTopAtom = atom(false);
export const isBottomAtom = atom(false);

function StickyHeader({ className, children }) {
  return <header className={className}>{children}</header>;
}

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
  }, [isOpen, lock, release]);

  const onBurgerClick = () => {
    setIsOpen((v) => !v);
  };

  useEffect(() => {
    setColor(null);
  }, [t, setColor]);

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
  }, [setSubMenuParent]);

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
  const textWhite = router.pathname === "/ai-productivity" && isTop && !backdropActive;

  const isTrialVisible = useMemo(() => {
    return router.pathname !== '/tral';
  }, [router.pathname]);
const isAi = backdropActive && !isTop
  const ai = router.pathname === "/ai-productivity"
  return (
    <div ref={rootRef}>
      {/* <div className={cx('fixed top-0 z-10 w-full font-inter')}>
        <div className="relative">
          <div
            className={cx(
              'backdrop pointer-events-none absolute left-0 top-0 h-[96px] w-full -translate-y-full bg-white opacity-0 transition-all duration-500',
              {
                '!translate-y-0': backdropActive,
                '!opacity-100': backdropActive,
                '!transition-none': isRouteTransition,
              }
            )}
          ></div>
        </div>
      </div> */}
      <StickyHeader
        className={cx(
          'first-header fixed z-10 w-full font-inter transition-all duration-500',
          {
            '!-translate-y-full':
              (scrollDirection === 'forward' &&
                // && !isBottom
                !subMenuActive) ||
              !headerActive,
            'bg-transparent': isTop,
            'bg-white': backdropActive && !isTop,
            'bg-[#0a0a0b]': t === 'dark' && !isTop,
            '!transition-none': isRouteTransition,
          }
        )}
      >
        {/* <header
        className={cx(
          'first-header fixed z-10 w-full font-inter transition-all duration-500',
          {
            '!-translate-y-full':
              (scrollDirection === 'forward' &&
                // && !isBottom
                !subMenuActive) ||
              !headerActive,
            'bg-white': backdropActive,
            '!transition-none': isRouteTransition,
          }
        )}
      > */}
        <div className="relative">
          <Layout>
            <div
              className="flex items-center justify-between py-[27.5px] sm:py-[20px]  md:min-h-[88px] "
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
                    isAi={isAi}
                  />
                </Link>
              </Animated>
              <div
                className={cx(
                  'hidden transition-opacity duration-500 xl:flex'
                  //md:absolute md:left-1/2 md:flex md:-translate-x-1/2
                )}
              >
                {!isFooter &&
                  links.map((link, i) => (
                    <HeaderLink key={i} index={i} item={link} theme={t} isAi={textWhite} />
                  ))}
              </div>
              {headerRightSlot ||
                (!isFooter && (
                  <div
                    className={cx(
                      'items-center gap-x-3 transition-opacity duration-200 xl:space-x-4'
                    )}
                  >
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                      <div
                        className={cx(
                          'hidden gap-x-3 opacity-100 transition-opacity delay-500 sm:flex ',
                          {
                            '!opacity-0 !delay-0': isTrialVisible
                              ? false
                              : !isTop
                              ? false
                              : true,
                          }
                        )}
                      >
                        <Animated delay={(links.length + 1) * 100} immediate>
                          <Button2
                            className={cx(
                              'w-full !bg-black !py-3 text-center font-inter normal-case !tracking-[0.01em] sm:w-[160px] md:w-[150px]',
                              {
                                '!bg-white !text-black': t === 'dark',
                                '!text-white': t !== 'dark',
                              }
                            )}
                            as={Link}
                            href="/contact-us"
                            compact
                          >
                            {texts.header_contact}
                          </Button2>
                        </Animated>
                      </div>
                      <div className="xl:hidden">
                        <Animated delay={50} immediate className="test">
                          <BurgerButton
                            theme={t}
                            aria-controls={menuId}
                            isOpen={isOpen}
                            onClick={onBurgerClick}
                            aria-expanded={isOpen}
                          />
                        </Animated>
                      </div>
                    </div>
                  </div>
                ))}
              {/*{headerRightSlot ? null : (*/}
              {/*  <div className="md-safe:hidden">*/}
              {/*    <Animated delay={50} immediate className="test">*/}
              {/*      <BurgerButton*/}
              {/*        theme={t}*/}
              {/*        aria-controls={menuId}*/}
              {/*        isOpen={isOpen}*/}
              {/*        onClick={onBurgerClick}*/}
              {/*        aria-expanded={isOpen}*/}
              {/*      />*/}
              {/*    </Animated>*/}
              {/*  </div>*/}
              {/*)}*/}
            </div>
          </Layout>
        </div>
        {/* </header> */}
      </StickyHeader>
      <BurgerMenu menuId={menuId} links={links} />
      {isClient && media !== 'mobile' && <HeaderSubMenuContainer />}
    </div>
  );
}
