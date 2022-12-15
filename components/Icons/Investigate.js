import {
  circleProps as cProps,
  lineProps as lProps,
  useMounted,
} from './animations';

export default function Investigate({ isReady }) {
  const isMounted = useMounted();

  const circleProps = (options = {}) => {
    return cProps({
      ...options,
      isMounted,
      isReady,
    });
  };

  const lineProps = (options = {}) => {
    return lProps({ ...options, isReady });
  };

  return (
    <svg
      width="153"
      height="132"
      viewBox="0 0 153 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="65" cy="65" r="64" stroke="#DADADA" />
      <path
        {...lineProps({
          array: 300,
          offset: 315,
          to: 600,
          duration: '4s',
        })}
        d="M65 129C77.0104 129 88.7784 125.62 98.9586 119.248C109.139 112.875 117.32 103.766 122.568 92.9629C127.816 82.1595 129.917 70.0976 128.633 58.1561C127.349 46.2146 122.73 34.8754 115.305 25.435C107.88 15.9947 97.9489 8.83403 86.6464 4.77182C75.3438 0.70961 63.1263 -0.0902334 51.3906 2.46373C39.6549 5.0177 28.8747 10.8224 20.2824 19.2142C11.6902 27.606 5.63264 38.2462 2.80239 49.9183"
        stroke="#19191B"
      />
      <path
        d="M73 78L75.0491 77.603C107.3 71.3544 118.686 31.0452 94.4695 8.84708L93 7.5"
        stroke="#DADADA"
      />
      <path
        {...lineProps({
          array: 300,
          offset: 500,
          to: 600,
          delay: '1s',
          duration: '2s',
        })}
        d="M73 78L75.0491 77.603C107.3 71.3544 118.686 31.0452 94.4695 8.84708L93 7.5"
        stroke="black"
      />
      <circle cx="3" cy="49" r="3" {...circleProps()} />
      <circle
        cx="65"
        cy="129"
        r="3"
        fill="#19191B"
        {...circleProps({
          delay: '3.7s',
        })}
      />
      <circle
        {...circleProps({
          delay: '2.7s',
        })}
        cx="75"
        cy="78"
        r="3"
        fill="#19191B"
      />
      <circle
        {...circleProps({
          delay: '1s',
        })}
        cx="94"
        cy="8"
        r="3"
        fill="#19191B"
      />
    </svg>
  );
}
