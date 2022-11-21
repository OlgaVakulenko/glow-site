import cx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useId, useState } from 'react';
import { mediaAtom, useSupports } from '../lib/agent';
import { useBodyLock, useInView } from '../lib/utils';
import BigButton from './BigButton';
import Layout from './Layout';
import Logo from './Logo';
import RollingText from './RollingText';
import { Transition } from '@headlessui/react';
import { atom } from 'jotai';
import { useAtom } from 'jotai';
import Animated from './Animated';
import { scrollAtom } from '../atoms/scroll';
import debounce from 'lodash.debounce';
import { useSetAtom } from 'jotai';

function BurgerIcon({ isOpen = false }) {
  if (isOpen) {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.68628 9L31.3137 31.6274" stroke="#19191B" strokeWidth="2" />
        <path
          d="M8.68628 32L31.3137 9.37258"
          stroke="#19191B"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg
      width="32"
      height="18"
      viewBox="0 0 32 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H32M0 17H32" stroke="#19191B" strokeWidth="2" />
    </svg>
  );
}

const BurgerButton = ({ isOpen, className, ...props }) => {
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
      <BurgerIcon isOpen={isOpen} />
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
                  href="/"
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
              <BigButton
                onClick={() => {
                  handleTestClick();
                }}
                className="mb-[60px]"
              >
                let’s get in touche{' '}
              </BigButton>
            </Animation>
          </div>
        </Layout>
      </div>
    </Transition>
  );
};

export const headerTheme = atom('brand');

export const useHeaderTheme = (ref, themeInView = '') => {
  const setHeaderTheme = useSetAtom(headerTheme);

  useEffect(() => {
    if ('!IntersectionObserver' in window) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting);
        });
      },
      {
        rootMargin: 120 - 1 + 'px',
        threshold: 0,
      }
    );

    io.observe(node);

    return () => {
      io.disconnect();
    };
  }, [ref]);
  // const isInView = useInView(ref, (inView) => {
  //   if (inView) {
  //     setHeaderTheme(themeInView);
  //   }
  // });
};

export default function Header() {
  const [theme] = useAtom(headerTheme);
  const [transitionOpen, setTransitionOpen] = useState(false);
  const [isOpen, setIsOpen] = useAtom(openAtom);
  // const [isOpen, setIsOpen] = useState(false);
  const links = ['Work', 'Team', 'Services'];
  const menuId = useId();
  const { lock, release } = useBodyLock();
  const [isStop, setIsStop] = useState(true);

  console.log('header theme', theme);
  // console.log('scrollTop', scrollTop);

  useEffect(() => {
    if (isOpen) {
      lock();
    } else {
      release();
    }
  }, [isOpen]);

  // useEffect(() => {
  //   const setStop = debounce(() => {
  //     setIsStop(true);
  //   }, 1000);

  //   const onScroll = () => {
  //     setIsStop(false);
  //     setStop();
  //   };

  //   window.addEventListener('scroll', onScroll);

  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, []);

  const onBurgerClick = () => {
    setIsOpen((v) => !v);
  };

  return (
    <>
      <header className="fixed z-10 w-full">
        <Layout>
          <div
            className={cx({
              ['flex h-screenx flex-col bg-brand']: false,
            })}
          >
            <div className="flex items-center justify-between py-[28px]  font-medium uppercase text-black md:py-[44px]">
              <Animated delay={50}>
                <Link href="/" className="flex items-center justify-center">
                  <Logo />
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
                    className="mr-[77px] text-sm last:mr-0"
                  >
                    <RollingText text={link} height={20} />
                  </Animated>
                ))}
              </div>
              <div
                className={cx(
                  'hidden transition-opacity duration-500 md:block'
                )}
              >
                <Animated delay={(links.length + 1) * 100}>
                  <Link
                    href="/"
                    className="glow-border-black rounded-full px-[19px] py-[16px] text-button-m shadow-black transition-colors duration-500 hover:bg-black hover:text-brand"
                  >
                    Let&apos;s get in touch
                  </Link>
                </Animated>
              </div>
              <Animated className="md:hidden" delay={150}>
                <BurgerButton
                  aria-controls={menuId}
                  isOpen={isOpen}
                  onClick={onBurgerClick}
                  aria-expanded={isOpen}
                />
              </Animated>
            </div>

            {isOpen && false && (
              <>
                <nav
                  aria-label="Main menu"
                  role="navigation"
                  id={menuId}
                  className="flex flex-col"
                >
                  <ul className="text-center">
                    {links.map((item) => (
                      <li
                        key={item}
                        className="mb-[24px] text-[59px] uppercase leading-[80px] last:mb-[0px]"
                      >
                        <a
                          href="#"
                          className="flex items-center justify-center font-medium text-black"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <BigButton className="mb-[60px]">
                  let’s get in touche{' '}
                </BigButton>
              </>
            )}
          </div>
        </Layout>
      </header>
      <BurgerMenu menuId={menuId} links={links} />
    </>
  );
}
