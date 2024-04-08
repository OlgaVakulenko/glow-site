import { useState } from 'react';
import {
  circleProps as cProps,
  lineProps as lProps,
  useMounted,
} from './animations';
import cx from 'clsx';

export default function Iterate({ className, isReady = true }) {
  const [isFinished, setIsFinished] = useState(false);
  const isMounted = useMounted();

  const lineProps = (options = {}) => {
    const duration = options.duration || '1.5s';
    return lProps({ ...options, isReady, duration });
  };

  const circleProps = (options = {}) => {
    return cProps({ ...options, isReady, isMounted });
  };

  const config = isFinished
    ? {
        array: 200,
        offset: 400,
        to: 335,
        delay: '2s',
      }
    : {
        array: 200,
        offset: 200,
        to: 130,
      };
  const config2 = isFinished
    ? {
        array: 200,
        offset: 130,
        to: 200,
        delay: '2s',
      }
    : {
        array: 200,
        offset: 335,
        to: 400,
      };
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 129 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(className)}
    >
      <path d="M60 64H79.5" stroke="#DADADA" />
      <path
        {...lineProps({
          array: 200,
          offset: 200,
          to: 180,
          delay: '3.2s',
          duration: '1s',
        })}
        d="M60 64H79.5"
        stroke="#19191B"
      />
      <path
        d="M60 64V88.5C60 94.5751 55.0751 99.5 49 99.5V99.5"
        stroke="#DADADA"
      />
      <path
        {...lineProps({
          array: 200,
          offset: 360,
          to: 400,
          delay: '1.4s',
        })}
        d="M60 64V88.5C60 94.5751 55.0751 99.5 49 99.5V99.5"
        stroke="#19191B"
      />
      <path
        d="M49 30.5V30.5C55.0751 30.5 60 35.4249 60 41.5V64"
        stroke="#DADADA"
      />
      <path
        {...lineProps({
          array: 200,
          offset: 200,
          to: 160,
          delay: '1.4s',
        })}
        d="M49 30.5V30.5C55.0751 30.5 60 35.4249 60 41.5V64"
        stroke="#19191B"
      />

      <circle
        {...circleProps({
          delay: '4.5s',
        })}
        cx="107"
        cy="64"
        r="3"
        fill="#19191B"
      />
      <circle
        {...circleProps({ delay: '.2s' })}
        cx="14"
        cy="90"
        r="3"
        fill="#19191B"
      />
      <circle
        {...circleProps({ delay: '.3s' })}
        cx="24"
        cy="113"
        r="3"
        fill="#19191B"
      />
      <circle
        {...circleProps({ delay: '.1s' })}
        cx="3"
        cy="46"
        r="3"
        fill="#19191B"
      />
      <circle
        {...circleProps({ delay: '.3s' })}
        cx="27"
        cy="17"
        r="3"
        fill="#DADADA"
      />
      <path
        d="M48.5 29.5V29.5C48.5 44.964 35.964 57.5 20.5 57.5H0"
        stroke="#DADADA"
      />

      <path
        key={isFinished + '2'}
        {...lineProps(config2)}
        d="M48.5 29.5V29.5C48.5 44.964 35.964 57.5 20.5 57.5H0"
        stroke="black"
      />
      <path
        d="M0 1H20C35.7401 1 48.5 13.7599 48.5 29.5V29.5"
        stroke="#DADADA"
      />
      <path
        key={isFinished + '1'}
        {...lineProps(config)}
        onAnimationEnd={(e) => {
          setIsFinished(true);
        }}
        d="M0 1H20C35.7401 1 48.5 13.7599 48.5 29.5V29.5"
        stroke="black"
      />
      <path
        d="M48.5 100.5V100.5C48.5 115.964 35.964 128.5 20.5 128.5H0"
        stroke="#DADADA"
      />
      <path
        key={isFinished + '4'}
        {...lineProps(config2)}
        d="M48.5 100.5V100.5C48.5 115.964 35.964 128.5 20.5 128.5H0"
        stroke="black"
      />
      <path
        d="M0 72H20C35.7401 72 48.5 84.7599 48.5 100.5V100.5"
        stroke="#DADADA"
      />
      <path
        key={isFinished + '3'}
        {...lineProps(config)}
        d="M0 72H20C35.7401 72 48.5 84.7599 48.5 100.5V100.5"
        stroke="black"
      />
      <path d="M80 65V65C80 80.464 92.536 93 108 93H129" stroke="#DADADA" />

      <path
        {...lineProps({
          array: 200,
          offset: 200,
          to: 135,
          delay: '4s',
        })}
        d="M80 65V65C80 80.464 92.536 93 108 93H129"
        stroke="#19191B"
      />
      <path d="M129 37H108C92.536 37 80 49.536 80 65V65" stroke="#DADADA" />
      <path
        {...lineProps({
          array: 200,
          offset: 335,
          to: 400,
          delay: '4s',
        })}
        d="M129 37H108C92.536 37 80 49.536 80 65V65"
        stroke="#19191B"
      />
      <circle
        {...circleProps({
          delay: '0.9s',
        })}
        cx="48"
        cy="31"
        r="3"
        fill="#19191B"
      />
      <circle
        {...circleProps({
          delay: '0.9s',
        })}
        cx="48"
        cy="100"
        r="3"
        fill="#19191B"
      />
      <circle
        {...circleProps({
          delay: '3.8s',
        })}
        cx="80"
        cy="64"
        r="3"
        fill="#19191B"
      />
    </svg>
  );
}
