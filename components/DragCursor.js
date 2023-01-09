import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

function DragCursor({ x, y }) {
  return (
    <div
      className="position pointer-events-none absolute top-0 left-0 z-10 flex h-[140px] w-[140px] items-center justify-between rounded-full bg-brand p-4 text-[14px] font-medium uppercase leading-[19px] tracking-[0.03em]"
      style={{
        transform: `translate(${x - 70}px, ${y - 140}px)`,
      }}
    >
      <svg
        width="11"
        height="18"
        viewBox="0 0 11 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 17L2 9L10 1" stroke="black" strokeWidth="2" />
      </svg>
      DRAG
      <svg
        width="11"
        height="18"
        viewBox="0 0 11 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L9 9L1 17" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function DragCursorContainer({ children }) {
  const ref = useRef();
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const setRect = debounce(() => {
      const rect = node.getBoundingClientRect();
      setOffsetTop(rect.y);
    }, 250);

    setRect();
    window.addEventListener('scroll', setRect);

    return () => {
      window.removeEventListener('scroll', setRect);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative cursor-none"
      onMouseEnter={(e) => {
        if (!e.currentTarget) return;
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      onMouseMove={(e) => {
        const x = e.clientX;
        const y = e.nativeEvent.screenY - offsetTop;
        setPos({ x, y });
      }}
    >
      {show && <DragCursor x={pos.x} y={pos.y} />}
      {children}
    </div>
  );
}
