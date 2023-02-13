import { SectionLayout } from '.';
import NoiseImg from './assets/noise.png';
import cx from 'clsx';
import Image from '../../../Image';

const colors = [
  {
    name: 'Deep Sea',
    code: '#00293A',
    light: true,
    className:
      'md:order-1 md:col-span-2 md:row-span-1 xl:order-3 xl:col-span-1 xl:row-span-3',
  },
  {
    name: 'Ocean Blue',
    code: '#00609C',
    light: true,
    className: 'md:order-3 md:col-span-1 xl:order-2',
  },
  {
    name: 'Arctic Blue 20%',
    code: '#A1DED2',
    realCode: '#ECF8F6',
    className: 'md:order-5 md:col-span-1 md:row-span-2 xl:order-5',
  },
  {
    name: 'Secondary / Label',
    code: '#ADB5C7',
    light: true,
    className: 'md:order-4 md:col-span-1 xl:order-4',
  },
  {
    name: 'Base',
    code: '#F7F8F9',
    className: 'md:order-2 md:col-span-1 xl:order-1',
  },
  {
    name: 'Outline',
    code: '#EBEEF2',
    className: 'md:order-6 md:col-span-1 xl:order-6',
  },
];

export default function SectionColors() {
  return (
    <div className="pt-16 pb-16 md:pb-[100px] xl:pt-[150px] xl:pb-[150px]">
      <SectionLayout
        title="Colors"
        description="When we were looking at the color palette for the future service, we took combinations of shades of blue (reliability and trust) and white (simplicity and perfection)."
        xlMarginBottomClass="xl:mb-20"
      >
        <div className="md:grid md:grid-cols-2 md:grid-rows-4 xl:grid-cols-3 xl:grid-rows-3">
          {colors.map((c, i) => (
            <Color
              key={i}
              {...c}
              className={cx(c.className, 'mt-[-82px] first:mt-0 md:mt-0')}
            />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}

function Color({ className, name, realCode, code, light = false }) {
  return (
    <div
      className={cx(
        'relative rounded-2xl p-8 pb-[100px] md:rounded-3xl',
        className
      )}
      style={{
        backgroundColor: realCode || code,
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <Image src={NoiseImg} alt="" className="h-full w-full object-cover" />
      </div>
      <div
        className={cx('mb-2 text-2xl leading-6', {
          'text-white': light,
        })}
      >
        {name}
      </div>
      <div
        className={cx('text-base leading-6 opacity-80', {
          'text-white': light,
        })}
      >
        {code}
      </div>
    </div>
  );
}
