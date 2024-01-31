import cx from 'clsx';

export default function Section({
  className,
  section,
  title,
  paragraphs = [],
  flavor = 'pp',
}) {
  return (
    <div
      className={cx('border-b border-[#d1d1d1] pb-[60px] last:border-none', {
        'first:border-none first:pb-0': flavor === 'pp',
      })}
    >
      {section && (
        <div className="mb-4 font-sans text-body-heading-m2 opacity-50">
          {section}
        </div>
      )}
      <h3
        className={cx(
          'mb-4 font-glow text-2xl font-medium leading-8 tracking-[0.48px] md:mb-[60px] md:text-heading-h3',
          {
            'md:max-w-[640px]': true,
          }
        )}
      >
        {title}
      </h3>
      <div
        className={cx(
          'max-w-[975px] space-y-[30px] text-lg leading-[26px]',
          className
        )}
      >
        {paragraphs.map((text, i) =>
          typeof text === 'string' ? <p key={i}>{text}</p> : text
        )}
      </div>
    </div>
  );
}
