import { Source, resolve } from '../../../Image';
import cx from 'clsx';
import Animated from '../../../Animated';

export default function RespImage({
  src,
  pictureClassname,
  md,
  xl,
  className,
  ...props
}) {
  const isSvg = src && src.src && src.src.endsWith('.svg');

  if (isSvg) {
    return (
      <Animated as="picture" className={pictureClassname}>
        {xl && (
          <Source
            image={xl}
            width="1440"
            height={~~(1440 / (xl.width / xl.height))}
            media="(min-width: 1200px)"
          />
        )}
        {md && (
          <Source
            image={md}
            width="1024"
            media="(min-width: 820px)"
            height={~~(1024 / (xl.width / xl.height))}
          />
        )}
        <img
          className={cx('w-full', className)}
          src={resolve({ src: src.src })}
          alt=""
          width={src.width}
          height={src.height}
          {...props}
        />
      </Animated>
    );
  }

  return (
    <Animated as="picture" className={pictureClassname}>
      {xl && (
        <Source
          image={xl}
          width="1440"
          height={~~(1440 / (xl.width / xl.height))}
          media="(min-width: 1200px)"
        />
      )}
      {md && (
        <Source
          image={md}
          width="1024"
          media="(min-width: 820px)"
          height={~~(1024 / (xl.width / xl.height))}
        />
      )}
      <Source image={src} width="480" />
      <img
        className={cx('w-full', className)}
        src={resolve({ src: src.src })}
        alt=""
        width={src.width}
        height={src.height}
        {...props}
      />
    </Animated>
  );
}
