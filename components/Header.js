import { Transition } from '@headlessui/react';
import cx from 'clsx';
import { atom, useAtom } from 'jotai';
import Link from 'next/link';
import React, { useEffect, useId, useMemo, useRef } from 'react';
import { mediaAtom } from '../lib/agent';
import { useBodyLock } from '../lib/utils';
import Animated from './Animated';
import BigButton from './BigButton';
import Layout from './Layout';
import Logo from './Logo';
import RollingText from './RollingText';
// import { scrollAtom } from '../atoms/scroll';
// import debounce from 'lodash.debounce';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { ScrollTrigger } from '../dist/gsap';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import gsap from '../dist/gsap';

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
  const [isOpen, setIsOpen] = useAtom(openAtom);
  const [media] = useAtom(mediaAtom);

  useEffect(() => {
    if (media !== 'mobile') {
      setIsOpen(false);
    }
  }, [media]);

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
                  <Link
                    key={link}
                    className="mr-[77px] text-sm last:mr-0"
                    href="/"
                  >
                    <RollingText text={link} height={20} />
                    {/* {link} */}
                  </Link>
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
                  <Animation as="li" key={item} index={i}>
                    {/* <li
                      // key={item}
                      className="mb-[24px] text-[59px] uppercase leading-[80px] last:mb-[0px]"
                    > */}
                    <a
                      href="#"
                      className="flex items-center justify-center font-medium text-black"
                    >
                      <RollingText text={item} height={80} />
                      {/* {item} */}
                    </a>
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

const defaultTheme = 'brand';
export const headerTheme = atom([defaultTheme]);
export const logoColor = atom(null);

//theme: 'white' | 'dark'
export const useHeaderTheme = ({ ref, theme = '' }) => {
  const router = useRouter();
  const setHeaderTheme = useSetAtom(headerTheme);

  useEffect(() => {
    // return;
    const onEnter = () => {
      setHeaderTheme((c) => [...c, theme]);
    };

    const onLeave = () => {
      setHeaderTheme((c) => {
        const themes = c.filter((v) => v !== theme);
        if (theme === 'brand') {
          themes.push('brand');
        }
        return themes;
      });
    };

    if (!ref) {
      console.log('ref negative call');
      onEnter();

      return onLeave;
    }

    const s = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top top+=69',
      end: 'bottom top',
      refreshPriority: -10,
      onEnter,
      onLeave,
      onEnterBack: onEnter,
      onLeaveBack: onLeave,
    });

    return () => {
      onLeave();
      s.kill();
    };
  }, [ref, setHeaderTheme, theme, router.pathname]);

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

  return (
    <div
      className="absolute top-0 z-[999] w-full"
      ref={(node) => {
        if (!node) return;
        console.log('ref init', node);
        if (!initRef.current) {
          console.log('ref init inside');
          const offsetTop = (node) => {
            const rect = node.getBoundingClientRect();
            const distance = rect.top + window.pageYOffset;
            return distance;
          };
          let h;

          const onScroll = () => {
            console.log('scroll');
            if (!h) {
              h = document.querySelector('.first-header');
            }
            if (!h) return;

            const h1 = offsetTop(h);
            const h2 = offsetTop(ref.current);
            // console.log(h1, h2);
            const distance = h1 - h2;
            // console.log('distance', distance);
            // console.log(node);
            gsap.to(node, {
              duration: 0,
              y: distance,
              force3D: true,
            });
          };

          window.addEventListener('scroll', onScroll);

          onUnmount.current.push(() => {
            window.removeEventListener('scroll', onScroll);
          });
        }

        initRef.current = true;
      }}
    >
      <Header isFixed={false} overrideTheme={theme} />
    </div>
  );
};

export default function Header({
  isFixed = true,
  headerRightSlot = null,
  overrideTheme = '',
}) {
  const [theme] = useAtom(headerTheme);
  const [color, setColor] = useAtom(logoColor);
  const t = overrideTheme || theme[theme.length - 1];
  const [isOpen, setIsOpen] = useAtom(openAtom);
  const links = ['Work', 'Team', 'Services'];
  const menuId = useId();
  const { lock, release } = useBodyLock();

  console.log('theme', t, theme, overrideTheme);

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

  return (
    <>
      <header
        className={cx('z-10 w-full', {
          ['first-header fixed']: isFixed,
          ['absolute']: !isFixed,
        })}
      >
        <div className="relative">
          <div
            className={cx(
              'backdrop pointer-events-none absolute top-0 left-0 h-[155px] w-full -translate-y-full opacity-0 transition-all duration-700',
              {
                '!translate-y-0': t !== 'brand' && t !== 'dark',
                '!opacity-100': t !== 'brand' && t !== 'dark',
              }
            )}
          ></div>
          <Layout>
            <div className="flex items-center justify-between pt-[28px] font-medium  uppercase md:h-[96px]  md:pt-[44px]">
              <Animated delay={50}>
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
                {links.map((link, i) => (
                  <Animated
                    as={Link}
                    href="/"
                    key={link}
                    delay={(i + 1) * 100}
                    className={cx(
                      'mr-[77px] text-sm last:mr-0',
                      t === 'dark' && 'text-white'
                    )}
                  >
                    <RollingText text={link} height={20} />
                  </Animated>
                ))}
              </div>
              {headerRightSlot || (
                <div
                  className={cx(
                    'hidden transition-opacity duration-500 md:block'
                  )}
                >
                  <Animated delay={(links.length + 1) * 100}>
                    <Link
                      href="/contacts"
                      className={cx(
                        'glow-border-black rolling-text-group flex whitespace-pre-wrap rounded-full px-[19px] py-[16px] text-button-m shadow-black transition-all duration-500 hover:bg-black',
                        'hover:text-brand',
                        t === 'white' &&
                          'glow-border-b-b hover:!bg-brand hover:!text-black',
                        t === 'dark' &&
                          'glow-border-white text-white hover:text-white'
                      )}
                    >
                      <RollingText
                        height={20}
                        text={`Let's get in touch`}
                      ></RollingText>
                    </Link>
                  </Animated>
                </div>
              )}

              <Animated className="md:hidden" delay={150}>
                <BurgerButton
                  theme={t}
                  aria-controls={menuId}
                  isOpen={isOpen}
                  onClick={onBurgerClick}
                  aria-expanded={isOpen}
                />
              </Animated>
            </div>
          </Layout>
        </div>
      </header>
      <BurgerMenu menuId={menuId} links={links} />
    </>
  );
}
