import cx from 'clsx';
import { Tag } from '../../Tag';

export default function Tags({ tags, className }) {
  return (
    <div
      className={cx(
        'mt-[60px] flex flex-wrap gap-2 border-t border-black pt-10',
        className
      )}
    >
      {tags.map((tag, i) => (
        <Tag key={i}>{tag}</Tag>
        // <div
        // key={i}
        // >

        // </div>
        // <div
        //   key={i}
        //   className="glow-border-black mb-2 mr-2 rounded-full px-3 py-2 text-xs font-medium uppercase"
        // >
        //   {tag}
        // </div>
      ))}
    </div>
  );
}
