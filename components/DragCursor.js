import cx from 'clsx';
import { atom, useAtom } from 'jotai';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useMediaAtom } from '../lib/agent';
import { useLayoutSsrEffect } from '../lib/utils';

function DragCursor({ x, y, clicked }) {
  return (
    <div
      className={cx(
        'pointer-events-none fixed left-0 top-0 z-10 flex h-[140px] w-[140px] items-center justify-between rounded-full bg-brand p-4 text-[14px] font-medium uppercase leading-[19px] tracking-[0.03em] transition-colors duration-500',
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
  cursor,
  adhoc = false,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const media = useMediaAtom();
  const [globalDisable, setGlobalDisable] = useAtom(cursorGlobalDisableAtom);
  const ref = useRef();
  const [_show, setShow] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const cursorComponentPrevRef = useRef();

  const show = !globalDisable && _show && pos.x !== 0 && pos.y !== 0;

  const child = useMemo(() => {
    return typeof children === 'function' ? children : () => children;
  }, [children]);

  useEffect(() => {
    if (!clickable) {
      return;
    }

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
  }, [pos, show, clickable]);

  useEffect(() => {
    try {
      if (window?.matchMedia('(any-hover: none)')?.matches) {
        setGlobalDisable(true);
      } else {
        setGlobalDisable(false);
      }
    } catch (e) {
      console.error(e);
    }
  }, [setGlobalDisable, media]);

  const CursorComponent = useMemo(() => {
    if (isDragging) {
      return cursorComponentPrevRef.current;
    }

    if (cursor && typeof window !== 'undefined') {
      if (isLast || pos.x < Math.min(1484, window.innerWidth * 0.9)) {
        return cursor;
      }
    }

    return DragCursor;
  }, [cursor, pos, isDragging, isLast]);

  useLayoutSsrEffect(() => {
    cursorComponentPrevRef.current = CursorComponent;
  }, [CursorComponent]);

  const handleTouchStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onActiveIndexChange = useCallback((swiper) => {
    setIsLast(swiper.progress > 0.9);
  }, []);

  const options = useMemo(() => {
    return {
      show: show && (adhoc ? CursorComponent === DragCursor : true),
      swiperOptions: {
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onActiveIndexChange,
      },
    };
  }, [
    show,
    adhoc,
    CursorComponent,
    handleTouchStart,
    handleTouchEnd,
    onActiveIndexChange,
  ]);

  const rendered = useMemo(() => {
    return child(options);
  }, [child, options]);

  return (
    <div
      ref={ref}
      className={cx('relative', {
        'cursor-none': !showDefaultCursor,
      })}
      onPointerEnter={(e) => {
        if (!e.currentTarget) return;

        setShow(true);
        setPos({ x: e.clientX, y: e.clientY });
      }}
      onPointerLeave={() => {
        setShow(false);
      }}
      onPointerMove={(e) => {
        if (isLast && e.clientX > window.innerWidth * 0.9) {
          setShow(false);
        } else {
          setShow(true);
        }

        const x = e.clientX;
        const y = e.clientY;

        setPos({ x, y });
      }}
    >
      {rendered}
      {show &&
        createPortal(
          <CursorComponent clicked={isClicked} x={pos.x} y={pos.y} />,
          document.body
        )}
    </div>
  );
}
