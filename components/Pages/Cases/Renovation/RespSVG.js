import { useState, useEffect } from 'react';

const RespSVG = ({ src, md, xl, className, alt }) => {
  const [svgSrc, setSvgSrc] = useState(src);

  useEffect(() => {
    const xlQuery = window.matchMedia('(min-width: 1200px)');
    const mdQuery = window.matchMedia(
      '(min-width: 820px) and (max-width: 1199px)'
    );

    const handleMediaQueryChange = () => {
      if (xlQuery.matches) {
        setSvgSrc(xl);
      } else if (mdQuery.matches) {
        setSvgSrc(md);
      } else {
        setSvgSrc(src);
      }
    };

    handleMediaQueryChange();

    xlQuery.addEventListener('change', handleMediaQueryChange);
    mdQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      xlQuery.removeEventListener('change', handleMediaQueryChange);
      mdQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [src, md, xl]);

  return <img src={svgSrc} alt={alt} className={className} />;
};

export default RespSVG;
