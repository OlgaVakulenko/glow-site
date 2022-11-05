import { useEffect, useMemo, useState } from 'react';

export default function LocalTime({ className }) {
  const [date, setDate] = useState(null);

  const formatted = useMemo(() => {
    if (!date) return null;

    return date.toLocaleTimeString('ua-UA', {
      timeZone: 'Europe/Kiev',
      hour: '2-digit',
      minute: '2-digit',
    });
  }, [date]);

  useEffect(() => {
    setDate(new Date());
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <div className={className}>{formatted}</div>;
}
