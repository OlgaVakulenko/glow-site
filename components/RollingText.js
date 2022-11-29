import { useMemo } from 'react';

export default function RollingText({ text = '', height }) {
  const letters = useMemo(() => {
    return text.split('');
  }, [text]);

  return (
    <div
      className="rolling-text-container"
      style={{
        height,
      }}
    >
      <div className="block">
        {letters.map((l, i) => (
          <span
            key={i}
            style={{
              transitionDelay: 0.015 * i + 's',
            }}
            className="rolling-letter"
          >
            {l}
          </span>
        ))}
      </div>
      <div className="block">
        {letters.map((l, i) => (
          <span
            key={i}
            style={{
              transitionDelay: 0.015 * i + 's',
            }}
            className="rolling-letter"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
