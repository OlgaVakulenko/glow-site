import Link from 'next/link';
import { AuthorImage } from './Post/Author';

function Author({ name, image, date, minutes }) {
  return (
    <div className="flex md:mt-auto">
      <div className="mr-[18px]">
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
        <div className="text-base leading-7">{name}</div>
        <div className="mt-[-5px] text-sm leading-[27px] opacity-50">
          {date} | {minutes}
        </div>
      </div>
    </div>
  );
}

export default function Card({ post }) {
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
      <div className="mb-3 text-body-heading-m md:mb-2 md:max-w-[80%]">
        {post.title}
      </div>
      <div className="mb-6 max-w-[90%] text-body-s opacity-50 md:mb-7 md:max-w-[80%]">
        {post.description}
      </div>
      <Author
        name={post.author_name}
        image={post.author_image}
        date={post.date}
        minutes={post.read_minutes}
      />
    </Link>
  );
}
