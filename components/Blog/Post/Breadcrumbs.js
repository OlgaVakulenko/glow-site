import Link from 'next/link';
import React, { useMemo } from 'react';
import cx from 'clsx';

const crumbs = [
  { href: '/', label: 'Glow Team' },
  { href: '/blog', label: 'All Blog Posts' },
];

function Label({ children }) {}

export default function Breadcrumbs({ current, slug }) {
  const links = useMemo(() => {
    return [
      ...crumbs,
      {
        href: `/blog/${slug}`,
        label: current,
      },
    ];
  }, [current, slug]);

  return (
    <div className="mb-12 flex overflow-hidden text-button-s uppercase">
      {links.map((l, idx) => (
        <React.Fragment key={l.href}>
          <Link
            href={l.href}
            className={cx('max-w-[140px] flex-shrink-0 md:max-w-[200px]', {
              'truncate text-brand': l.label === current,
            })}
          >
            {l.label}
          </Link>
          {idx < links.length - 1 && (
            <span className="whitespace-pre"> / </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
