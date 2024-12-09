export function SourceSvg(props) {
  let dimensions = {};
  if (props.height) {
    dimensions = {
      width: props.width,
      height: props.height,
    };
  }

  return (
    <>
      <source srcSet={props.image.src} media={props.media} {...dimensions} />
    </>
  );
}

import Head from 'next/head';
import React, { useEffect, useMemo, useState } from 'react';
import { useSwiper } from 'swiper/react';

const __DEV__ = process.env.NODE_ENV === 'development';

export const resolveSvg = ({ src }) => {
  if (__DEV__) {
    return src;
  }

  return src;
};

const useLoading = (initialLoading = 'lazy') => {
  const [loading, setLoading] = useState(initialLoading);
  const swiper = useSwiper();

  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setLoading('eager');
    };

    swiper.on('slideChange', handleSlideChange);

    return () => {
      swiper.off('slideChange', handleSlideChange);
    };
  }, [swiper]);

  return loading;
};

export default function ImageSvg(props) {
  const loading = useLoading();
  if (!props.src) {
    console.log('needle', props);
  }

  if (isString(props.src)) {
    // Render external SVG
    return <img {...props} />;
  }

  return (
    <>
      {props.priority ? (
        <Head>
          <link
            rel="preload"
            as="image"
            href={resolveSvg({ src: props.src.src })}
          />
        </Head>
      ) : null}
      <picture>
        {props.sources
          ? props.sources
          : sizesList.map((item, i) => (
              <React.Fragment key={i}>
                <source
                  key={i + 'orig'}
                  srcSet={resolveSvg({ src: props.src.src })}
                  media={item.media}
                />
              </React.Fragment>
            ))}
        <img
          alt=""
          loading={loading}
          {...props}
          src={resolveSvg({ src: props.src.src })}
          width={props.src.width}
          height={props.src.height}
          decoding="async"
        />
      </picture>
    </>
  );
}
