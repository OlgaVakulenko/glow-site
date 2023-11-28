import AnimatedButton from '../../AnimatedButton';
import cx from 'clsx';
import { useIsClient } from '../../../lib/utils';
import { useEffect, useState } from 'react';

function getNextMonthDate() {
  var currentDate = new Date();
  var nextMonth = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();

  if (nextMonth > 11) {
    nextMonth = 0; // January is 0
    year += 1;
  }

  return new Date(year, nextMonth, currentDate.getDate());
}

export default function SlotsLeftButton({ type = 'default', className }) {
  const [text, setText] = useState('');
  const isMounted = useIsClient();

  useEffect(() => {
    let d = new Date();
    const day = d.getDate();
    if (day > 25) {
      d = getNextMonthDate();
    }
    const month = d.toLocaleString('en-US', { month: 'long' });

    setText(`5 slots available in ${month}`);
  }, []);

  if (!isMounted || !text) return null;

  return (
    <AnimatedButton
      as="div"
      className={cx(
        className,
        'inline-flex select-none font-sans uppercase !text-brand'
      )}
      bgClassName={cx({
        '!bg-lred': type === 'default',
        '!bg-[rgba(227,50,48,0.1)]': type === 'footer',
      })}
    >
      <span>{text}</span>
    </AnimatedButton>
  );
}
