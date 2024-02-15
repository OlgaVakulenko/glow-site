import { SectionLayout } from '.';
import Image from '../../../Image';
import PortalImg from './assets/portal-img.png';
import VenueManagerImg from './assets/venue-manager.png';
import MarketingAssetsImg from './assets/marketing-assets.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cx from 'clsx';
import DragCursorContainer from '../../../DragCursor';

const items = [
  {
    title: 'Portal',
    description:
      'One of two main components of the product, which allows you to search for workspaces and book them, for yourself or a large company.',
    image: PortalImg,
  },
  {
    title: 'Venue Manager',
    description:
      'That’s the core part without which there would be no workspaces to rent. This is a profile for the person who puts their office or coworking up for rent with all necessary settings.',
    image: VenueManagerImg,
  },
  {
    title: 'Marketing Assets',
    description:
      'In addition to all major directions we did not forget about the marketing component, which includes collaboration with other companies, advertising and so on.',
    image: MarketingAssetsImg,
  },
];

export default function WorkCarousel() {
  return (
    <div className="pb-16 xl:mb-[150px]">
      <SectionLayout
        childrenLayout={false}
        title={
          <>
            All work on the project was
            <br className="hidden xl:block" /> divided into several parts:
          </>
        }
      >
        <div className="md:mt-20">
          <DragCursorContainer>
            <Swiper
              slidesPerView={'auto'}
              // touchStartPreventDefault={false}
              resistanceRatio={0}
            >
              {items.map((v, i) => (
                <SwiperSlide
                  key={i}
                  className={cx(
                    '!h-auto max-w-[288px] md:max-w-[568px] xl:max-w-[60vw]',
                    {
                      'md:max-w-[604px] xl:max-w-[calc(60vw+28px)]':
                        i === 0 || i === items.length - 1,
                    }
                  )}
                >
                  <Item {...v} index={i} total={items.length} />
                </SwiperSlide>
              ))}
            </Swiper>
          </DragCursorContainer>
        </div>
      </SectionLayout>
    </div>
  );
}

function Item({ title, description, image, index, total }) {
  return (
    <div
      className={cx(
        'relative flex h-full flex-col justify-between px-3 md:px-3 xl:px-7',
        {
          '!pl-4 md:!pl-[48px] xl:!pl-[64px]': index === 0,
          '!pr-4 md:!pr-[48px] xl:pr-[64px]': index === total - 1,
        }
      )}
    >
      <div>
        <div className="mb-6">
          <div className="absolute left-0 top-[11px] h-[2px] w-full bg-[#DFDFE3]"></div>
          <div className="relative z-10 h-[24px] w-[24px] rounded-full bg-black"></div>
        </div>
        <div className="mb-2 font-glow text-2xl font-medium leading-[40px]">
          {title}
        </div>
        <div className="mb-6 text-base italic leading-[24px] md:mb-14 md:max-w-[300px] xl:mb-20 xl:max-w-[360px]">
          {description}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <Image src={image} alt="" />
      </div>
    </div>
  );
}
