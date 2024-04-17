import { addLeadingZero } from '../../../lib/utils';
import Image, { Source, resolve } from '../../Image';
import { Col } from './CasesSlider';
import cx from 'clsx';

function Col2({ title, items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="text-body-heading-s font-medium uppercase">{title}:</div>
      <div className="text-body-xs">{items.join(', ')}</div>
    </div>
  );
}

export default function CaseCard({ type, item, index, total }) {
  return (
    <div className={cx('__slide-wrapper h-full w-full')}>
      <div className="__slide relative flex flex-col overflow-hidden text-black md:min-h-[530px] md:flex-col md:rounded-[32px]">
        {item.imageMobile ? (
          <picture>
            <Source
              image={(type === 'work' && item.imageWork) || item.image}
              media="(min-width: 820px)"
              width="1280"
            />
            <Source image={item.imageMobile} width="480" />
            <img
              className="h-full min-h-[304px] w-full rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105 md:pointer-events-none md:absolute md:left-0 md:top-0 md:max-h-full md:origin-[90%_10%] md:rounded-none"
              src={resolve({ src: item.image.src, width: 1440 })}
              alt=""
            />
          </picture>
        ) : (
          <Image
            className="h-full min-h-[304px] w-full rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105 md:pointer-events-none md:absolute md:left-0 md:top-0 md:max-h-full md:origin-[90%_10%] md:rounded-none"
            src={(type === 'work' && item.imageWork) || item.image}
            alt=""
          />
        )}

        <div className="__slider-item2 pointer-events-none absolute inset-0 hidden md:block"></div>
        <div
          // className="relative px-6 pt-[193px] pb-12 md:px-[45px] md:pb-[57px] md:pt-[250px]"
          className={cx(
            'relative pb-3',
            // 'md:mt-0 md:px-[96px] md:pb-16 md:pt-[282px] xl:px-12',
            'md:flex md:h-full md:grow md:flex-col md:justify-between md:px-16 md:py-[72px]'
          )}
        >
          <div className="relative hidden font-glow text-[11px] font-medium uppercase tracking-[2px] md:block md:text-xs md:leading-4">
            <div className="absolute left-[79px] top-[-18px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
              >
                <path
                  d="M8.12343 16L6.46096 10.3846L1.8136 13.9231L-2.01745e-07 11.3846L4.68514 8L-4.97637e-07 4.61539L1.8136 2.03846L6.46096 5.57692L8.12342 5.98588e-07L11.0705 0.961539L9.21914 6.5L15 6.42308L15 9.57692L9.25693 9.5L11.0705 15.0385L8.12343 16Z"
                  fill="#E33230"
                />
              </svg>
            </div>
            {addLeadingZero(index + 1)}
            {total && (
              <>
                &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                {addLeadingZero(total)}
              </>
            )}
          </div>
          <div className="mb-2 mt-6 font-glow text-next-heading-6 md:mb-9 md:mt-6 md:text-[32px] md:leading-10">
            <div className="flex items-center justify-between">
              <span>{item.title2 || item.title}</span>
              <svg
                className="md:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.96693 21.2829L17.568 11.6818L17.5532 18.7974L19.5529 18.8016L19.5748 8.25936L9.03325 8.28199L9.03749 10.2817L16.1552 10.2661L6.55272 19.8686L7.96693 21.2829Z"
                  fill="#19191B"
                />
              </svg>
            </div>
          </div>
          <div className="hidden md:mb-8 md:mt-auto md:block">
            {/** temp static data */}
            <div className="font-medium uppercase md:mb-3 md:text-body-heading-s">
              should be some kind of title here
            </div>
            <div className="md:max-w-[332px] md:text-next-body-s xl:text-next-body-m">
              {item.description}
            </div>
          </div>
          <div className="hidden text-text-dim md:grid md:gap-4">
            <Col2 title="Industry" items={item.industry} />
            <Col2 title="Services" items={item.service} />
            <Col2 title="Company" items={item.company} />
          </div>
          <div className="text-next-body-xs text-text-dim md:hidden">
            {item.description}
          </div>
          <div className="hidden space-x-[40px] pl-[3px] md:hidden md:space-x-[62px]">
            <Col className="" title="Industry" items={item.industry} />
            <Col
              className="min-w-[100px]"
              title="Services"
              items={item.service}
            />
            {item.company && <Col title="Company" items={item.company} />}
          </div>
        </div>
      </div>
    </div>
  );
}
