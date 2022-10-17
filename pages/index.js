import Head from 'next/head';
import Image from '../components/Image';
import {
  useDeferredValue,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useTransition,
} from 'react';
import Space from '../img/space.jpg';
import { useAtom } from 'jotai';
import { scrollAtom } from '../atoms/scroll';
import Select from '../components/Select';
import { AnimateSharedLayout, motion } from 'framer-motion';
import Headroom from 'headroom.js';
import Marquee from '../components/Marquee';
import RichText from '../components/RichText';
import Link from 'next/link';
import Weather from '../components/Weather';
import cx from 'clsx';
import { useInView } from 'framer-motion';
import Footer from '../components/Footer';
import Home from '../components/Pages/Home';

const Tab = ({ children, selected, ...rest }) => {
  return (
    <motion.div
      {...rest}
      selected
      className="relative mr-2 p-2 last:mr-0"
      animate
    >
      {children}
      {selected && (
        <motion.div
          className="absolute left-0 bottom-[-4] h-[8px] w-full border-r-2 bg-red-400"
          layoutId="tab.underline"
        ></motion.div>
      )}
    </motion.div>
  );
};

const Card = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      // viewport={{ once: true }}
      className="mb-32 h-[400px] border-r-4 bg-white bg-slate-50 p-16"
    >
      {children}
    </motion.div>
  );
};

const Header = () => {
  const sentinel = useRef(null);
  const sentinerInView = useInView(sentinel);
  const [y, setY] = useState(0);
  const [isTop, setIsTop] = useState(false);
  const ref = useRef(null);
  const height = 58;

  useEffect(() => {
    const headroom = new Headroom(ref.current, {
      onTop: () => {
        setIsTop(true);
      },
      onPin: () => {
        setIsTop(true);
      },
      onUnpin: () => {
        setIsTop(false);
      },
      // onTop: () => {
      //   console.log('on top')
      // }
    });
    headroom.init();

    return () => {
      try {
        headroom.destroy();
      } catch (e) {}
    };
  }, []);

  // useEffect(() => {
  //   const io = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       setIsTop(entry.isIntersecting);
  //     });
  //   });

  //   io.observe(ref.current);

  //   return () => {
  //     io.disconnect();
  //   };
  // }, []);

  const inView = useInView(ref);

  useEffect(() => {
    const onScroll = () => {
      setY(Math.round(window.scrollY));
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // useEffect(() => {
  //   const onScroll = () => {
  //     setY(window.scrollY);
  //   };

  //   window.addEventListener('scroll', onScroll);
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, []);
  const [offset, setOffset] = useState(-60);

  const [scrollDirection, setScrollDirection] = useState('bottom');
  const scrollRef = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > scrollRef.current) {
        setScrollDirection('bottom');
        console.log('bottom');
      } else {
        setScrollDirection('top');
        console.log('top');
      }
      scrollRef.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const [ease, setEase] = useState(false);
  const yRef = useRef(null);

  useEffect(() => {
    if (scrollDirection === 'top') {
      setEase(true);
      yRef.current = y;
    } else {
      setEase(false);
    }
  }, [scrollDirection]);

  console.log('render');

  const style = {
    top: offset,
  };

  if (ease) {
    style.position = 'absolute';
    style.top = yRef.current - height + 'px';
  }
  // console.log('sentinel', sentinerInView);
  // console.log('nav', inView);
  return (
    <header
      ref={ref}
      className={cx(
        'pointer-events-none sticky top-[-58px] flex w-full flex-col border border-red-500 bg-white'
        // {
        //   ['fixed top-0']: isTop,
        // }
      )}
      style={style}
    >
      <div ref={sentinel}></div>
      <div className="">
        <div className="relative mx-auto max-w-[800px]">
          <div className="sticky top-0">
            <div className="flex justify-between py-4">
              <div>
                Logo {y} isTop: {isTop ? 'true' : 'false'}
              </div>
              <div className="flex">
                <div className="mr-3">Link #1</div>
                <div className="mr-3">Link #2</div>
                <div className="mr-3">Link #2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
