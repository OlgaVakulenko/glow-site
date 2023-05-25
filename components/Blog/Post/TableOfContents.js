import cx from 'clsx';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import gsap from '../../../dist/gsap';
import { activeAtom, isTransitionAtom } from '../PostPage';

export default function TableOfContents({ paragraphs }) {
  const scrollRef = useRef(null);
  const [active, setActive] = useAtom(activeAtom);
  const setIsTransition = useSetAtom(isTransitionAtom);

  if (!paragraphs?.length) {
    return null;
  }

  return (
    <div className="mb-10">
      <div className="mb-8 text-button-s uppercase">Table of contents</div>
      <div
        ref={scrollRef}
        className="max-h-[calc(100vh-608px)] overflow-y-auto"
      >
        {paragraphs.map((p, i) => (
          <a
            href={`#${p.id}`}
            key={i}
            className={cx(
              'relative mb-6 flex items-center pl-6 text-body-xs transition-colors last:mb-0',
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
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
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
