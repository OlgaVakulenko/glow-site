import cx from 'clsx';
import { useEffect, useState } from 'react';

let tempCache = null;

export default function Weather({ className }) {
  const [temp, setTemp] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (tempCache != null) {
      setTemp(tempCache);
      return;
    }

    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&APPID=b2003c8c08870ac73dfae03848ce8a8c&units=metric',
      { cache: 'force-cache' }
    )
      .then((res) => res.json())
      .then(({ main }) => {
        const { temp } = main;
        let t = temp.toFixed(0);
        if (t === '-0') {
          t = 0;
        }
        tempCache = t;
        setTemp(t);
      })
      .catch((e) => {
        setIsError(true);
      });
  }, []);
  return (
    !isError && (
      <div className={cx({ invisible: temp === null }, className)}>
        {temp}°C
      </div>
    )
  );
}
