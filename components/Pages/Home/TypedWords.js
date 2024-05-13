import cx from 'clsx';
import throttle from 'lodash.throttle';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

function useRefFn(fn) {
  const ref = useRef(fn);

  ref.current = fn;

  return ref;
}

function TypedWord({ word, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);
  const currentRef = useRefFn(current);
  const onCompleteFn = useRefFn(onComplete);
  const isCompletingRef = useRefFn(isCompleting);
  const letters = word.split('');

  useLayoutEffect(() => {
    setCurrent(0);
    setIsCompleting(false);
  }, [word]);

  useEffect(() => {
    const id = setInterval(() => {
      if (currentRef.current + 1 >= word.length) {
        setTimeout(() => {
          setIsCompleting(true);
        }, 1000);
        clearInterval(id);
        return;
      }

      setCurrent((c) => {
        return Math.min(c + 1, word.length - 1);
      });
    }, 200);

    return () => {
      clearInterval(id);
    };
  }, [word.length, onCompleteFn, currentRef]);

  useEffect(() => {
    if (!isCompleting) return;
    const id = setInterval(() => {
      if (currentRef.current - 1 < -1) {
        onCompleteFn.current();
        clearInterval(id);
        return;
      }

      setCurrent((c) => {
        return c - 1;
      });
    }, 30);

    return () => {
      clearInterval(id);
    };
  }, [isCompleting, isCompletingRef, currentRef, onCompleteFn]);

  return (
    <div className="blink inline">
      <span>&#8203;</span>
      {letters.map((letter, idx) => (
        <span
          key={idx}
          className={cx('', {
            hidden: idx > current,
          })}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

export default function TypedWords({ words }) {
  const [current, setCurrent] = useState(0);
  const word = words[current];

  return (
    <div>
      <TypedWord
        key={word}
        word={word}
        onComplete={throttle(() => {
          console.log('on complete');
          setTimeout(() => {
            setCurrent((c) => {
              return (c + 1) % words.length;
            });
          }, 700);
        }, 100)}
      />
    </div>
  );
}
