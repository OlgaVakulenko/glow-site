import { useAtom, useSetAtom } from 'jotai';
import throttle from 'lodash.throttle';
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { ScrollTrigger } from '../../../dist/gsap';
import { activeAtom, isTransitionAtom, progressAtom } from '../PostPage';
import cx from 'clsx';

export default function Content({ html, paragraphs }) {
  const [isTransitionValue] = useAtom(isTransitionAtom);
  const isTransitionRef = useRef(false);
  isTransitionRef.current = isTransitionValue;
  const setActive = useSetAtom(activeAtom);
  const setProgress = useSetAtom(progressAtom);
  const ref = useRef();

  useEffect(() => {
    const headings = Array.from(ref.current.querySelectorAll('h2'));
    const handleEnter = (self) => {
      if (isTransitionRef.current) return;

      const id = self.trigger.id;
      const idx = paragraphs.findIndex((p) => {
        return p.id === id;
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

  useEffect(() => {
    if (!ref.current) return;

    const sliderContainer = ref.current.querySelector(
      'div > figure + figure + figure'
    )?.parentElement;

    if (!sliderContainer) return;
    sliderContainer.classList.add('swiper');

    const originalHTML = sliderContainer.innerHTML;
    const newHTML = `<div class="swiper-wrapper">${originalHTML}</div>`;
    sliderContainer.innerHTML = newHTML;
    Array.from(sliderContainer.querySelectorAll('figure')).forEach((el) => {
      el.classList.add('swiper-slide');
      const img = el.querySelector('img');
      if (!img) return;
      img.style.marginLeft = 'auto';
      img.style.marginRight = 'auto';
    });

    const swiper = new Swiper(sliderContainer, {
      slidesPerView: 1.75,
      loop: true,
      centeredSlides: true,
    });

    return () => {
      swiper.destroy();
      if (sliderContainer) {
        sliderContainer.innerHTML = originalHTML;
      }
    };
  }, []);

  return (
    <article
      ref={ref}
      className={cx(
        'prose prose-headings:mb-4 prose-headings:mt-[60px] prose-headings:text-body-m prose-headings:font-medium',
        'prose-p:text-next-body-s prose-a:font-normal prose-a:text-brand prose-a:no-underline prose-figure:-mx-4 prose-strong:font-medium',
        'prose-li:text-next-body-s md:prose-p:text-body-m md:prose-figure:mx-0 md:prose-li:text-body-m'
      )}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </article>
  );
}
