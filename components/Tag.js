import cx from 'clsx';

export function Tag({ className, children }) {
  return (
    <div
      className="rounded-full bg-black-dim px-3 py-[2px] text-next-tag font-medium uppercase"
      style={{
        boxShadow: 'inset 0 0 0px 1px rgba(25, 25, 27, 0.15)',
      }}
    >
      {children}
    </div>
  );
}
