import cx from 'clsx';

export default function GraphicBlock({ items, className, blockClassNames, descriptionClassNames, titleClassNames }) {
  return (
    <div className={cx('grid gap-14 md:grid-cols-2 md:gap-x-12 xl:grid-cols-3 xl:gap-y-20', className)}>
      {items.map((item, idx) => (
        <div key={idx} className={blockClassNames}>
          <div className="mb-[38px] h-20 w-20 md:mb-[40px]">{item.icon}</div>
          <div className={cx('mb-[14px] text-next-heading-6 md:mb-4 md:leading-[28px] md:tracking-[0.02em] xl:text-next-heading-6', titleClassNames)}>
            {item.title}
          </div>
          <div className={cx('text-next-body-m md:leading-[26px] md:tracking-normal xl:text-next-body-m', descriptionClassNames)}>
            {item.description}
          </div>
        </div>
        ))}
    </div>
  );
}