import Animated from './Animated';
import Star from './Star';
import cx from 'clsx';

export default function PageSubheading({ children, className }) {
  return (
    <Animated
      className={cx(
        'relative ml-auto min-w-[232px] max-w-[252px] text-lg italic !leading-[133%] md:min-w-[308px] md:max-w-[328px] md:text-subtitle-l xl:mr-[200px]',
        className
      )}
      delay={200}
      immediate
    >
      <div className="absolute left-0 top-[-32px]">
        <Star />
      </div>
      {children}
    </Animated>
  );
}
