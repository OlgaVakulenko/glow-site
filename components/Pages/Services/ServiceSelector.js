import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Layout from '../../Layout';
import { services } from './data';
import cx from 'clsx';
import { useMediaAtom } from '../../../lib/agent';
import { addLeadingZero } from '../../../lib/utils';
import { Tag } from '../Home/TrialBanner';
import { atom, useAtom, useSetAtom } from 'jotai';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

const serviceCardAtom = atom(0);
const categoryAtom = atom(0);

export default function ServicesSelector() {
  const params = useSearchParams();
  const media = useMediaAtom();
  const [selected, setSelected] = useAtom(categoryAtom);
  const setCardAtom = useSetAtom(serviceCardAtom);
  const scroller = useRef();

  useLayoutEffect(() => {
    const s = params.get('s');
    const k = ['mvp', 'redesign', 'longterm'];
    const index = k.indexOf(s);
    if (index > -1) {
      setSelected(index);
    }
  }, [params, setSelected]);

  useEffect(() => {
    if (media !== 'mobile') return;
    if (!scroller.current) return;
    const offset = 16;
    const btn = scroller.current.querySelector(`[data-id="${selected}"]`);
    const width = scroller.current.offsetWidth;
    const btnWidth = btn.offsetWidth;
    const left = btn.offsetLeft - width / 2 + btnWidth / 2;
    const offsetLeft = Math.max(left, -offset);

    if ('scrollTo' in scroller.current) {
      scroller.current.scrollTo({
        left: Math.max(left, -offset),
        behavior: 'smooth',
      });
    } else {
      scroller.current.scrollLeft = offsetLeft;
    }
  }, [media, selected]);

  return (
    <Layout disableOnMobile className="md:pt-6 xl:pt-[88px]">
      <div
        className="bg-[#F4F3F5] pt-[52px] md:rounded-[32px] md:bg-inherit md:pt-0"
        style={{
          boxShadow: 'inset 0 0 1.5px #d7d7d7',
        }}
      >
        <Layout className="pb-10 md:hidden">
          <h3 className="mb-4 text-next-heading-4">Making it Glow</h3>
          <h4 className="text-next-body-l">
            We put Human Centered Design in the core of our work to provide
            solutions that satisfy both business and users.
          </h4>
        </Layout>
        <div
          ref={scroller}
          className="flex gap-1 overflow-x-auto px-4 pb-3 pt-3 md:grid md:grid-cols-3 md:gap-6 md:overflow-hidden md:p-0 xl:gap-8"
        >
          {services.map((service, idx) => (
            <button
              data-id={idx}
              key={service.name}
              className={cx(
                'relative flex shrink-0 items-center gap-4 px-8 py-4 text-left transition-all duration-200 md:col-span-1 md:w-full md:w-full md:shrink md:gap-6 md:rounded-b-none md:shadow-none',
                {
                  'md:pt-3 xl:pb-3 xl:pt-5': idx === 0,
                  'md:pt-2': idx !== 0,
                  'xl:pb-[18px] xl:pt-[18px]': idx === 1,
                  'xl:py-4': idx === 2,
                  'rounded-2xl bg-white shadow-service md:rounded-[32px] md:bg-[#F4F3F5]':
                    selected === idx,
                }
              )}
              onClick={() => {
                setSelected(idx);
                setCardAtom(0);
              }}
            >
              <div className="h-12 w-12 md:h-20 md:w-20">
                {service.ill?.(media)}
              </div>
              <div>
                <div className="mb-1 text-next-heading-7 md:mb-2 md:text-next-heading-6">
                  {service.name}
                </div>
                <div className="text-next-body-xs opacity-50 md:text-next-body-m">
                  {service.stages.length} stages
                </div>
              </div>
              <svg
                className={cx(
                  'absolute -left-[25px] bottom-[-1px] h-[22px] w-[26px] transition-all duration-200',
                  {
                    '!opacity-0': idx === 0,
                    'opacity-0': selected !== idx,
                  }
                )}
                viewBox="0 0 27 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.45459 22.1438H26.4494V0.822647C26.4564 0.539598 26.4562 0.265041 26.4494 0V0.822647C26.2628 8.42238 20.9405 22.1438 0.45459 22.1438Z"
                  fill="#F4F3F5"
                />
              </svg>

              <svg
                className={cx(
                  'absolute -right-[25px] bottom-[-1px] h-[22px] w-[26px] transition-all duration-200',
                  {
                    'opacity-0': selected !== idx,
                  }
                )}
                viewBox="0 0 230 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M230 195.5H0.500047V7.26288C0.438677 4.76393 0.440202 2.33996 0.500047 0V7.26288C2.14781 74.3584 49.1362 195.5 230 195.5Z"
                  fill="#F4F3F5"
                />
              </svg>
            </button>
          ))}
        </div>
        <div
          className={cx(
            'grid gap-2 px-4 pb-[52px] transition-all duration-200 md:rounded-[32px] md:bg-[#F4F3F5] md:p-4',
            {
              'md:rounded-tl-none': selected === 0,
              'md:rounded-tr-none': selected === services.length - 1,
            }
          )}
        >
          {services[selected].stages.map((stage, i) => (
            <ServiceCard
              index={i}
              title={stage.name}
              description={stage.description}
              tags={stage.tags}
              key={`${selected}-${i}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function ServiceCard({ index, title, description, tags }) {
  const [currentCategory, setCurrentCategory] = useAtom(categoryAtom);
  const [current, setCurrent] = useAtom(serviceCardAtom);
  const [height, setHeight] = useState(null);
  const contentRef = useRef();
  const collapsed = current !== index;

  useLayoutEffect(() => {
    const ref = contentRef.current;
    if (!ref) return;

    let h = 0;
    if (!collapsed) {
      h = ref.scrollHeight + 5;
    } else {
      h = 0;
    }

    setHeight(h);
  }, [currentCategory, collapsed]);

  return (
    <button
      className="rounded-2xl bg-white p-6 text-left shadow-service md:p-8"
      onClick={() => {
        setCurrent(index);
      }}
    >
      <div className="relative flex w-full items-center gap-5 text-next-heading-7">
        <div className="opacity-50 md:absolute md:left-0">
          {addLeadingZero(index + 1)}{' '}
          <span className="hidden md:inline">Stage</span>
        </div>
        <div className="md:ml-[171px]">{title}</div>
        <div className="ml-auto opacity-50">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.5415 9.375L16.4582 9.375L16.4582 10.625L3.5415 10.625L3.5415 9.375Z"
              fill="#19191B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.625 3.54175L10.625 16.4584H9.375L9.375 3.54175H10.625Z"
              fill="#19191B"
              className={cx('transition-opacity duration-200', {
                'opacity-0': !collapsed,
              })}
            />
          </svg>
        </div>
      </div>
      <div
        ref={contentRef}
        className={cx(
          'overflow-hidden transition-all duration-300 md:ml-[171px]'
        )}
        style={{
          maxHeight: height,
        }}
      >
        <div className="mb-10 pt-6 text-next-body-s md:mb-8 md:text-next-body-m xl:pt-8">
          {description}
        </div>
        <div className="flex flex-wrap gap-2 xl:max-w-[80%]">
          {tags.map((tag) => (
            <div
              key={tag}
              className="rounded-full border border-black-dim-border bg-black-dim px-[11px] py-[1px] text-[12px] font-medium uppercase leading-[24px] tracking-[0.02em]"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}
