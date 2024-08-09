import cx from 'clsx';
import Animated from './Animated';

export default function Heading({ title, description, isColumn, classNames, titleClassNames, descriptionClassNames, animate = false }) {
  const ContainerTag = animate ? Animated : 'div';
  const TitleTag = animate ? Animated : 'h2';

  return (
    <div className={cx('md:flex md:justify-between', { 'flex-col xl:gap-y-20 md:gap-y-10': isColumn, 'md:gap-8': !isColumn }, classNames)}>
      <TitleTag
        delay={animate ? 100 : undefined}
        as={animate ? 'h2' : undefined}
        className={cx('mb-4 shrink-0 text-next-heading-5 md:mb-0 md:text-next-heading-3 xl:text-next-heading-2', titleClassNames)}
      >
        {title}
      </TitleTag>
      <ContainerTag
        delay={animate ? 200 : undefined}
        className={cx('text-next-body-l md:pt-2 md:text-next-body-xxl xl:pt-0 xl:text-next-body-xxl', { 'md:max-w-[528px]': !isColumn, 'flex flex-col md:flex-row md:justify-between': isColumn }, descriptionClassNames)}
      >
        {description}
      </ContainerTag>
    </div>
  );
}
