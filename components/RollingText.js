import { useMemo } from 'react';
import { useMediaAtom } from '../lib/agent';
import { useRem } from '../lib/utils';

export default function RollingText({ wrapperStyle, text = '', height }) {
  const media = useMediaAtom();
  const rem = useRem();

  const sentences = useMemo(() => {
    if (Array.isArray(text)) {
      return text.map((t) => t.split(''));
    }

    return [text.split('')];
  }, [text]);

  if (media === 'mobile') {
    return <div>{text}</div>;
  }

  return (
    <div style={wrapperStyle}>
      {sentences.map((letters, i) => (
        <div
          className="rolling-text-container"
          style={{
            height: rem(height / sentences.length),
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
