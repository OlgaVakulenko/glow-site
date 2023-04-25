import { useMemo } from 'react';

export default function RollingText({ text = '', height }) {
  const sentences = useMemo(() => {
    if (Array.isArray(text)) {
      return text.map((t) => t.split(''));
    }

    return [text.split('')];
  }, [text]);

  return (
    <div>
      {sentences.map((letters, i) => (
        <div
          className="rolling-text-container"
          style={{
            height: height / sentences.length + 'px',
          }}
          key={i}
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
      ))}
    </div>
  );
}
