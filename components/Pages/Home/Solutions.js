import Image from '../../Image';
import Layout from '../../Layout';
import RusM from '../About/assets/rus-2.png';
import cx from 'clsx';

const items = [
  {
    tag: 'Design',
    title: 'Designers seem to miss the idea',
    author_description: 'My name is Rus and I will help you with this problem',
    description:
      'We have 40+ UI/UX designers with SaaS design expertise on the team, so we can jump into the project whenever you need us. Plus, we provide a 3-day FREE trial to let you see us in action before signing the contract.',
  },
  {
    tag: 'Managment',
    title: 'Time is running shot',
    author_description: 'My name is Rus and I will help you with this problem',
    description:
      'We have 40+ UI/UX designers with SaaS design expertise on the team, so we can jump into the project whenever you need us. Plus, we provide a 3-day FREE trial to let you see us in action before signing the contract.',
  },
  {
    tag: 'design process',
    title: 'Tasks are overwhelming',
    author_description: 'My name is Rus and I will help you with this problem',
    description:
      'We have 40+ UI/UX designers with SaaS design expertise on the team, so we can jump into the project whenever you need us. Plus, we provide a 3-day FREE trial to let you see us in action before signing the contract.',
  },
];

function Card({ className, tag, title, author_description, description }) {
  return (
    <div className={cx(className)}>
      <div className="rounded-[32px] bg-[#F4F3F5] px-4 pb-4 pt-8 md:px-6 md:pb-6 md:pt-[39px]">
        <div>
          <span className="rounded-full bg-brand px-2 py-1 text-body-heading-s uppercase text-lred">
            {tag}
          </span>
        </div>
        <div className="mb-4 mt-6 font-glow text-[29px] font-medium leading-[37px] md:mb-[27px] md:mt-[34px] xl:text-heading-h3">
          {title}
        </div>
        <div className="rounded-2xl bg-white p-4 pb-6 md:pb-8 xl:p-8 xl:pb-[37px]">
          <div className="mb-6 flex xl:mb-[27px]">
            <div className="mr-4 shrink-0">
              <Image
                className="h-14 w-14 rounded-lg object-cover md:h-16 md:w-16"
                src={RusM}
                alt=""
              />
            </div>

            <div className="text-[17px] italic leading-[27px] opacity-50 md:text-subtitle-s xl:max-w-[352px]">
              {author_description}
            </div>
          </div>
          <div className="text-body-m2">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <Layout className="pb-8 pt-20 xl:pt-[120px]">
      <div className="mb-10 md:mb-16 md:grid md:grid-cols-8 md:gap-8 xl:mb-[72px] xl:grid-cols-12">
        <div className=" mb-[21px] font-glow text-[40px] font-medium leading-[41px] tracking-[-2px] md:col-span-4 md:text-[46px] md:leading-[49px] xl:col-span-7 xl:max-w-[560px] xl:text-heading-h2-2">
          We can light
          <br className="hidden md:block" /> your&nbsp;way
        </div>
        <div className="text-subtitle-m italic md:col-span-4 md:pr-8 xl:col-span-5 xl:text-subtitle-l">
          Like a rescue squad for your product, we are ready to swoop in
          whenever you summon us. Let&apos;s take a look at what we can solve.
        </div>
      </div>
      <div className="grid justify-center gap-4 md:-ml-4 md:flex md:flex-wrap md:gap-0">
        {items.map((item, index) => (
          <Card
            className={cx('md:mb-4 md:w-1/2 md:pl-4', {
              'md:w-1/2': index !== items.length - 1,
              'pr-4 md:w-1/2': index === items.length - 1,
            })}
            key={index}
            tag={item.tag}
            title={item.title}
            author_description={item.author_description}
            description={item.description}
          />
        ))}
      </div>
    </Layout>
  );
}
