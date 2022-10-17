import { useState } from 'react';
import cx from 'clsx';
import Logo from './Logo';
import Layout from './Layout';
import usePreventScroll from '../hooks/usePreventScroll';

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

const BurgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cx('flex items-center justify-center', {
        ['px-[4px] py-[11px]']: !isOpen,
      })}
    >
      <BurgerIcon isOpen={isOpen} />
    </button>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Work', 'Team', 'Services'];
  // usePreventScroll(isOpen);

  const onBurgerClick = () => {
    setIsOpen((v) => !v);
  };

  return (
    <Layout>
      <div
        className={cx({
          ['flex h-screen flex-col justify-between bg-brand']: isOpen,
        })}
      >
        <nav className="flex justify-between py-[28px]">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <BurgerButton isOpen={isOpen} onClick={onBurgerClick} />
        </nav>
        {isOpen && (
          <>
            <div className="">
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
            </div>
            <button
              type="button"
              className="mb-[60px] flex items-center justify-between rounded-full border-1.5 border-black px-[24px] py-[56px] text-sm font-medium uppercase text-black"
            >
              let’s meke a call{' '}
              <svg
                width="35"
                height="16"
                viewBox="0 0 35 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.7071 8.70711C35.0976 8.31658 35.0976 7.68342 34.7071 7.29289L28.3431 0.928931C27.9526 0.538406 27.3195 0.538406 26.9289 0.92893C26.5384 1.31945 26.5384 1.95262 26.9289 2.34314L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.70711ZM34 7L0.549709 6.99999L0.549709 8.99999L34 9L34 7Z"
                  fill="#19191B"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </Layout>
  );
}
