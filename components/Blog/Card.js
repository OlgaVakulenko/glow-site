import Link from 'next/link';
import { AuthorImage } from './Post/Author';
import cx from 'clsx';

function Author({ name, image, date, minutes, position }) {
  return (
    <div className="flex md:mt-auto">
      <div className="mr-[18px] flex items-center">
        <AuthorImage
          name={name}
          src={image}
          alt=""
          className="mt-[2px] max-h-[40px] w-full max-w-[40px] rounded-full object-cover"
        />
        {/* <img
          src={image}
          alt=""
          className="mt-[2px] max-h-[40px] w-full max-w-[40px] rounded-full object-cover"
        /> */}
      </div>
      <div>
        <div className="text-next-body-s">{name}</div>
        <div className="text-next-body-xs opacity-50">
          {position || `${date} ・ ${minutes}`}
        </div>
      </div>
    </div>
  );
}

export default function Card({ post, flavor = 'default' }) {
  return (
    <Link
      href={`/blog/${post.href}`}
      className="group block overflow-hidden md:flex md:flex-col"
    >
      <div className="mb-6 overflow-hidden rounded-3xl">
        <img
          src={post.image}
          alt=""
          className="h-[223px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h2
        className={cx('line-clamp-3 text-next-body-l md:max-w-[80%]', {
          'mb-2': flavor === 'default',
          'mb-[18px]': flavor === 'read-more',
        })}
      >
        {post.title}
      </h2>
      {flavor === 'default' && (
        <div className="mb-[36px] max-w-[90%] text-next-body-s opacity-50 md:mb-7 md:max-w-[80%]">
          {post.description}
        </div>
      )}
      <Author
        name={post.author_name}
        image={post.author_image}
        date={post.date}
        minutes={post.read_minutes}
        position={flavor === 'read-more' ? post.author_position : null}
      />
    </Link>
  );
}
