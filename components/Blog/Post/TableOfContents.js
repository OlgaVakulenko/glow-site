import cx from 'clsx';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import gsap from '../../../dist/gsap';
import { activeAtom, isTransitionAtom } from '../PostPage';

export default function TableOfContents({ paragraphs }) {
  const scrollRef = useRef(null);
  const [active, setActive] = useAtom(activeAtom);
  const setIsTransition = useSetAtom(isTransitionAtom);
  const [hasScrollbar, setHasScrollbar] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;

    setHasScrollbar(
      scrollRef.current.scrollHeight > scrollRef.current.clientHeight
    );
  }, [paragraphs]);

  useEffect(() => {
    if (!scrollRef.current || !hasScrollbar) {
      return;
    }

    const currentEl = scrollRef.current.querySelector(
      `[data-element-index="${active}"]`
    );
    currentEl?.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
    });
  }, [active, hasScrollbar]);

  if (!paragraphs?.length) {
    return null;
  }

  return (
    <div className="mb-[58px]">
      <div className="mb-[26px] text-next-heading-7">Table of contents</div>
      <div
        ref={scrollRef}
        className="max-h-[calc(100vh-600px)] overflow-y-auto"
      >
        {paragraphs.map((p, i) => (
          <a
            href={`#${p.id}`}
            key={i}
            data-element-index={i}
            className={cx(
              'relative mb-5 flex items-center pl-6 text-next-body-xs transition-colors last:mb-0',
              {
                'text-brand': active === i,
              }
            )}
            onClick={(e) => {
              e.preventDefault();
              gsap.to(window, {
                duration: 0.3,
                scrollTo: {
                  y: '#' + p.id,
                  offsetY: window.innerHeight / 2 - 25,
                },
                onStart: () => {
                  setActive(i);
                  setIsTransition(true);
                },
                onComplete: () => {
                  setTimeout(() => {
                    setIsTransition(false);
                  }, 200);
                },
              });
            }}
          >
            {active === i && (
              <div className="absolute left-[2px] top-1/2 -translate-y-1/2">
                <svg
                  width="6"
                  height="8"
                  viewBox="0 0 6 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4L-3.26266e-07 7.4641L-2.34249e-08 0.535898L6 4Z"
                    fill="#E33230"
                  />
                </svg>
              </div>
            )}
            {p.text}
          </a>
        ))}
      </div>
    </div>
  );
}
