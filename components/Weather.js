import cx from 'clsx';
import { useInView } from 'framer-motion';
import { useSpring } from 'framer-motion';
import { useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Weather() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const tempValue = useMotionValue(0);
  const springValue = useSpring(tempValue, {
    stiffness: 100,
    damping: 10,
    // duration: 2000,
    // bounce: 1,
  });
  const [temp, setTemp] = useState(0);
  const [displayTemp, setDisplayTemp] = useState(0);

  useEffect(() => {
    tempValue.set(temp);
  }, [temp, tempValue]);

  useEffect(() => {
    const unsub = springValue.onChange((latest) => {
      setDisplayTemp(latest.toFixed(2));
    });

    return () => {
      unsub();
    };
  }, [springValue, inView]);

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&APPID=b2003c8c08870ac73dfae03848ce8a8c&units=metric'
    )
      .then((res) => res.json())
      .then(({ main }) => {
        const { temp } = main;
        setTemp(temp);
      });
  }, []);

  useEffect(() => {}, []);

  return (
    <div ref={ref} className={cx({ invisible: displayTemp <= 0 || !inView })}>
      {displayTemp}C
    </div>
  );
}
