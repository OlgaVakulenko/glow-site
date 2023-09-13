import {
  circleProps as cProps,
  lineProps as lProps,
  useMounted,
} from './animations';

const matrix = (scale = 1, cy) => {
  return `matrix(1, 0, 0, ${scale}, 0, ${cy - scale * cy})`;
};

const matrixX = (scale = 1, cx) => {
  return `matrix(${scale}, 0, 0, 1, ${cx - scale * cx}, 0)`;
};

const matrixXY = (scaleX = 1, scaleY = 1, cx, cy) => {
  return `matrix(${scaleX}, 0, 0, ${scaleY}, ${cx - scaleX * cx}, ${
    cy - scaleY * cy
  })`;
};

export default function Ideate({ className, isReady = true }) {
  const isMounted = useMounted();
  const isActive = isMounted && isReady;

  const lineProps = (options = {}) => {
    const res = lProps({ ...options, isReady });

    const sy = options?.scale || 1;
    const cy = options?.cy;

    let style = res.style || {};
    let className = res.className;
    if (options?.disableAnimation) {
      style = {};
      className = '';
    }

    return {
      ...res,
      // className,
      style: {
        ...style,
        transform: cy && matrix(isActive ? sy : 1, cy),
      },
    };
  };

  const transformCircleProps = (options = {}) => {
    const delay = options.delay || 0;
    const translateY = options.translateY || 0;
    if (isActive) {
      return {
        style: {
          transform: `translateY(${translateY}px)`,
          transitionDelay: delay,
        },
        className: 'svg-transform-circle',
      };
    }

    return null;
  };

  const circleProps = (options = {}) => {
    const res = cProps({ ...options, isMounted, isReady });

    return res;
  };

  return (
    <svg
      width="136"
      height="115"
      viewBox="0 0 136 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/** 1 */}
      <path
        // {...lineProps({
        //   cy: 115,
        //   scale: 1.36,
        //   disableAnimation: true,
        // })}
        d="M8 115V79"
        stroke="#DADADA"
      />
      <path
        {...lineProps({
          cy: 115,
          scale: 1.36,
          disableAnimation: true,
        })}
        d="M8 115V79"
        stroke="#DADADA"
      />
      <path
        {...lineProps({
          cy: 115,
          scale: 1.36,
          array: 200,
          offset: 365,
          to: 400,
          delay: '0.5s',
        })}
        d="M8 105V79"
        stroke="black"
      />
      <path d="M0 115L16 115" stroke="#DADADA" />
      <g
        style={{
          transition: 'transform 2s',
          transitionDelay: '1s',
          transform: isActive ? 'translateY(-13px)' : 'translateY(-39px)',
        }}
      >
        <path
          d="M0 115L16 115"
          stroke="black"
          style={{
            transition: 'transform 2s ease-out',
            transitionDelay: '1.6s',
            transform: isActive
              ? matrixX(1, 16 / 2, 115)
              : matrixX(0.01, 16 / 2, 115 - 40),
          }}
        />
      </g>

      {/* <path d="M8 115V79" stroke="black" /> */}
      {/** 2 */}
      <path d="M48 99V43" stroke="#DADADA" />
      <path
        d="M48 99V73"
        stroke="black"
        {...lineProps({
          array: 200,
          offset: 368,
          to: 400,
          delay: '1.3s',
        })}
      />

      {/** 3 */}
      <path d="M88 56V0" stroke="#DADADA" />
      <path
        {...lineProps({
          array: 200,
          offset: 200,
          to: 168,
          delay: '1.8s',
        })}
        d="M88 26V0"
        stroke="black"
      />

      {/** 4 */}
      <path
        {...lineProps({
          array: 200,
          offset: 373,
          to: 400,
          delay: '1.5s',
        })}
        d="M128 73V17"
        stroke="#DADADA"
      />
      <path
        {...lineProps({
          array: 200,
          offset: 345,
          to: 400,
          delay: '2s',
        })}
        d="M128 73V17"
        stroke="black"
      />

      <path
        style={{
          transition: 'transform 2s ease-out',
          transitionDelay: '1.5s',
          transform: isActive ? 'translateY(0px)' : 'translateY(-27px)',
        }}
        d="M120 73L136 73"
        stroke="#DADADA"
      />
      <g
        style={{
          transition: 'transform 2s ease-out',
          transitionDelay: '1.5s',
          transform: isActive ? 'translateY(0px)' : 'translateY(-27px)',
        }}
      >
        <path
          style={{
            transition: 'transform 2s ease-out',
            transitionDelay: '3.3s',
            transform: isActive
              ? matrixX(1, 120 + 16 / 2)
              : matrixX(0.01, 120 + 16 / 2),
          }}
          d="M120 73L136 73"
          stroke="black"
        />
      </g>

      <path d="M80 56L96 56" stroke="#DADADA" />

      {/** 3 */}
      <path d="M80 -6.99382e-07L96 1.74846e-06" stroke="#DADADA" />
      <path
        style={{
          transition: 'transform 2s ease-out',
          transitionDelay: '3s',
          transform: isActive
            ? matrixX(1, 80 + 16 / 2)
            : matrixX(0.01, 80 + 16 / 2),
        }}
        d="M80 -6.99382e-07L96 1.74846e-06"
        stroke="black"
      />

      {/** 2 */}
      <path d="M40 43L56 43" stroke="#DADADA" />
      <path d="M40 99L56 99" stroke="#DADADA" />
      <path
        style={{
          transition: 'transform 2s ease-out',
          transitionDelay: '3s',
          transform: isActive
            ? matrixX(1, 40 + 16 / 2)
            : matrixX(0.01, 40 + 16 / 2),
        }}
        d="M40 99L56 99"
        stroke="black"
      />

      {/** 2 */}
      <g {...transformCircleProps({ translateY: -10, delay: '0.8s' })}>
        <circle
          {...circleProps({
            delay: '1.3s',
          })}
          cx="48"
          cy="81"
          r="3"
          fill="#DADADA"
        />
      </g>
      {/** 3 */}
      <g {...transformCircleProps({ translateY: 10, delay: '1.3s' })}>
        <circle
          {...circleProps({
            delay: '1.7s',
          })}
          cx="88"
          cy="18"
          r="3"
          fill="#DADADA"
        />
      </g>
      <circle
        {...circleProps({ delay: '2s' })}
        cx="128"
        cy="19"
        r="3"
        fill="#DADADA"
      />
      {/** 1 */}
      <g {...transformCircleProps({ translateY: -13 })}>
        <circle
          {...circleProps({
            delay: '0.5s',
          })}
          cx="8"
          cy="79"
          r="3"
          fill="#DADADA"
        />
      </g>
    </svg>
  );

  return (
    <svg
      width="136"
      height="129"
      viewBox="0 0 136 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 88V72" stroke="#19191B" />
      <path d="M48 112V56" stroke="#DADADA" />
      <path d="M48 112V84" stroke="#19191B" />
      <path d="M88 69V13" stroke="#DADADA" />
      <path d="M88 42V13" stroke="#19191B" />
      <path d="M128 56V0" stroke="#19191B" />
      <path d="M120 56L136 56" stroke="black" />
      <path d="M120 56L136 56" stroke="#19191B" />
      <path d="M80 13L96 13" stroke="#19191B" />
      <path d="M80 69L96 69" stroke="#DADADA" />
      <path d="M40 112L56 112" stroke="#19191B" />
      <path d="M40 56L56 56" stroke="#DADADA" />
      <path d="M0 88L16 88" stroke="#19191B" />
      <path d="M0 128L16 128" stroke="#DADADA" />
      <circle cx="48" cy="84" r="3" fill="#19191B" />
      <circle cx="88" cy="41" r="2.5" fill="#19191B" stroke="#19191B" />
      <circle cx="128" cy="3" r="3" fill="#19191B" />
      <circle cx="8" cy="72" r="3" fill="#19191B" />
      <path
        {...lineProps({
          cy: 128 - 72,
          scale: 1.5,
        })}
        d="M8 128V72"
        // stroke="#DADADA"
        stroke="red"
      />
    </svg>
  );
}
