import cx from 'clsx';
import { useEffect, useState } from 'react';

export default function Weather() {
  const [temp, setTemp] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&APPID=b2003c8c08870ac73dfae03848ce8a8c&units=metric'
    )
      .then((res) => res.json())
      .then(({ main }) => {
        const { temp } = main;
        setTemp(temp.toFixed(0));
      })
      .catch((e) => {
        setIsError(true);
      });
  }, []);

  return (
    !isError && <div className={cx({ invisible: temp <= 0 })}>{temp}°C</div>
  );
}
