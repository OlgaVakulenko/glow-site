import { useMemo } from 'react';
import Image from '../../Image';
import data from '../data';
import cx from 'clsx';

export function AuthorImage({ name, src, className = '' }) {
  const authorImage = useMemo(() => {
    const exists = data.find((a) => a.author === name);

    return exists?.image;
  }, [name]);

  if (authorImage) {
    return (
      <div
        className={cx(
          className,
          'flex items-center justify-center overflow-hidden'
        )}
      >
        <Image
          src={authorImage}
          alt=""
          className="h-16 w-16 object-cover"
          sizes={[[64]]}
        />
      </div>
    );
  }

  return <img src={src} alt="" className={className} />;
}

export default function Author({ name, image, position }) {
  return (
    <div className="mb-10 flex">
      <AuthorImage
        name={name}
        src={image}
        className={'mr-4 h-[64px] w-[64px] rounded-[20px]'}
      />

      <div>
        <div className="mb-2 text-body-heading-m">{name}</div>
        <div className="text-body-s">{position}</div>
      </div>
    </div>
  );
}
