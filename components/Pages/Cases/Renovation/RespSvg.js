import { Source, resolve } from '../../../Image';
import cx from 'clsx';
import Animated from '../../../Animated';

export default function RespSVG({
  src,
  pictureClassname,
  md,
  xl,
  className,
  ...props
}) {
  return (
    <Animated as="picture" className={pictureClassname}>
      {xl && <Source image={xl} width="1440" media="(min-width: 1200px)" />}
      {md && <Source image={md} width="1024" media="(min-width: 820px)" />}
      <Source image={src} width="480" />
      <img
        className={cx('w-full', className)}
        src={resolve({ src: src.src })}
        alt=""
        width={src.width || 'auto'}
        height={src.height || 'auto'}
        {...props}
      />
    </Animated>
  );
}
