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

const getExtension = (src) => {
  const p = src.split('.');
  return p[p.length - 1];
};

export const x2 = (src, width, type) => {
  return `${resolve({ src, width, type })}, ${resolve({
    src,
    width: width * 2,
    type,
  })} 2x`;
};

export function Source(props) {
  return (
    <>
      <source
        srcSet={x2(props.image.src, props.width, 'webp')}
        media={props.media}
        type="image/webp"
      />
      <source srcSet={x2(props.image.src, props.width)} media={props.media} />
    </>
  );
}

export default function Image(props) {
  const [width, height] = useMemo(() => {
    const ratio = 1140 / props.src.width;
    return [props.src.width * ratio, props.src.height * ratio];
  }, [props.src.width, props.src.height]);

  const ext = props.keepOriginalExtension ? null : 'jpg';

  return (
    <picture>
      <source
        srcSet={x2(props.src.src, 400, 'webp')}
        media="(max-width: 767.5px)"
        type="image/webp"
      />
      <source
        srcSet={x2(props.src.src, 400, ext)}
        media="(max-width: 767.5px)"
      />
      <source
        srcSet={x2(props.src.src, 1140, 'webp')}
        media="(min-width: 768.5px)"
        type="image/webp"
      />
      <source
        srcSet={x2(props.src.src, 1140, ext)}
        media="(min-width: 768.5px)"
      />
      <img
        alt=""
        {...props}
        src={resolve({ src: props.src.src, width: 1140, type: ext })}
        width={width}
        height={height}
      />
    </picture>
  );
}
