'use client';
import cx from 'clsx';
import { useState } from 'react';
import { useIsClient } from '../lib/utils';
import { useAtom } from 'jotai';
import { themeAtom } from '../lib/theme';

export default function SlotText({ textClassNames }) {
  const isClient = useIsClient();
  const [theme] = useAtom(themeAtom);
  const [month] = useState(() => {
    const date = new Date();
    const month = date.toLocaleString('en', { month: 'long' });

    return month;
  });

  if (!isClient) return null;

  return <>2 slots available in {month}</>;
}
