import Link from 'next/link';

function Author({ name, image, date, minutes }) {
  return (
    <div className="flex md:mt-auto">
      <div className="mr-[18px]">
        <img
          src={image}
          alt=""
          className="mt-[2px] max-h-[40px] w-full max-w-[40px] rounded-full object-cover"
        />
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
    <Link href={`/blog/${post.href}`} className="block md:flex md:flex-col">
      <img
        src={post.image}
        alt=""
        className="mb-6 min-h-[190px] w-full rounded-3xl object-cover md:h-full md:max-h-[223px]"
      />
      <div className="mb-3 text-body-heading-m md:mb-2">{post.title}</div>
      <div className="mb-6 text-body-s opacity-50 md:mb-7">
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
