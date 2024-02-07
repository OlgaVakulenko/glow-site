import { useEffect, useRef } from 'react';

export default function InlineVideo({
  autoplay = true,
  controls,
  src,
  type,
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
  }, []);

  return <div ref={ref} {...rest} />;
}
