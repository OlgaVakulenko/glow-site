import { useSetAtom } from 'jotai';
import throttle from 'lodash.throttle';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from '../../../dist/gsap';
import { activeAtom, progressAtom } from '../PostPage';

export default function Content({ html, paragraphs }) {
  const setActive = useSetAtom(activeAtom);
  const setProgress = useSetAtom(progressAtom);
  const ref = useRef();

  useEffect(() => {
    const headings = Array.from(ref.current.querySelectorAll('h2'));
    const handleEnter = (self) => {
      const text = self.trigger.innerText;
      const idx = paragraphs.findIndex((p) => {
        return text.includes(p);
      });
      if (idx !== -1) {
        setActive(idx);
      }
    };

    const triggers = headings.map((h) => {
      return new ScrollTrigger({
        trigger: h,
        start: 'center center',
        end: 'center top',
        onEnter: handleEnter,
        onEnterBack: handleEnter,
      });
    });

    return () => {
      triggers.map((st) => st.kill());
    };
  }, [html, paragraphs, setActive]);

  useEffect(() => {
    const handleUpdate = throttle((self) => {
      const p = Math.round(self.progress * 100);
      setProgress(p);
    }, 100);

    const st = new ScrollTrigger({
      trigger: ref.current,
      // markers: true,
      start: 'top center',
      end: 'bottom center',
      onUpdate: handleUpdate,
    });

    return () => {
      st.kill();
    };
  }, [setProgress]);

  return (
    <article
      ref={ref}
      className="prose prose-headings:mt-[60px] prose-headings:mb-4 prose-headings:text-body-m prose-headings:font-medium prose-p:text-body-s prose-a:font-normal prose-a:text-brand prose-a:no-underline prose-figure:-mx-4 prose-strong:font-medium prose-li:text-body-s md:prose-p:text-body-m md:prose-figure:mx-0 md:prose-li:text-body-m"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </article>
  );
}
