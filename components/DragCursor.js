import cx from 'clsx';
import { useAtom } from 'jotai';
import { atom } from 'jotai';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useMounted } from './Icons/animations';

function DragCursor({ x, y, clicked }) {
  return (
    <div
      className={cx(
        'position pointer-events-none fixed left-0 top-0 z-10 flex h-[140px] w-[140px] items-center justify-between rounded-full bg-brand p-4 text-[14px] font-medium uppercase leading-[19px] tracking-[0.03em] transition-colors duration-500',
        {
          '!bg-white': clicked,
        }
      )}
      style={{
        transform: `translate(${x - 70}px, ${y - 70}px)`,
      }}
    >
      <svg
        width="11"
        height="18"
        viewBox="0 0 11 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300"
        style={{
          transform: clicked ? 'translate(46px, -46px) rotate(90deg)' : null,
        }}
      >
        <path d="M10 17L2 9L10 1" stroke="black" strokeWidth="2" />
      </svg>
      {clicked ? 'VIEW' : 'DRAG'}
      <svg
        width="11"
        height="18"
        viewBox="0 0 11 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cx('transition-all duration-300', {
          'opacity-0': clicked,
        })}
        style={{
          transform: clicked ? 'translate(-46px, -46px) rotate(-90deg)' : null,
        }}
      >
        <path d="M1 1L9 9L1 17" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
}

export const cursorGlobalDisableAtom = atom(false);

export default function DragCursorContainer({
  showDefaultCursor = false,
  clickable = false,
  children,
}) {
  const [globalDisable] = useAtom(cursorGlobalDisableAtom);
  const ref = useRef();
  const [_show, setShow] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const show = !globalDisable && _show && pos.x !== 0 && pos.y !== 0;

  const child = useMemo(() => {
    return typeof children === 'function' ? children : () => children;
  }, [children]);

  useEffect(() => {
    if (!show) {
      setIsClicked(false);
      return;
    }

    setIsClicked(false);
    let id = setTimeout(() => {
      setIsClicked(true);
    }, 700);

    return () => {
      clearTimeout(id);
    };
  }, [pos, show]);

  return (
    <div
      ref={ref}
      className={cx('relative', {
        'cursor-none': !showDefaultCursor,
      })}
      onMouseEnter={(e) => {
        if (!e.currentTarget) return;
        setShow(true);
        setPos({ x: e.clientX, y: e.clientY });
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      onMouseMove={(e) => {
        const x = e.clientX;
        const y = e.clientY;

        setPos({ x, y });
      }}
    >
      {child({ show: show })}
      {show &&
        createPortal(
          <DragCursor clicked={isClicked} x={pos.x} y={pos.y} />,
          document.body
        )}
    </div>
  );
}
