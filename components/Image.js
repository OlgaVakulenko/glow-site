import { useMemo } from 'react';

const __DEV__ = process.env.NODE_ENV === 'development';

export const resolve = ({ src, width, type }) => {
  if (__DEV__) {
    return src;
  }

  const parts = src.split('.');
  let extension = parts.pop();
  parts.push(`w-${width}`);
  if (type) {
    extension = type;
  }
  parts.push(extension);
  return parts.join('.');
};

const x2 = (src, width, type) => {
  return `${resolve({ src, width, type })}, ${resolve({
    src,
    width: width * 2,
    type,
  })} 2x`;
};

export default function Image(props) {
  const [width, height] = useMemo(() => {
    const ratio = 1140 / props.src.width;
    return [props.src.width * ratio, props.src.height * ratio];
  }, [props.src.width, props.src.height]);

  return (
    <picture>
      <source
        srcSet={x2(props.src.src, 366, 'webp')}
        media="(max-width: 767.5px)"
        type="image/webp"
      />
      <source srcSet={x2(props.src.src, 366)} media="(max-width: 767.5px)" />
      <source
        srcSet={x2(props.src.src, 1140, 'webp')}
        media="(min-width: 768.5px)"
        type="image/webp"
      />
      <source srcSet={x2(props.src.src, 1140)} media="(min-width: 768.5px)" />
      <img
        {...props}
        src={resolve({ src: props.src.src, width: 1140 })}
        width={width}
        height={height}
      />
    </picture>
  );
}
