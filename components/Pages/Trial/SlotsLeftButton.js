import AnimatedButton from '../../AnimatedButton';
import cx from 'clsx';
import { useIsClient } from '../../../lib/utils';
import { useEffect, useState } from 'react';

export default function SlotsLeftButton({ type = 'default', className }) {
  const [text, setText] = useState('');
  const isMounted = useIsClient();

  useEffect(() => {
    const d = new Date();
    const monthIndex = d.getMonth() + 1;
    const month = d.toLocaleString('en-US', { month: 'long' });
    const slotsLeft = (monthIndex % 3) + 2;

    setText(`${slotsLeft} slots available in ${month}`);
  }, []);

  if (!isMounted || !text) return null;

  return (
    <AnimatedButton
      as="div"
      className={cx(className, 'inline-flex font-sans uppercase !text-brand')}
      bgClassName={cx({
        '!bg-lred': type === 'default',
        '!bg-[rgba(227,50,48,0.1)]': type === 'footer',
      })}
    >
      <span>{text}</span>
    </AnimatedButton>
  );
}
