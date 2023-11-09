import Layout from '../../Layout';
import CitadeleImgMobile from './assets/citadele-img.png';
import CitadeleImgXl from './assets/citadel-xl.png';
import BeastImgMobile from './assets/beast-img.png';
import BeastImgXl from './assets/beast-xl.png';
import CryptoImgMobile from './assets/crypto-img.png';
import CryptoImgXl from './assets/crypto-xl.png';
import LendflowImgMobile from './assets/lendflow-img.png';
import LendflowImgXl from './assets/lendflow-xl.png';
import Image, { resolve, Source } from '../../Image';
import { useMediaAtom } from '../../../lib/agent';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from '../../../dist/gsap';
import { atom } from 'jotai';
import { useAtom } from 'jotai';
import cx from 'clsx';
import { useSetAtom } from 'jotai';

const categories = [
  'Product Design',
  'Mobile Design',
  'Web Design',
  'Redesign',
];

const items = [
  {
    title: 'Citadele',
    description: `Latvia's largest digital bank is looking for a new visual identity and we were ready to help.`,
    tags: ['visual identity', 'ui', 'ux'],
    id: 'product design',
    image: CitadeleImgMobile,
    imageXl: CitadeleImgXl,
  },
  {
    title: 'Lendflow',
    description: `A software development company that provides embedded credit infrastructure.`,
    tags: ['product design', 'ui', 'ux'],
    id: 'product design',
    image: LendflowImgMobile,
    imageXl: LendflowImgXl,
  },
  {
    title: 'Beast Tesla Rent',
    description: `Latvia's largest digital bank New vision identity, update UX & UI`,
    tags: ['mobile design', 'product design', 'ui', 'ux'],
    id: 'mobile design',
    image: BeastImgMobile,
    imageXl: BeastImgXl,
  },
  {
    title: 'Cryptogenie',
    description: `CryptoGenie is a yantra that predicts the directional trend of cryptocurrency pairs.`,
    tags: ['visual identity', 'ui', 'ux'],
    id: 'redesign',
    image: CryptoImgMobile,
    imageXl: CryptoImgXl,
  },
];

const currentCategoryAtom = atom(categories[0].toLocaleLowerCase());

function CategoryItem({ category }) {
  const media = useMediaAtom();
  const [currentCategory] = useAtom(currentCategoryAtom);
  const isActive = currentCategory === category.toLocaleLowerCase();

  return (
    <div className="whitespace-nowrap md:flex md:items-center md:whitespace-normal">
      {media !== 'mobile' && (
        <div
          className={cx('mr-3 opacity-0 transition-opacity duration-200', {
            '!opacity-100': isActive,
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M6 4L-3.26266e-07 7.4641L-2.34249e-08 0.535898L6 4Z"
              fill="#E33230"
            />
          </svg>
        </div>
      )}

      {category}
    </div>
  );
}

export default function Showcase() {
  const media = useMediaAtom();
  const triggerRef = useRef();
  const stickyRef = useRef();
  const setActiveCategory = useSetAtom(currentCategoryAtom);

  useEffect(() => {
    if (media === 'mobile') return;
    if (!stickyRef.current) return;
    if (!triggerRef.current) return;

    const st = new ScrollTrigger({
      trigger: triggerRef.current,
      pin: stickyRef.current,
      start: 'top start+=120',
      end: 'bottom center-=90',
    });

    return () => {
      st.kill();
    };
  }, [media]);

  useEffect(() => {
    if (media === 'mobile') return;
    const items = Array.from(document.querySelectorAll('.__item'));
    console.log(items);

    const handleEnter = (self) => {
      const id = self.trigger.dataset.id;
      setActiveCategory(id);
    };

    const triggers = items.map((item) => {
      return new ScrollTrigger({
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        onEnter: handleEnter,
        onEnterBack: handleEnter,
      });
    });

    return () => {
      triggers.map((st) => st.kill());
    };
  }, [setActiveCategory, media]);

  return (
    <Layout className="pb-20">
      <div ref={triggerRef} className="md:flex">
        <div
          ref={stickyRef}
          className="md:w-[284px] md:shrink-0 md:grow-0 xl:w-[365px]"
        >
          <div className="mb-4 text-body-heading-m md:mb-9">What do we do?</div>
          <div className="-mx-4 mb-7">
            <div className="flex space-x-6 overflow-auto px-4 pb-5 text-body-m2 md:grid md:gap-8 md:space-x-0">
              {categories.map((item) => (
                <CategoryItem key={item} category={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="md:grow-1 grid gap-14 md:w-full md:gap-16 xl:gap-[74px]">
          {items.map((item) => (
            <div
              key={item.title}
              className="__item"
              data-id={item.id.toLocaleLowerCase()}
            >
              <div className="mb-2 text-body-heading-m">{item.title}</div>
              <div className="leading[26px] mb-4 text-lg italic">
                {item.description}
              </div>
              <div className="mb-[38px] flex space-x-2 md:mb-[46px] xl:mb-[42px]">
                {item.tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border border-black px-2 py-1 text-body-heading-s uppercase"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl md:rounded-[32px]">
                <picture>
                  <Source
                    image={item.imageXl}
                    media="(min-width: 820px)"
                    width="1280"
                  />
                  <Source image={item.image} width="480" />
                  <img
                    src={resolve({ src: item.imageXl.src, width: 1440 })}
                    alt=""
                    className="w-full"
                  />
                </picture>
                {/* <Image src={item.image} alt="" className="w-full" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
