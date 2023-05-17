import cx from 'clsx';

export default function Tags({ tags, className }) {
  return (
    <div
      className={cx(
        'mt-10 flex flex-wrap border-t border-black pt-10',
        className
      )}
    >
      {tags.map((tag, i) => (
        <div
          key={i}
          className="glow-border-black mr-2 mb-2 rounded-full px-3 py-2 text-xs font-medium uppercase"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
