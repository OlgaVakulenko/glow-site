import { useAtom } from 'jotai';
import { activeAtom } from '../PostPage';
import cx from 'clsx';

export default function TableOfContents({ paragraphs }) {
  const [active] = useAtom(activeAtom);

  if (!paragraphs?.length) {
    return null;
  }

  return (
    <div className="mb-10">
      <div className="mb-8 text-button-s uppercase">Table of contents</div>
      <div className="max-h-[calc(100vh-608px)] overflow-y-auto">
        {paragraphs.map((p, i) => (
          <div
            key={i}
            className={cx(
              'relative mb-6 flex items-center pl-6 text-body-xs transition-colors last:mb-0',
              {
                'text-brand': active === i,
              }
            )}
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
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}
