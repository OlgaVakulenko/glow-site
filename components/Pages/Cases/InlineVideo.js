import { useEffect, useRef } from 'react';

export default function InlineVideo({
  autoplay = true,
  controls,
  src,
  type,
  trial,
  ...rest
}) {
  const ref = useRef();
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (isMountedRef.current) {
      return;
    }

    isMountedRef.current = true;
    const video = document.createElement('video');
    video.autoplay = autoplay;
    video.loop = true;
    video.defaultMuted = true;
    video.muted = true;
    video.controls = controls;
    video.setAttribute('playsinline', 'true');

    if (trial) {
      if (window.innerWidth < 650) {
        video.style.height = '304px';
        video.style.objectFit = 'cover';
      } else if (window.innerWidth < 1280) {
        video.style.height = '480px';
        video.style.objectFit = 'fill';
      } else {
        video.style.height = '720px';
        video.style.objectFit = 'cover';
      }
      video.style.borderRadius = '32px';
    }


    if (type) {
      const source = document.createElement('source');
      source.src = src;
      source.type = type;
      video.appendChild(source);
    } else {
      video.src = src;
    }

    ref.current.appendChild(video);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trial]);

  return <div ref={ref} {...rest} />;
}
