import cx from 'clsx';

export default function RoundControl({
  className,
  text,
  compact = 'true',
  ...props
}) {
  const Component = 'button';

  return (
    <Component
      className={cx(
        'pointer-events-none  inline-block justify-center rounded-full border-[1px] border-[#575757] bg-opacity-70 py-[10px] font-inter tracking-[-0.01em] md:py-[13px] xl:py-4 text-[14px] leading-[16.94px] xl:text-[20px] xl:leading-[24.2px] ',
        className
      )}
      {...props}
    >
      {text}
    </Component>
  );
}
