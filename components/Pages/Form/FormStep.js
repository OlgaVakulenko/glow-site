import FormInput from './FormInput';
import cx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import TypingAnimation from './TypingAnimation';
import gsap from '../../../dist/gsap';
import Typewriter from 'typewriter-effect';
import { useMountedRef } from '../../../lib/utils';
import { useMediaAtom } from '../../../lib/agent';

export default function FormStep({
  text,
  index = 0,
  currentIndex = 0,
  value,
  onChange,
  name,
  flavor = 'left',
  inputSentenceIndex = 0,
  onBlur,
  ...inputProps
}) {
  const media = useMediaAtom();
  const [inputRef, setRef, isUpdated] = useMountedRef();
  const isActive = currentIndex >= index;
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [queue, setQueue] = useState({
    0: true,
  });

  const _sentenceIndex = useMemo(() => {
    return inputSentenceIndex;
  }, [inputSentenceIndex]);

  useEffect(() => {
    if (currentIndex === index + 1) {
      const input = inputRef.current;
      if (input) {
        input.blur();
      }
    }
  }, [index, currentIndex]);

  useEffect(() => {
    if (index === 0) return;
    if (!isActive) {
      if (index === 2) {
        console.log('not active');
      }
      return;
    }
    const node = inputRef.current;
    if (!node) {
      if (index === 2) {
        console.log('no node');
      }
    }
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const offsetY = window.innerHeight / 2;
    console.log(rect.y, offsetY);
    if (rect.y < offsetY) {
      return;
    }

    gsap.to(window, {
      scrollTo: {
        y: node,
        // offsetY: document.body.offsetHeight - y,
        offsetY: offsetY,
      },
    });
  }, [index, isActive, inputRef, isUpdated]);

  const sentences = useMemo(() => {
    // if (media === 'mobile') {
    //   if (Array.isArray(text)) {
    //     return [text.join(' ')];
    //   }

    //   return [text];
    // }

    if (Array.isArray(text)) {
      return text;
    }

    return [text];
  }, [text]);

  return sentences.map(
    (text, i) =>
      isActive &&
      queue[i] === true && (
        <div
          key={i}
          className={cx('mb-4 flex', {
            // ['opacity-0']: !isActive,
            ['ml-auto max-w-[1008px]']: flavor === 'right',
          })}
        >
          <span className="flex w-full flex-col flex-wrap whitespace-pre-wrap md:flex-row">
            <span className="font-glow text-3xl md:text-heading-h1">
              <Typewriter
                options={{
                  cursor: '',
                  delay: 55,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(text)
                    .callFunction(() => {
                      setQueue((q) => ({
                        ...q,
                        [i + 1]: true,
                      }));
                      if (i === _sentenceIndex) {
                        setIsInputVisible(true);
                      }
                    })
                    .start();
                }}
              />
            </span>
            {_sentenceIndex === i && (
              <span
                className={cx(
                  'float-right  grow transition-opacity duration-300 md:mb-0 md:pl-4',
                  {
                    'mb-7': _sentenceIndex === sentences.length - 1,
                    ['opacity-0']: !isInputVisible,
                  }
                )}
              >
                <FormInput
                  ref={setRef}
                  _ref={inputRef}
                  isVisible={isInputVisible}
                  name={name}
                  value={value}
                  onChange={(e) => {
                    onChange(e, index);
                  }}
                  onBlur={(e) => {
                    onBlur(e, index);
                  }}
                  {...inputProps}
                />
              </span>
            )}
          </span>
        </div>
      )
  );
}
