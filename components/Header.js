import { Transition } from '@headlessui/react';
import cx from 'clsx';
import { atom, useAtom, useSetAtom } from 'jotai';
import throttle from 'lodash.throttle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useId, useRef, useState } from 'react';
import { mediaAtom } from '../lib/agent';
import {
  createHeaderScrollTrigger,
  useBodyLock,
  useIsClient,
  useScrollDirection,
} from '../lib/utils';
import Animated from './Animated';
import BigButton from './BigButton';
import HeaderLink from './HeaderLink';
import HeaderSubMenu from './HeaderSubMenu';
import { useMounted } from './Icons/animations';
import Layout from './Layout';
import links from './links-data';
import Logo from './Logo';
import RollingText from './RollingText';

// const links = [
//   {
//     label: 'Work',
//     href: '/work',
//   },
//   {
//     label: 'Team',
//     href: '/about',
//   },
//   {
//     label: 'Services',
//     href: '#',
//     children: [
//       {
//         title: 'MVP',
//         text: 'We define your goals, get to know your audience, and understand the context.',
//         icon: (
//           <svg
//             width="64"
//             height="48"
//             viewBox="0 0 64 48"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <rect x="13.5" y="28.5" width="15" height="15" stroke="#19191B" />
//             <rect x="29.5" y="5.5" width="15" height="15" stroke="#19191B" />
//             <rect
//               x="28.5"
//               y="28.5"
//               width="23"
//               height="15"
//               fill="#19191B"
//               stroke="#19191B"
//             />
//           </svg>
//         ),
//       },
//     ],
//   },
// ];

// const links = [];

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

const openAtom = atom(false);

const Animation = ({ index, children, ...props }) => {
  return (
    <Transition.Child
      unmount={false}
      enter="transition ease-in-out duration-500 transform"
      enterFrom="translate-y-5 opacity-0"
      enterTo="translate-y-0 opacity-1"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="opacity-1"
      leaveTo="opacity-0"
      className="mb-[24px] text-[59px] uppercase leading-[80px] last:mb-[0px]"
      {...props}
      style={{
        transitionDelay: (1 + index) * 100 + 'ms',
      }}
    >
      {children}
    </Transition.Child>
  );
};

