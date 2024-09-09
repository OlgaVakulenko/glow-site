import Link from 'next/link';
import React, { useMemo } from 'react';
import cx from 'clsx';
import StructuredData from '../../StructuredData';

const crumbs = [
  { href: '/', label: 'Glow Team' },
  { href: '/blog', label: 'All Blog Posts' },
];

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
    <div className="mb-9 flex overflow-hidden text-button-s uppercase md:mb-8 xl:mb-14">
      <StructuredData
        id="breadcrumbs"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: links.map((l, idx) => {
            const isLast = idx === links.length - 1;

            return {
              '@type': 'ListItem',
              position: idx + 1,
              name: l.label,
              item: !isLast ? `https://glow.team${l.href}` : undefined,
            };
          }),
        }}
      />
      {links.map((l, idx) => (
        <React.Fragment key={l.href}>
          <Link
            href={l.href}
            className={cx('max-w-[140px] flex-shrink-0 md:max-w-[200px]', {
              'truncate text-brand': l.label === current,
              'text-black/50': l.label !== current,
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
