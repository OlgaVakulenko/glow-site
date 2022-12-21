import { useEffect, useMemo, useRef, useState } from 'react';
import { useMounted } from '../../Icons/animations';
import cx from 'clsx';

const isString = (str) => typeof str === 'string';

export default function TypingAnimation({
  text,
  className = '',
  mounted = false,
  onEnd,
}) {
  const [localMounted, setLocalMounted] = useState(false);

  const letters = useMemo(() => {
    return text
      .split(' ')
      .map((w, i) => {
        if (w === '<br/>') {
          return <br key={i} />;
        }

        return w;
      })
      .flatMap((word) => {
        if (typeof word === 'string') {
          return [...word.split(''), ' '];
        }

        return word;
      });

    return text.split('').map((l) => {
      if (l === '<br/>') {
        return <br key={i} />;
      }
      return l;
    });
  }, [text]);

  // const totalDuration = ;

  useEffect(() => {
    setLocalMounted(mounted);
  }, [mounted]);

  const r = useRef();
  r.current = onEnd;
  useEffect(() => {
    if (!localMounted) return;
    setTimeout(() => {
      if (r.current) {
        r.current();
      }
    }, letters.length * 75);
  }, [localMounted, letters]);

  return letters.map((l, i) =>
    isString(l) ? (
      <span
        key={i}
        className={cx(
          'opacity-0 transition-opacity duration-100',
          {
            ['!opacity-100']: localMounted,
          },
          className
        )}
        style={{
          transitionDelay: i * 75 + 'ms',
        }}
      >
        {l}
      </span>
    ) : (
      l
    )
  );
}
