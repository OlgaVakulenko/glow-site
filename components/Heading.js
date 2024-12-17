import cx from 'clsx';
import Animated from './Animated';

export default function Heading({ title, trial, description, isColumn, classNames, titleClassNames, descriptionClassNames, animate = false }) {
  const ContainerTag = animate ? Animated : 'div';
  const TitleTag = animate ? Animated : 'h2';

  return (
    <div className={cx('md:flex md:justify-between', { 'flex-col xl:gap-y-20 md:gap-y-10': isColumn, 'md:gap-8': !isColumn, 'md:gap-y-12': trial }, classNames)}>
      <TitleTag
        delay={animate ? 50 : undefined}
        as={animate ? 'h2' : undefined}
        className={cx(' shrink-0 text-next-heading-5 md:mb-0 xl:text-next-heading-2', {"md:text-next-heading-2 mb-0" :trial, "md:text-next-heading-3 mb-4": !trial}, titleClassNames)}
      >
        {title}
      </TitleTag>
      <ContainerTag
        delay={animate ? 150 : undefined}
        className={cx('text-next-body-l md:pt-2 md:text-next-body-xxl xl:pt-0 xl:text-next-body-xxl', {"md:text-[16px]": trial, 'md:max-w-[528px]': !isColumn, 'flex flex-col md:flex-row md:justify-between': isColumn }, descriptionClassNames)}
      >
        {description}
      </ContainerTag>
    </div>
  );
}