const BurgerMenu = ({
  // transitionOpen,
  // isOpen,
  menuId,
  links,
  // onBurgerClick,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useAtom(openAtom);
  const [media] = useAtom(mediaAtom);

  useEffect(() => {
    if (media !== 'mobile') {
      setIsOpen(false);
    }
  }, [media]);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="fixed top-0 left-0 z-10 h-[150vh] w-full bg-brand"
    >
      <div className="">
        <Layout>
          <div className={'flex h-screenx flex-col justify-between'}>
            <div className="flex items-center justify-between py-[28px] font-medium uppercase text-black">
              <Link href="/" className="flex items-center justify-center">
                <Logo />
              </Link>
              <div className="ml-[-68px] hidden md:flex">
                {links.map((link, i) => (
                  <HeaderLink key={i} href={link.href} label={link.label} />
                  // <Link
                  //   key={i}
                  //   className="mr-[77px] text-sm last:mr-0"
                  //   href={link.href}
                  // >
                  //   <RollingText text={link.label} height={20} />
                  //   {/* {link} */}
                  // </Link>
                ))}
              </div>
              <div className="hidden md:block">
                <Link
                  href="/contacts"
                  className="glow-border-black rounded-full px-4 py-[15px] text-sm leading-[19px] shadow-black transition-colors duration-300 hover:bg-black hover:text-brand"
                >
                  Let&apos;s get in touch
                </Link>
              </div>
              <BurgerButton
                className="md:hidden"
                aria-controls={menuId}
                isOpen={isOpen}
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
              />
            </div>
            <nav
              aria-label="Main menu"
              role="navigation"
              id={menuId}
              className="flex flex-col"
            >
              <ul className="text-center">
                {links.map((item, i) => (
                  <Animation as="li" key={i} index={i}>
                    {/* <li
                      // key={item}
                      className="mb-[24px] text-[59px] uppercase leading-[80px] last:mb-[0px]"
                    > */}
                    <Link
                      href={item.href}
                      className="flex items-center justify-center font-medium text-black"
                    >
                      <RollingText text={item.label} height={80} />
                      {/* {item} */}
                    </Link>
                    {/* </li> */}
                  </Animation>
                ))}
              </ul>
            </nav>
            <Animation index={links.length}>
              <Link href="/contacts">
                <BigButton className="mb-[60px]">let’s get in touch</BigButton>
              </Link>
            </Animation>
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
export const isFooterAtom = atom(true);
export const subMenuOpenAtom = atom(false);

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

  // useEffect(() => {
  //   setIsFooter(isFooter);
  // }, [isFooter, setIsFooter]);

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

export default function Header({
  isFixed = true,
  headerRightSlot = null,
  overrideTheme = '',
}) {
  const router = useRouter();
  const mounted = useMounted();
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
  const subMenuActive = !!subMenuItems?.length;
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

  const [isTop, setIsTop] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const offset = 112;
    const onScroll = throttle(() => {
      const isTop = window.scrollY < offset;
      setIsTop(isTop);

      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      setIsBottom(isBottom);
    }, 100);
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

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
    !isBottom &&
    scrollDirection !== 'forward' &&
    t !== 'dark' &&
    t !== 'brand';

  useEffect(() => {
    setSubMenuItems([]);
  }, [router.pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;

      if (!rootRef.current.contains(target)) {
        setSubMenuItems((v) => {
          if (v.length) return [];

          return v;
        });
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={rootRef}>
      <div className={cx('fixed top-0 z-10 w-full')}>
        <div className="relative">
          <div
            className={cx(
              'backdrop pointer-events-none absolute top-0 left-0 h-[96px] w-full -translate-y-full bg-white opacity-0 transition-all duration-300',
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
            'md:-translate-y-4': !isTop && !isBottom,
            '!-translate-y-full':
              (scrollDirection === 'forward' && !isBottom && !subMenuActive) ||
              !headerActive,
            // '!transition-none': isRouteTransition,
          }
        )}
      >
        <div className="relative">
          <Layout>
            <div
              className="flex items-center justify-between pt-[28px] font-medium  uppercase md:h-[96px]  md:!pt-[28px] md:!pb-[28px]"
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
                  'ml-[-32px] hidden transition-opacity duration-500 md:flex'
                )}
              >
                {!isFooter &&
                  links.map((link, i) => (
                    <HeaderLink
                      key={i}
                      index={i}
                      href={link.href}
                      label={link.label}
                      theme={t}
                      subItems={link.children}
                      onSubMenuClick={(items) => {
                        setSubMenuItems((current) => {
                          if (current?.length) return [];
                          return items;
                        });
                      }}
                    />
                    // <Animated
                    //   as={Link}
                    //   href={link.href}
                    //   key={i}
                    //   delay={(i + 1) * 100}
                    //   className={cx(
                    //     'mr-[77px] text-sm last:mr-0',
                    //     t === 'dark' && 'text-white'
                    //   )}
                    //   immediate
                    // >
                    //   <RollingText text={link.label} height={20} />
                    // </Animated>
                  ))}
              </div>
              {headerRightSlot ||
                (!isFooter && (
                  <div
                    className={cx(
                      'hidden transition-opacity duration-200 md:block'
                    )}
                  >
                    <Animated delay={(links.length + 1) * 100} immediate>
                      <Link
                        href="/contacts"
                        className={cx(
                          'glow-border-black rolling-text-group flex whitespace-pre-wrap rounded-full px-[19px] py-[16px] text-button-m shadow-black transition-all duration-500 hover:bg-black',
                          'hover:text-brand',
                          t === 'white' &&
                            'glow-border-b-b hover:!bg-brand hover:!text-black',
                          t === 'dark' &&
                            'glow-border-white-to-r bg-black text-white hover:!bg-brand hover:!text-black'
                        )}
                      >
                        <RollingText
                          height={20}
                          text={`Let's get in touch`}
                        ></RollingText>
                      </Link>
                    </Animated>
                  </div>
                ))}
              {headerRightSlot ? null : (
                <div className="md:hidden">
                  <Animated delay={150} immediate>
                    <BurgerButton
                      theme={t}
                      aria-controls={menuId}
                      isOpen={isOpen}
                      onClick={onBurgerClick}
                      aria-expanded={isOpen}
                    />
                  </Animated>
                </div>
              )}
            </div>
          </Layout>
        </div>
      </header>
      <BurgerMenu menuId={menuId} links={links} />
      {isClient && <HeaderSubMenu subItems={subMenuItems} />}
    </div>
  );
}
